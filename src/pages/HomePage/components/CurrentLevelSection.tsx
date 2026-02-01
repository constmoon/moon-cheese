import { Suspense } from 'react';
import { Box, Flex, styled } from 'styled-system/jsx';
import { ProgressBar, Spacing, Text } from '@/ui-lib';
import { SuspenseQueries } from '@suspensive/react-query-5';
import { meQueries } from '@/queries/me';
import { gradeQueries } from '@/queries/grade';
import { GRADE_NAMES_LABEL } from '@/constants/grade';
import { getGradeProgress, getPointsToNextGrade } from '@/utils/grade';
import ErrorSection from '@/components/ErrorSection';
import { ErrorBoundary } from '@suspensive/react';

function CurrentLevelSection() {
  return (
    <styled.section css={{ px: 5, py: 4 }}>
      <Text variant="H1_Bold">현재 등급</Text>

      <Spacing size={4} />

      <Box bg="background.01_white" css={{ px: 5, py: 4, rounded: '2xl' }}>
        <Flex flexDir="column" gap={2}>
          <ErrorBoundary fallback={<ErrorSection />}>
            <Suspense>
              <SuspenseQueries queries={[meQueries.me(), gradeQueries.point()]}>
                {([{ data: meData }, { data: gradePointData }]) => {
                  const { point, grade } = meData;
                  const gradePointList = gradePointData?.gradePointList ?? [];
                  const progress = getGradeProgress(point, grade, gradePointList);
                  const pointsToNext = getPointsToNextGrade(point, grade, gradePointList);

                  return (
                    <>
                      <Text variant="H2_Bold">{GRADE_NAMES_LABEL[grade]}</Text>
                      <ProgressBar value={progress} size="xs" />
                      <Flex justifyContent="space-between">
                        <Box textAlign="left">
                          <Text variant="C1_Bold">현재 포인트</Text>
                          <Text variant="C2_Regular" color="neutral.03_gray">
                            {point}p
                          </Text>
                        </Box>
                        {pointsToNext !== null && (
                          <Box textAlign="right">
                            <Text variant="C1_Bold">다음 등급까지</Text>
                            <Text variant="C2_Regular" color="neutral.03_gray">
                              {pointsToNext}p
                            </Text>
                          </Box>
                        )}
                      </Flex>
                    </>
                  );
                }}
              </SuspenseQueries>
            </Suspense>
          </ErrorBoundary>
        </Flex>
      </Box>
    </styled.section>
  );
}

export default CurrentLevelSection;

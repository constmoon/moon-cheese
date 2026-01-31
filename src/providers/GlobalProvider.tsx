import { queryClient } from '@/lib/queryClient';
import { EnhancedToastProvider } from '@/ui-lib/components/toast';
import { QueryClientProvider } from '@tanstack/react-query';

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <EnhancedToastProvider>{children}</EnhancedToastProvider>
    </QueryClientProvider>
  );
};

export default GlobalProvider;

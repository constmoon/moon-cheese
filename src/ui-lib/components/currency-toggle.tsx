import { Switch as ArkSwitch, switchAnatomy } from '@ark-ui/react';
import { css, cx, type RecipeVariantProps, sva } from 'styled-system/css';
import { Currency } from '@/constants/currency';
import { useCurrencyStore } from '@/stores/useCurrencyStore';

export type CurrencyToggleVariantProps = RecipeVariantProps<typeof currencyToggleRecipe>;

export const currencyToggleRecipe = sva({
  slots: [...switchAnatomy.keys(), 'symbolLeft', 'symbolRight'],
  base: {
    root: {
      alignItems: 'center',
      display: 'flex',
      pos: 'relative',
    },
    control: {
      w: '66px',
      h: '36px',
      p: '3px',
      alignItems: 'center',
      bg: 'background.03_gray',
      rounded: 'lg',
      cursor: 'pointer',
      display: 'inline-flex',
      flexShrink: '0',
      transitionDuration: 'normal',
      transitionProperty: 'background',
      transitionTimingFunction: 'default',
      pos: 'relative',
    },
    thumb: {
      w: '30px',
      h: '30px',
      bg: 'background.01_white',
      rounded: 'lg',
      shadow: 'xs',
      transitionDuration: 'normal',
      transitionProperty: 'transform, background',
      transitionTimingFunction: 'default',
      _checked: {
        transform: 'translateX(100%)',
        bg: 'background.01_white',
      },
    },
    symbolLeft: {
      pos: 'absolute',
      left: 0,
      top: 0,
      w: '36px',
      h: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textStyle: 'B1_Bold',
      transitionDuration: 'normal',
      transitionProperty: 'color, opacity',
      transitionTimingFunction: 'default',
      zIndex: 10,
      pointerEvents: 'none',
    },
    symbolRight: {
      pos: 'absolute',
      right: 0,
      top: 0,
      w: '36px',
      h: '36px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textStyle: 'B1_Bold',
      transitionDuration: 'normal',
      transitionProperty: 'color, opacity',
      transitionTimingFunction: 'default',
      zIndex: 10,
      pointerEvents: 'none',
    },
  },
});

export type CurrencyToggleProps = CurrencyToggleVariantProps & {
  disabled?: boolean;
};

const CurrencyToggle = ({ disabled = false }: CurrencyToggleProps) => {
  const { currency, setCurrency, fetchExchangeRate } = useCurrencyStore();
  const isCheckedKRW = currency === Currency.KRW;

  const handleChange = (details: { checked: boolean }) => {
    setCurrency(details.checked ? Currency.KRW : Currency.USD);
    fetchExchangeRate();
  };

  const classes = currencyToggleRecipe();

  return (
    <ArkSwitch.Root
      checked={isCheckedKRW}
      onCheckedChange={handleChange}
      disabled={disabled}
      className={classes.root}
      data-testid="currency-toggle"
    >
      <ArkSwitch.Control className={classes.control}>
        <span
          className={cx(
            classes.symbolLeft,
            css({
              color: isCheckedKRW ? 'neutral.04_gray' : 'neutral.01_black',
            })
          )}
        >
          $
        </span>
        <ArkSwitch.Thumb className={classes.thumb} />
        <span
          className={cx(
            classes.symbolRight,
            css({
              color: isCheckedKRW ? 'neutral.01_black' : 'neutral.04_gray',
            })
          )}
        >
          원
        </span>
      </ArkSwitch.Control>
      <ArkSwitch.HiddenInput />
    </ArkSwitch.Root>
  );
};

CurrencyToggle.displayName = 'CurrencyToggle';

export default CurrencyToggle;

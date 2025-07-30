import { cva } from 'class-variance-authority';
import { intentContainer, variantContainer } from '../../tokens/tokens';
import { createAlias } from '../../utils/create-alias';

// 👇 Config unique et typée pour variants de header
export const headerVariantConfig = {
  variant: variantContainer,
  size: {
    xs: 'max-w-2xl px-4 gap-2',
    sm: 'max-w-3xl px-4 md:px-6 gap-2 md:gap-4',
    xl: 'max-w-5xl px-4 md:px-10  gap-4 md:gap-8',
    full: 'max-w-none',
    default: '',
  },
  intent: intentContainer,
  layout: {
    default: 'flex items-center justify-between',
    centered: 'flex justify-center',
    spaced: 'flex justify-between',
  },
  position: {
    static: '',
    sticky: 'sticky top-0 left-0 right-0 ',
    fixed: 'fixed top-0 left-0 right-0 ',
    absolute: 'absolute top-0 left-0 right-0 ',
  },
} as const;

// 👇 cva utilise la config
export const headerVariants = cva('flex container mx-auto w-full z-50', {
  variants: headerVariantConfig,
  defaultVariants: {
    variant: 'default',
    size: 'full',
    intent: 'default',
    layout: 'default',
    position: 'sticky',
  },
});

// 👇 Alias
export const Header = createAlias('header');

// 👇 Meta générée dynamiquement pour Playground/Doc/devtools
export const headerVariantsMeta = Object.fromEntries(
  Object.entries(headerVariantConfig).map(([variantName, variantValues]) => [
    variantName,
    Object.keys(variantValues),
  ])
) as {
  variant: string[];
  size: string[];
  intent: string[];
  layout: string[];
  position: string[];
};

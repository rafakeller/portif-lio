import { colorsVariants } from '../constants/variants';

export interface VariantColorsProps {
  variant: keyof typeof colorsVariants;
}

export interface VariantBooleanProps {
  variant: boolean | undefined;
}

export type VariantPropsTransform = { variant: number };

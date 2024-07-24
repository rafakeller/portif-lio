import { createGlobalStyle } from 'styled-components';

export interface VariantProps {
  variant: keyof typeof colorsVariants;
}

export interface VariantBooleanProps {
  variant: boolean | undefined;
}

export const colorsVariants = {
  background: '#0C0C0C',
  primary: '#C22085',
  secondary: '#2D9687',
  terceary: '#D5ADA0',
  text: '#FFFFFF',
  subtext: '#E6E6E6',
  transparent: '',
};

export const fontFamilyVariant = {
  primary: '"Hind Siliguri", sans-serif',
  secondary: '"Inconsolata", monospace',
};

export const GlobalStyle = createGlobalStyle`
body{
  background-color:${colorsVariants.background};
  font-family:${fontFamilyVariant.secondary};
}

`;

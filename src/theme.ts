import { CSSVariablesResolver, createTheme } from '@mantine/core';

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {
    '--opensight-hero-height': '40px',
  },
  light: {
    '--opensight-error-background-color': theme.other.errorBackgroundColorLight,
    '--opensight-error-border-color': theme.other.errorBorderColorLight,

    '--opensight-success-background-color': theme.other.successBackgroundColorLight,
    '--opensight-success-border-color': theme.other.successBorderColorLight,

    '--opensight-info-background-color': theme.other.infoBackgroundColorLight,
    '--opensight-info-border-color': theme.other.infoBorderColorLight,

    '--opensight-warning-background-color': theme.other.warningBackgroundColorLight,
    '--opensight-warning-border-color': theme.other.warningBorderColorLight,

    '--mantine-color-text': '#171717',
  },
  dark: {
    '--opensight-error-background-color': theme.other.errorBackgroundColorDark,
    '--opensight-error-border-color': theme.other.errorBorderColorDark,

    '--opensight-success-background-color': theme.other.successBackgroundColorDark,
    '--opensight-success-border-color': theme.other.successBorderColorDark,

    '--opensight-info-background-color': theme.other.infoBackgroundColorDark,
    '--opensight-info-border-color': theme.other.infoBorderColorDark,

    '--opensight-warning-background-color': theme.other.warningBackgroundColorDark,
    '--opensight-warning-border-color': theme.other.warningBorderColorDark,

    '--mantine-color-text': '#FFFFFF',
  },
});

export const theme = createTheme({
  scale: 1,
  fontSmoothing: true,
  focusRing: 'auto',
  white: '#fff',
  black: '#000',
  colors: {
    green: [
      '#F0F9F6',
      '#D8F1E2',
      '#A1DDBA',
      '#7ACF9E',
      '#49BE7A',
      '#11AB51',
      '#0E823E',
      '#0A602E',
      '#074320',
      '#052B15',
    ],
    gray: [
      '#F5F5F5',
      '#E6E6E6',
      '#D9D9D9',
      '#CCCCCC',
      '#B3B3B3',
      '#999999',
      '#808080',
      '#666666',
      '#4D4D4D',
      '#333333',
    ],
    blue: [
      '#EFF5FE',
      '#D6E6FD',
      '#A0C5F9',
      '#77ACF7',
      '#468EF4',
      '#0C6CF2',
      '#0A53B8',
      '#073D88',
      '#052B5F',
      '#031B3D',
    ],
    yellow: [
      '#FFFCF0',
      '#FFF9D9',
      '#FFF098',
      '#FFE969',
      '#FFE13E',
      '#FFD91A',
      '#DBB615',
      '#AF8B0F',
      '#7D5C0B',
      '#403607',
    ],
    orange: [
      '#FDF7F0',
      '#FCEAD8',
      '#F6CD97',
      '#F3B865',
      '#EF9F3B',
      '#EB8117',
      '#C66313',
      '#9C490E',
      '#6B330A',
      '#3B2006',
    ],
    red: [
      '#FDF2F2',
      '#FBDDDE',
      '#F4B1B2',
      '#F0868A',
      '#EA5C61',
      '#E5393D',
      '#C12C30',
      '#962123',
      '#671719',
      '#3A0F10',
    ],
    neutral: [
      '#ffffff',
      '#E6E6E6',
      '#D9D9D9',
      '#CCCCCC',
      '#B3B3B3',
      '#999999',
      '#808080',
      '#666666',
      '#4D4D4D',
      '#171717',
    ],
  },
  primaryShade: 5,
  primaryColor: 'green',
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  fontFamilyMonospace:
    'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
  respectReducedMotion: false,
  cursorType: 'default',
  defaultGradient: {
    from: 'blue',
    to: 'cyan',
    deg: 45,
  },
  defaultRadius: 'sm',
  activeClassName: 'mantine-active',
  focusClassName: '',
  headings: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    fontWeight: '700',
    textWrap: 'wrap',
    sizes: {
      h1: {
        fontSize: 'calc(2.125rem * var(--mantine-scale))',
        lineHeight: '1.3',
      },
      h2: {
        fontSize: 'calc(1.625rem * var(--mantine-scale))',
        lineHeight: '1.35',
      },
      h3: {
        fontSize: 'calc(1.375rem * var(--mantine-scale))',
        lineHeight: '1.4',
      },
      h4: {
        fontSize: 'calc(1.125rem * var(--mantine-scale))',
        lineHeight: '1.45',
      },
      h5: {
        fontSize: 'calc(1rem * var(--mantine-scale))',
        lineHeight: '1.5',
      },
      h6: {
        fontSize: 'calc(0.875rem * var(--mantine-scale))',
        lineHeight: '1.5',
      },
    },
  },
  fontSizes: {
    xs: 'calc(0.75rem * var(--mantine-scale))',
    sm: 'calc(0.875rem * var(--mantine-scale))',
    md: 'calc(1rem * var(--mantine-scale))',
    lg: 'calc(1.125rem * var(--mantine-scale))',
    xl: 'calc(1.25rem * var(--mantine-scale))',
  },
  lineHeights: {
    xs: '1.4',
    sm: '1.45',
    md: '1.55',
    lg: '1.6',
    xl: '1.65',
  },
  radius: {
    xs: 'calc(0.125rem * var(--mantine-scale))',
    sm: 'calc(0.25rem * var(--mantine-scale))',
    md: 'calc(0.5rem * var(--mantine-scale))',
    lg: 'calc(1rem * var(--mantine-scale))',
    xl: 'calc(2rem * var(--mantine-scale))',
  },
  spacing: {
    xs: 'calc(0.625rem * var(--mantine-scale))',
    sm: 'calc(0.75rem * var(--mantine-scale))',
    md: 'calc(1rem * var(--mantine-scale))',
    lg: 'calc(1.25rem * var(--mantine-scale))',
    xl: 'calc(2rem * var(--mantine-scale))',
  },
  breakpoints: {
    xs: '36em',
    sm: '48em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
  shadows: {
    xs: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), 0 calc(0.0625rem * var(--mantine-scale)) calc(0.125rem * var(--mantine-scale)) rgba(0, 0, 0, 0.1)',
    sm: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(0.625rem * var(--mantine-scale)) calc(0.9375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.4375rem * var(--mantine-scale)) calc(0.4375rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))',
    md: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.25rem * var(--mantine-scale)) calc(1.5625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.625rem * var(--mantine-scale)) calc(0.625rem * var(--mantine-scale)) calc(-0.3125rem * var(--mantine-scale))',
    lg: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(1.75rem * var(--mantine-scale)) calc(1.4375rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(0.75rem * var(--mantine-scale)) calc(0.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))',
    xl: '0 calc(0.0625rem * var(--mantine-scale)) calc(0.1875rem * var(--mantine-scale)) rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 calc(2.25rem * var(--mantine-scale)) calc(1.75rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale)), rgba(0, 0, 0, 0.04) 0 calc(1.0625rem * var(--mantine-scale)) calc(1.0625rem * var(--mantine-scale)) calc(-0.4375rem * var(--mantine-scale))',
  },
  other: {
    errorBackgroundColorLight: '#FBDDDE',
    errorBorderColorLight: '#F4B1B2',
    errorBackgroundColorDark: '#3A0F10',
    errorBorderColorDark: '#962123',

    successBackgroundColorLight: '#D8F1E2',
    successBorderColorLight: '#A1DDBA',
    successBackgroundColorDark: '#074320',
    successBorderColorDark: '#0A602E',

    infoBackgroundColorLight: '#D6E6FD',
    infoBorderColorLight: '#A0C5F9',
    infoBackgroundColorDark: '#052B5F',
    infoBorderColorDark: '#0A53B8',

    warningBackgroundColorLight: '#FCEAD8',
    warningBorderColorLight: '#F6CD97',
    warningBackgroundColorDark: '#3B2006',
    warningBorderColorDark: '#9C490E',
  },
});

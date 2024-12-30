import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    text: {
      xxsmall: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      title: string;
      xtitle: string;
      xxtitle: string;
    };
    color: {
      rgb: { primaryBlack: string; primaryWhite: string };
      rgba: { primaryBlack: string; primaryWhite: string };
    };
  }
}

export const theme: DefaultTheme = {
  text: {
    xxsmall: '10px',
    xsmall: '10px',
    small: '14px',
    medium: '18px',
    large: '22px',
    xlarge: '26px',
    xxlarge: '30px',
    title: '',
    xtitle: '',
    xxtitle: '',
  },
  color: {
    rgb: {
      primaryBlack: 'rgb(30,30,30)',
      primaryWhite: 'rgb(230,230,230)',
    },
    rgba: { primaryBlack: '', primaryWhite: 'rgba(230,230,230,0.4)' },
  },
};

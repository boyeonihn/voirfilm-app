import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      main: string;
      accent: string;
      secondary: string;
    };
  }
}

/**
 * Типы для Styled Components
 */
import 'styled-components';

declare module 'styled-components' {
   export interface DefaultTheme {
      colors: {
         primary: string;
         secondary: string;
         background: string;
         cardBackground: string;
         text: string;
         textSecondary: string;
         border: string;
         success: string;
         warning: string;
         danger: string;
      };
      borderRadius: string;
      shadow: string;
      fontFamily: string;
   }
}

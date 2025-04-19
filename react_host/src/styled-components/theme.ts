/**
 * Тема для Styled Components
 */
import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
   colors: {
      primary: '#3a86ff',
      secondary: '#8338ec',
      background: '#f8f9fa',
      cardBackground: '#ffffff',
      text: '#2b2d42',
      textSecondary: '#8d99ae',
      border: '#e9ecef',
      success: '#38b000',
      warning: '#ff9f1c',
      danger: '#e63946',
   },
   borderRadius: '10px',
   shadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
   fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif",
};

export default theme;

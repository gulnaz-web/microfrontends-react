/**
 * Глобальные стили с использованием Styled Components
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* header section */
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export default GlobalStyles;

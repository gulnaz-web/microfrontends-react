/**
 * Глобальные стили с использованием Styled Components
 */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
  }

  #micro-frontend-container {
    margin-top: 25px;
  }

  @media (max-width: 768px) {
    .section-row {
      flex-direction: column;
    }
  }

  /* контейнер */
  .container {
    width: 100%;
    display: flex;
  }

  /* контент */
  .main-content {
    flex: 1;
    margin-left: 200px;
    padding: 20px;
  }

  @media (max-width: 992px) {
    .main-content {
      margin-left: 60px;
    }
  }

  /* карточки */
  .card-section {
    background-color: ${({ theme }) => theme.colors.cardBackground};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.shadow};
    padding: 20px;
    margin-bottom: 25px;
  }
  
  /* Заголовок секции */
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

  /* кнопки */
  .btn {
    padding: 10px 15px;
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;  
  }

  .btn:hover {
    opacity: 0.9;
  }

  .btn-secondary {
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
  }
  
  .btn-secondary:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }

  /* кнопки действий */
  .action-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.textSecondary};
    padding: 5px;
    border-radius: 4px;
  }

  .action-btn:hover {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primary};
  }

  /* пагинация */
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .pagination-pages {
    display: flex;
    gap: 5px;
  }

  .pagination-btn,
  .pagination-page {
    padding: 8px 15px;
    background: none;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    cursor: pointer;
  }

  .pagination-page {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }

  .pagination-page.active {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    border-color: ${({ theme }) => theme.colors.primary};
  } 

  .pagination-btn:hover,
  .pagination-page:hover:not(.active) {
    background-color: ${({ theme }) => theme.colors.background};
  }

`;

export default GlobalStyles;

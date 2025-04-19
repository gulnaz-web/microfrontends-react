import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SidebarContainer = styled.div`
   width: 200px;
   height: 100vh;
   background-color: ${({ theme }) => theme.colors.cardBackground};
   box-shadow: ${({ theme }) => theme.shadow};
   padding: 20px;
   display: flex;
   flex-direction: column;
   position: fixed;
   left: 0;
   top: 0;

   @media (max-width: 992px) {
      width: 60px;
      padding: 15px 10px;
   }
`;

export const Logo = styled.div`
   color: ${({ theme }) => theme.colors.primary};
   font-size: 1.5rem;
   font-weight: bold;
   margin-bottom: 30px;
   display: flex;
   align-items: center;

   svg {
      flex: 0 0 auto;
      margin-right: 10px;
   }

   @media (max-width: 992px) {
      span {
         display: none;
      }
   }
`;

export const NavItem = styled(Link)`
   display: flex;
   align-items: center;
   padding: 10px;
   margin-bottom: 10px;
   border-radius: ${({ theme }) => theme.borderRadius};
   color: ${({ theme }) => theme.colors.textSecondary};
   transition: all 0.2s ease;
   cursor: pointer;
   text-decoration: none;

   &.active,
   &:hover {
      background-color: rgba(58, 134, 255, 0.1);
      color: ${({ theme }) => theme.colors.text};

      svg {
         color: ${({ theme }) => theme.colors.primary};
      }
   }

   svg {
      flex: 0 0 auto;
      margin-right: 10px;
   }

   @media (max-width: 992px) {
      span {
         display: none;
      }
   }
`;

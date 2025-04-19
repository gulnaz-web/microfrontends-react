import styled from 'styled-components';

export const CardPreview = styled.div`
   max-width: 350px;
   height: 200px;
   background: linear-gradient(
      120deg,
      ${({ theme }) => theme.colors.primary},
      ${({ theme }) => theme.colors.secondary}
   );
   color: white;
   border-radius: 15px;
   padding: 20px;
   position: relative;
   margin-bottom: 15px;
`;

export const CardLogo = styled.div`
   font-size: 1rem;
`;

export const CardNumber = styled.div`
   font-size: 1.2rem;
   letter-spacing: 3px;
   margin-top: 30px;
   margin-bottom: 30px;
`;

export const CardFooter = styled.div`
   display: flex;
   justify-content: space-between;
   font-size: 0.8rem;
`;

export const CardPagination = styled.div`
   display: flex;
   justify-content: center;
   margin-top: 15px;
`;

export const CardControls = styled.div`
   display: flex;
   margin-top: 20px;
   gap: 10px;
`;

export const PaginationDot = styled.div`
   width: 8px;
   height: 8px;
   border-radius: 50%;
   background-color: ${({ theme }) => theme.colors.border};
   margin: 0 5px;
   cursor: pointer;

   &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      width: 20px;
      border-radius: 4px;
   }
`;

export const CardControlBtn = styled.div`
   flex: 1;
   padding: 8px;
   background-color: transparent;
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   cursor: pointer;
   font-size: 0.9rem;
   transition: all 0.2s;
   text-align: center;

   &:hover {
      background-color: ${({ theme }) => theme.colors.background};
   }
`;

export const BalanceInfo = styled.div`
   margin-top: 20px;
`;

export const BalanceTitle = styled.div`
   color: ${({ theme }) => theme.colors.textSecondary};
   font-size: 0.8rem;
   margin-bottom: 5px;
`;

export const BalanceAmount = styled.div`
   font-size: 1.8rem;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.primary};
   margin-bottom: 10px;
`;

export const BalanceIncomeAmount = styled.div`
   color: ${({ theme }) => theme.colors.success};
   font-weight: 500;
`;

export const BalanceOutcomeAmount = styled.div`
   color: ${({ theme }) => theme.colors.danger};
   font-weight: 500;
`;

export const IncomeOutcome = styled.div`
   display: flex;
   gap: 20px;
   margin-top: 10px;
`;

export const Income = styled.div`
   flex: 1;
`;

export const Outcome = styled.div`
   flex: 1;
`;

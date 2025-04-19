import styled from 'styled-components';

export const TransactionsSection = styled.div`
   background-color: ${({ theme }) => theme.colors.cardBackground};
   border-radius: ${({ theme }) => theme.borderRadius};
   box-shadow: ${({ theme }) => theme.shadow};
   padding: 20px;
   flex: 1;

   @media (max-width: 992px) {
      flex: 0 0 calc(50% - 10px);
   }

   @media (max-width: 768px) {
      flex: 0 0 100%;
   }
`;

export const TransactionItem = styled.div`
   display: flex;
   align-items: center;
   padding: 12px 0;
   border-bottom: 1px solid ${({ theme }) => theme.colors.border};

   &:last-child {
      border-bottom: none;
   }
`;

export const TransactionIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 10px;
   background-color: #f1f7fe;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 15px;
`;

export const TransactionContent = styled.div`
   flex: 1;
`;

export const TransactionRecipient = styled.div`
   font-weight: 500;
   margin-bottom: 2px;
`;

export const TransactionType = styled.div`
   font-size: 0.8rem;
   color: ${({ theme }) => theme.colors.textSecondary};
`;

export const TransactionDate = styled.div`
   font-size: 0.8rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-right: 15px;
`;

export const TransactionAmount = styled.div`
   font-weight: 600;
`;

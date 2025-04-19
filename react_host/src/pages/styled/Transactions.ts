import styled from 'styled-components';

export const Transaction = styled.div`
   width: 100%;
   border-collapse: collapse;
   border-radius: 10px;
`;

export const TransactionsTable = styled.table`
   width: 100%;
   border-collapse: collapse;
   border-radius: 10px;

   th,
   td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   }

   th {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.textSecondary};
      font-size: 0.85rem;
   }
`;

export const TransactionFilters = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 15px;
   margin-bottom: 20px;
`;

export const FilterGroup = styled.div`
   display: flex;
   flex-direction: column;
   min-width: 200px;

   label {
      font-size: 0.8rem;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.colors.textSecondary};
   }
`;

export const TransactionFilter = styled.select`
   padding: 8px 12px;
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   font-size: 0.9rem;
`;

export const SearchInput = styled.input`
   padding: 8px 12px;
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   font-size: 0.9rem;
`;

export const TransactionStatus = styled.span`
   font-weight: 500;
   color: ${({ theme }) => theme.colors.success};
`;

export const TransactionAmount = styled.span`
   font-weight: 500;
   color: ${({ theme }) => theme.colors.danger};
`;

import styled from 'styled-components';

export const InvoicesTabs = styled.div`
   display: flex;
   overflow-x: auto;
   margin-bottom: 20px;
`;

export const InvoiceTab = styled.button`
   padding: 8px 15px;
   background: none;
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   margin-right: 10px;
   cursor: pointer;
   white-space: nowrap;

   &.active {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
      border-color: ${({ theme }) => theme.colors.primary};
   }
`;

export const InvoicesTable = styled.table`
   width: 100%;
   border-collapse: collapse;

   th,
   td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   }
`;

export const InvoiceActions = styled.div`
   display: flex;
   gap: 5px;
`;

export const ActionButton = styled.button`
   background: none;
   border: none;
   cursor: pointer;
   color: ${({ theme }) => theme.colors.textSecondary};
   padding: 5px;
   border-radius: 4px;

   &:hover {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.primary};
   }

   &.pay-btn {
      color: ${({ theme }) => theme.colors.success};
   }
`;

export const InvoiceStatus = styled.span`
   display: inline-block;
   padding: 5px 10px;
   border-radius: 20px;
   font-size: 0.8rem;
   font-weight: 500;

   &.status-success {
      background-color: rgba(56, 176, 0, 0.1);
      color: ${({ theme }) => theme.colors.success};
   }

   &.status-warning {
      background-color: rgba(255, 159, 28, 0.1);
      color: ${({ theme }) => theme.colors.warning};
   }

   &.status-danger {
      background-color: rgba(230, 57, 70, 0.1);
      color: ${({ theme }) => theme.colors.danger};
   }
`;

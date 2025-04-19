import styled from 'styled-components';

export const Dashboard = styled.div`
   font-family: ${({ theme }) => theme.fontFamily};
`;

export const DashboardContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;

   @media (max-width: 992px) {
      flex-direction: row;
   }

   @media (max-width: 768px) {
      flex-direction: column;
   }
`;

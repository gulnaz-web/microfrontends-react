import styled from 'styled-components';

export const StatisticsSection = styled.div`
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

export const StatsItem = styled.div`
   display: flex;
   align-items: center;
   margin-bottom: 15px;
`;

export const StatsIcon = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 10px;
   background-color: #f1f7fe;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 15px;
`;

export const StatsContent = styled.div`
   flex: 1;
`;

export const StatsTitle = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 5px;
`;

export const StatsCategory = styled.span`
   font-weight: 500;
`;

export const StatsPercentage = styled.span`
   font-weight: 600;
`;

export const ProgressBar = styled.div`
   height: 8px;
   background-color: var(--background-color);
   border-radius: 4px;
   overflow: hidden;
`;

export const ProgressBarFill = styled.div`
   height: 100%;
   border-radius: 4px;

   &.shopping {
      background-color: #ff9f1c;
      width: 52%;
   }

   &.electronics {
      background-color: #38b000;
      width: 21%;
   }

   &.travels {
      background-color: #3a86ff;
      width: 74%;
   }
`;

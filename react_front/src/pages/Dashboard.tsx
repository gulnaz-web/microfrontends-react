import React from 'react';
import GoalsSection from '../components/GoalsSection';
import StatisticsSection from '../components/StatisticsSection';
import TransactionsSection from '../components/TransactionsSection';
import NewTransactionSection from '../components/NewTransactionSection';
import * as Styled from './styled/Dashboard';

const Dashboard: React.FC = () => {
   return (
      <Styled.Dashboard>
         <Styled.DashboardContainer id="micro-dashboard-container">
            <GoalsSection />
            <StatisticsSection />
            <TransactionsSection />
         </Styled.DashboardContainer>

         <NewTransactionSection />
      </Styled.Dashboard>
   );
};

export default Dashboard;

import React from 'react';
import GoalsSection from '../components/GoalsSection';
import StatisticsSection from '../components/StatisticsSection';
import TransactionsSection from '../components/TransactionsSection';
import NewTransactionSection from '../components/NewTransactionSection';
import '../styles/dashboard/dashboard.css';

const Dashboard: React.FC = () => {
   return (
      <div className="micro-frontend-container">
         <div className="section-row">
            <GoalsSection />
            <StatisticsSection />
            <TransactionsSection />
         </div>

         <NewTransactionSection />
      </div>
   );
};

export default Dashboard;

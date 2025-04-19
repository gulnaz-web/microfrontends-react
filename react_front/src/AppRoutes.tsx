import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FinancialGoals from './pages/FinancialGoals';
import Statistics from './pages/Statistics';
import TransactionHistory from './pages/TransactionHistory';
import NewTransaction from './pages/NewTransaction';

const AppRoutes: React.FC = () => {
   return (
      <Routes>
         <Route path="/" element={<Dashboard />} />
         <Route path="/goals" element={<FinancialGoals />} />
         <Route path="/statistics" element={<Statistics />} />
         <Route path="/new-transaction" element={<NewTransaction />} />
         <Route path="/transactions" element={<TransactionHistory />} />
      </Routes>
   );
};

export default AppRoutes;

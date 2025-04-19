import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';
import Cards from './pages/Cards';
import Invoices from './pages/Invoices';
import Goals from './pages/Goals';
import Settings from './pages/Settings';

const AppRoutes: React.FC = () => {
   return (
      <Routes>
         <Route path="/" element={<Overview />} />
         <Route path="/transactions" element={<Transactions />} />
         <Route path="/cards" element={<Cards />} />
         <Route path="/invoices" element={<Invoices />} />
         <Route path="/goals" element={<Goals />} />
         <Route path="/settings" element={<Settings />} />
      </Routes>
   );
};

export default AppRoutes;

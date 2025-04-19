import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/sidebar/sidebar.css';

const Sidebar: React.FC = () => {
   const location = useLocation();
   const path = location.pathname;

   return (
      <div className="sidebar">
         <div className="logo">
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M21 7.28V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V16.72C21.59 16.37 22 15.74 22 15V9C22 8.26 21.59 7.63 21 7.28ZM20 9V15H13V9H20ZM5 19V5H19V7H13C11.9 7 11 7.9 11 9V15C11 16.1 11.9 17 13 17H19V19H5Z"
                  fill="currentColor"
               />
               <path
                  d="M16 13.5C16.8284 13.5 17.5 12.8284 17.5 12C17.5 11.1716 16.8284 10.5 16 10.5C15.1716 10.5 14.5 11.1716 14.5 12C14.5 12.8284 15.1716 13.5 16 13.5Z"
                  fill="currentColor"
               />
            </svg>
            <span>cloudcash</span>
         </div>

         <Link to="/" className={`nav-item ${path === '/' ? 'active' : ''}`}>
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z"
                  fill="currentColor"
               />
            </svg>
            <span>Overview</span>
         </Link>

         <Link
            to="/transactions"
            className={`nav-item ${path === '/transactions' ? 'active' : ''}`}>
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M19 5V19H5V5H19ZM21 3H3V21H21V3ZM12 7H7V9H12V7ZM17 11H7V13H17V11ZM17 15H7V17H17V15Z"
                  fill="currentColor"
               />
            </svg>
            <span>Transactions</span>
         </Link>

         <Link to="/cards" className={`nav-item ${path === '/cards' ? 'active' : ''}`}>
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M20 4H4C2.89 4 2.01 4.89 2.01 6L2 18C2 19.11 2.89 20 4 20H20C21.11 20 22 19.11 22 18V6C22 4.89 21.11 4 20 4ZM20 18H4V12H20V18ZM20 8H4V6H20V8Z"
                  fill="currentColor"
               />
            </svg>
            <span>Cards</span>
         </Link>

         <Link to="/invoices" className={`nav-item ${path === '/invoices' ? 'active' : ''}`}>
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
                  fill="currentColor"
               />
               <path d="M7 12H9V17H7V12Z" fill="currentColor" />
               <path d="M11 7H13V17H11V7Z" fill="currentColor" />
               <path d="M15 9H17V17H15V9Z" fill="currentColor" />
            </svg>
            <span>Invoices</span>
         </Link>

         <Link to="/goals" className={`nav-item ${path === '/goals' ? 'active' : ''}`}>
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path d="M12 2L2 9L12 16L22 9L12 2Z" fill="currentColor" />
               <path d="M2 11V22H22V11L12 18L2 11Z" fill="currentColor" />
            </svg>
            <span>Goals</span>
         </Link>

         <Link
            to="/settings"
            className={`nav-item ${path === '/settings' ? 'active' : ''}`}
            style={{ marginTop: 'auto' }}>
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06C19.72 10.57 20.21 9.96 20.58 9.28C19.95 8.09 19.12 7.05 18.12 6.19C16.93 6.56 15.84 7.13 14.91 7.87C14.32 7.43 13.67 7.07 12.99 6.82C12.59 5.57 11.99 4.41 11.19 3.37C9.84 3.13 8.46 3.13 7.12 3.36C6.32 4.4 5.73 5.55 5.33 6.8C4.65 7.04 4 7.41 3.41 7.85C2.48 7.11 1.39 6.54 0.21 6.18C-0.8 7.04 -1.63 8.09 -2.26 9.29C-1.89 9.97 -1.4 10.58 -0.81 11.06C-0.86 11.36 -0.88 11.68 -0.88 12C-0.88 12.32 -0.86 12.64 -0.82 12.94C-1.41 13.43 -1.9 14.04 -2.27 14.73C-1.64 15.92 -0.81 16.96 0.19 17.82C1.38 17.45 2.47 16.88 3.4 16.14C3.99 16.58 4.64 16.94 5.32 17.19C5.72 18.44 6.32 19.6 7.12 20.64C8.47 20.88 9.85 20.88 11.19 20.64C11.99 19.61 12.58 18.45 12.98 17.2C13.66 16.95 14.31 16.59 14.9 16.15C15.83 16.89 16.92 17.46 18.1 17.82C19.11 16.96 19.94 15.91 20.57 14.71C20.2 14.03 19.71 13.42 19.14 12.94ZM9.16 15.87C7.05 15.87 5.33 14.15 5.33 12.04C5.33 9.93 7.05 8.21 9.16 8.21C11.27 8.21 12.99 9.93 12.99 12.04C12.99 14.15 11.27 15.87 9.16 15.87Z"
                  fill="currentColor"
               />
            </svg>
            <span>Settings</span>
         </Link>
      </div>
   );
};

export default Sidebar;

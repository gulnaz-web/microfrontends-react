import React from 'react';
import '../styles/statistics/statistics.css';

const StatisticsSection: React.FC = () => {
   const stats = [
      {
         id: 1,
         category: 'Shopping',
         percentage: '52%',
         cssClass: 'shopping',
         icon: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M18 6H16C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6H6C4.9 6 4 6.9 4 8V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8C20 6.9 19.1 6 18 6ZM12 4C13.1 4 14 4.9 14 6H10C10 4.9 10.9 4 12 4ZM18 20H6V8H8V10C8 10.55 8.45 11 9 11C9.55 11 10 10.55 10 10V8H14V10C14 10.55 14.45 11 15 11C15.55 11 16 10.55 16 10V8H18V20Z"
                  fill="#ff9f1c"
               />
            </svg>
         ),
      },
      {
         id: 2,
         category: 'Electronics',
         percentage: '21%',
         cssClass: 'electronics',
         icon: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M21 16H3V4H21V16ZM21 2H3C1.9 2 1 2.9 1 4V16C1 17.1 1.9 18 3 18H10V20H8V22H16V20H14V18H21C22.1 18 23 17.1 23 16V4C23 2.9 22.1 2 21 2ZM5 6H7V8H5V6ZM5 10H7V12H5V10ZM9 6H11V8H9V6ZM9 10H11V12H9V10ZM13 6H15V8H13V6ZM13 10H15V12H13V10Z"
                  fill="#38b000"
               />
            </svg>
         ),
      },
      {
         id: 3,
         category: 'Travels',
         percentage: '74%',
         cssClass: 'travels',
         icon: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M20.19 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20.19 4ZM17.73 13.3L14.46 14.36C14.22 14.44 14.01 14.55 13.81 14.68L5.33 10.85C5.23 10.79 5.14 10.72 5.05 10.65C4.89 10.52 4.91 10.26 5.09 10.16L6.16 9.43C6.25 9.37 6.35 9.33 6.45 9.32L13.19 8.5C13.44 8.47 13.69 8.5 13.91 8.59L20.3 11.05C20.55 11.15 20.58 11.5 20.35 11.64L19.04 12.44C18.9 12.53 18.73 12.57 18.57 12.55L12.86 11.97C12.68 11.95 12.5 12.05 12.43 12.21C12.35 12.39 12.45 12.6 12.64 12.65L16.74 13.77C17.13 13.89 17.46 13.8 17.73 13.3Z"
                  fill="#3a86ff"
               />
            </svg>
         ),
      },
   ];

   return (
      <div className="statistics-section">
         <div className="section-header">
            <h2 className="section-title">Outcome Statistics</h2>
         </div>

         <div className="stats-container">
            {stats.map((stat) => (
               <div key={stat.id} className="stats-item">
                  <div className="stats-icon">{stat.icon}</div>
                  <div className="stats-content">
                     <div className="stats-title">
                        <span className="stats-category">{stat.category}</span>
                        <span className="stats-percentage">{stat.percentage}</span>
                     </div>
                     <div className="progress-bar">
                        <div className={`progress-fill ${stat.cssClass}`}></div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default StatisticsSection;

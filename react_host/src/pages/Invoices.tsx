import React from 'react';
import '../styles/invoices/invoices.css';

const Invoices: React.FC = () => {
   return (
      <div className="card-section">
         <div className="section-header">
            <h2 className="section-title">Счета и квитанции</h2>
            <button className="btn">Создать счет</button>
         </div>

         <div className="invoices-tabs">
            <button className="invoice-tab active">Все счета</button>
            <button className="invoice-tab">Ожидающие оплаты</button>
            <button className="invoice-tab">Оплаченные</button>
            <button className="invoice-tab">Просроченные</button>
         </div>

         <div className="invoices-list">
            <table className="invoices-table">
               <thead>
                  <tr>
                     <th>№ счета</th>
                     <th>Получатель</th>
                     <th>Сумма</th>
                     <th>Дата выставления</th>
                     <th>Срок оплаты</th>
                     <th>Статус</th>
                     <th>Действия</th>
                  </tr>
               </thead>
               <tbody>
                  {Array(8)
                     .fill(null)
                     .map((_, index) => (
                        <tr
                           key={index}
                           className={
                              index % 3 === 0 ? 'overdue' : index % 3 === 1 ? 'pending' : ''
                           }>
                           <td>
                              INV-{2023}-{1000 + index}
                           </td>
                           <td>ООО "Компания {index + 1}"</td>
                           <td>₽{(index + 1) * 2500}</td>
                           <td>15.04.2023</td>
                           <td>{index % 3 === 0 ? '01.05.2023' : '15.05.2023'}</td>
                           <td>
                              <span
                                 className={`status-badge ${
                                    index % 3 === 0
                                       ? 'status-danger'
                                       : index % 3 === 1
                                       ? 'status-warning'
                                       : 'status-success'
                                 }`}>
                                 {index % 3 === 0
                                    ? 'Просрочен'
                                    : index % 3 === 1
                                    ? 'Ожидает оплаты'
                                    : 'Оплачен'}
                              </span>
                           </td>
                           <td>
                              <div className="invoice-actions">
                                 <button className="action-btn" title="Скачать PDF">
                                    <svg
                                       width="18"
                                       height="18"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
                                          fill="currentColor"
                                       />
                                    </svg>
                                 </button>
                                 <button className="action-btn" title="Отправить по email">
                                    <svg
                                       width="18"
                                       height="18"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                                          fill="currentColor"
                                       />
                                    </svg>
                                 </button>
                                 {index % 3 !== 2 && (
                                    <button className="action-btn pay-btn" title="Оплатить">
                                       <svg
                                          width="18"
                                          height="18"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg">
                                          <path
                                             d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                                             fill="currentColor"
                                          />
                                       </svg>
                                    </button>
                                 )}
                              </div>
                           </td>
                        </tr>
                     ))}
               </tbody>
            </table>
         </div>

         <div className="pagination">
            <button className="pagination-btn">Назад</button>
            <div className="pagination-pages">
               <button className="pagination-page active">1</button>
               <button className="pagination-page">2</button>
               <button className="pagination-page">3</button>
            </div>
            <button className="pagination-btn">Вперед</button>
         </div>
      </div>
   );
};

export default Invoices;

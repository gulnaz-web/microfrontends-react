import React from 'react';
import * as Styled from './styled/Transactions';

const Transactions: React.FC = () => {
   return (
      <div className="card-section">
         <div className="section-header">
            <h2 className="section-title">Все транзакции</h2>
            <button className="btn btn-secondary">Экспорт CSV</button>
         </div>

         <Styled.Transaction>
            <Styled.TransactionFilters>
               <Styled.FilterGroup>
                  <label>Фильтр по периоду:</label>
                  <Styled.TransactionFilter>
                     <option>За последний месяц</option>
                     <option>За 3 месяца</option>
                     <option>За 6 месяцев</option>
                     <option>За год</option>
                  </Styled.TransactionFilter>
               </Styled.FilterGroup>
               <Styled.FilterGroup>
                  <label>Тип транзакции:</label>
                  <Styled.TransactionFilter>
                     <option>Все</option>
                     <option>Доходы</option>
                     <option>Расходы</option>
                  </Styled.TransactionFilter>
               </Styled.FilterGroup>
               <Styled.FilterGroup>
                  <label>Поиск:</label>
                  <Styled.SearchInput type="text" placeholder="Поиск транзакций..." />
               </Styled.FilterGroup>
            </Styled.TransactionFilters>

            <div className="transaction-listing">
               <Styled.TransactionsTable>
                  <thead>
                     <tr>
                        <th>Дата</th>
                        <th>Получатель</th>
                        <th>Категория</th>
                        <th>Статус</th>
                        <th>Сумма</th>
                        <th>Действия</th>
                     </tr>
                  </thead>
                  <tbody>
                     {Array(10)
                        .fill(null)
                        .map((_, index) => (
                           <tr key={index}>
                              <td>{`${1 + index}.05.2023`}</td>
                              <td>Tesco Market {index}</td>
                              <td>Продукты</td>
                              <td>
                                 <Styled.TransactionStatus>Завершено</Styled.TransactionStatus>
                              </td>
                              <td>
                                 <Styled.TransactionAmount>
                                    -₽{(index + 1) * 250}
                                 </Styled.TransactionAmount>
                              </td>
                              <td>
                                 <button className="action-btn">
                                    <svg
                                       width="18"
                                       height="18"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          d="M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"
                                          fill="currentColor"
                                       />
                                    </svg>
                                 </button>
                              </td>
                           </tr>
                        ))}
                  </tbody>
               </Styled.TransactionsTable>
            </div>

            <div className="pagination">
               <button className="pagination-btn">Назад</button>
               <div className="pagination-pages">
                  <button className="pagination-page active">1</button>
                  <button className="pagination-page">2</button>
                  <button className="pagination-page">3</button>
                  <span>...</span>
                  <button className="pagination-page">10</button>
               </div>
               <button className="pagination-btn">Вперед</button>
            </div>
         </Styled.Transaction>
      </div>
   );
};

export default Transactions;

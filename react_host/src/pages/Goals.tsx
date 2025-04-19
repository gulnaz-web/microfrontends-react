import React from 'react';
import { RemoteGoalsWithErrorBoundary } from '../moduleFederation/modules';
import '../styles/goals/goals.css';

const Goals: React.FC = () => {
   return (
      <div>
         <div className="card-section">
            <div className="section-header">
               <h2 className="section-title">Управление финансовыми целями</h2>
               <button className="btn">Добавить новую цель</button>
            </div>

            <div className="goals-progress">
               <div className="goals-summary">
                  <div className="summary-card">
                     <h3>Всего целей</h3>
                     <div className="summary-value">5</div>
                  </div>
                  <div className="summary-card">
                     <h3>Достигнуто</h3>
                     <div className="summary-value">2</div>
                  </div>
                  <div className="summary-card">
                     <h3>В процессе</h3>
                     <div className="summary-value">3</div>
                  </div>
                  <div className="summary-card">
                     <h3>Общая сумма</h3>
                     <div className="summary-value">₽245,000</div>
                  </div>
               </div>
            </div>
         </div>

         {/* Здесь подключаем компонент целей из микрофронтенда */}
         <div className="micro-frontend-goals card-section">
            <RemoteGoalsWithErrorBoundary />
         </div>

         <div className="card-section">
            <div className="section-header">
               <h2 className="section-title">Создать план сбережений</h2>
            </div>

            <div className="savings-calculator">
               <div className="calculator-form">
                  <div className="form-group">
                     <label>Целевая сумма</label>
                     <input type="number" className="form-control" defaultValue="100000" />
                  </div>
                  <div className="form-group">
                     <label>Срок достижения (месяцев)</label>
                     <input type="range" min="1" max="60" step="1" defaultValue="12" />
                     <div className="range-value">12 месяцев</div>
                  </div>
                  <div className="form-group">
                     <label>Ежемесячный взнос</label>
                     <div className="calculated-value">₽8,334</div>
                  </div>
                  <button className="btn">Создать план</button>
               </div>

               <div className="calculator-tips">
                  <h3>Советы для достижения целей</h3>
                  <ul className="tips-list">
                     <li>Устанавливайте реалистичные цели</li>
                     <li>Создавайте автоматические платежи для пополнения сбережений</li>
                     <li>Отслеживайте свой прогресс ежемесячно</li>
                     <li>Избегайте импульсивных покупок</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Goals;

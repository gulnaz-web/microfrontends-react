import React from 'react';
import CardSection from '../components/CardSection';
import '../styles/cards/cards.css';

const Cards: React.FC = () => {
   return (
      <div>
         <CardSection />

         <div className="card-section">
            <div className="section-header">
               <h2 className="section-title">Управление картами</h2>
               <button className="btn">Заказать новую карту</button>
            </div>

            <div className="cards-management">
               <div className="card-management-tabs">
                  <button className="card-tab active">Активные карты</button>
                  <button className="card-tab">История операций</button>
                  <button className="card-tab">Настройки безопасности</button>
               </div>

               <div className="card-settings">
                  <div className="settings-group">
                     <h3>Лимиты карты</h3>
                     <div className="settings-item">
                        <label>Дневной лимит снятия наличных</label>
                        <div className="setting-control">
                           <input
                              type="range"
                              min="0"
                              max="100000"
                              step="1000"
                              defaultValue="50000"
                           />
                           <span>₽50,000</span>
                        </div>
                     </div>
                     <div className="settings-item">
                        <label>Лимит онлайн-платежей</label>
                        <div className="setting-control">
                           <input
                              type="range"
                              min="0"
                              max="500000"
                              step="5000"
                              defaultValue="100000"
                           />
                           <span>₽100,000</span>
                        </div>
                     </div>
                  </div>

                  <div className="settings-group">
                     <h3>Безопасность</h3>
                     <div className="settings-option">
                        <label className="toggle-control">
                           <input type="checkbox" defaultChecked />
                           <span className="toggle-switch"></span>
                           <span className="toggle-label">Разрешить бесконтактные платежи</span>
                        </label>
                     </div>
                     <div className="settings-option">
                        <label className="toggle-control">
                           <input type="checkbox" defaultChecked />
                           <span className="toggle-switch"></span>
                           <span className="toggle-label">Разрешить онлайн-платежи</span>
                        </label>
                     </div>
                     <div className="settings-option">
                        <label className="toggle-control">
                           <input type="checkbox" />
                           <span className="toggle-switch"></span>
                           <span className="toggle-label">Разрешить платежи за границей</span>
                        </label>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cards;

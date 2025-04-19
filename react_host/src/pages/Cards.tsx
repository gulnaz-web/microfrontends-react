import React from 'react';
import CardSection from '../components/CardSection';
import * as Styled from './styled/Cards';

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
               <Styled.CardManagementTabs>
                  <Styled.CardTabActive>Активные карты</Styled.CardTabActive>
                  <Styled.CardTab>История операций</Styled.CardTab>
                  <Styled.CardTab>Настройки безопасности</Styled.CardTab>
               </Styled.CardManagementTabs>

               <Styled.CardSettings>
                  <Styled.CardSettingsGroup>
                     <h3>Лимиты карты</h3>
                     <Styled.CardSettingsItem>
                        <Styled.CardSettingsLabel>
                           Дневной лимит снятия наличных
                        </Styled.CardSettingsLabel>
                        <Styled.CardSettingsControl>
                           <input
                              type="range"
                              min="0"
                              max="100000"
                              step="1000"
                              defaultValue="50000"
                           />
                           <span>₽50,000</span>
                        </Styled.CardSettingsControl>
                     </Styled.CardSettingsItem>
                     <Styled.CardSettingsItem>
                        <Styled.CardSettingsLabel>Лимит онлайн-платежей</Styled.CardSettingsLabel>
                        <Styled.CardSettingsControl>
                           <input
                              type="range"
                              min="0"
                              max="500000"
                              step="5000"
                              defaultValue="100000"
                           />
                           <span>₽100,000</span>
                        </Styled.CardSettingsControl>
                     </Styled.CardSettingsItem>
                  </Styled.CardSettingsGroup>

                  <Styled.CardSettingsGroup>
                     <h3>Безопасность</h3>
                     <Styled.CardToggleOption>
                        <Styled.CardToggleControl>
                           <input type="checkbox" defaultChecked />
                           <Styled.CardToggleSwitch></Styled.CardToggleSwitch>
                           <Styled.CardToggleLabel>
                              Разрешить бесконтактные платежи
                           </Styled.CardToggleLabel>
                        </Styled.CardToggleControl>
                     </Styled.CardToggleOption>
                     <Styled.CardToggleOption>
                        <Styled.CardToggleControl>
                           <input type="checkbox" defaultChecked />
                           <Styled.CardToggleSwitch></Styled.CardToggleSwitch>
                           <Styled.CardToggleLabel>Разрешить онлайн-платежи</Styled.CardToggleLabel>
                        </Styled.CardToggleControl>
                     </Styled.CardToggleOption>
                     <Styled.CardToggleOption>
                        <Styled.CardToggleControl>
                           <input type="checkbox" />
                           <Styled.CardToggleSwitch></Styled.CardToggleSwitch>
                           <Styled.CardToggleLabel>
                              Разрешить платежи за границей
                           </Styled.CardToggleLabel>
                        </Styled.CardToggleControl>
                     </Styled.CardToggleOption>
                  </Styled.CardSettingsGroup>
               </Styled.CardSettings>
            </div>
         </div>
      </div>
   );
};

export default Cards;

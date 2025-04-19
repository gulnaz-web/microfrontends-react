import React from 'react';
import { RemoteGoalsWithErrorBoundary } from '../moduleFederation/modules';
import * as Styled from './styled/Goals';

const Goals: React.FC = () => {
   return (
      <div>
         <div className="card-section">
            <div className="section-header">
               <h2 className="section-title">Управление финансовыми целями</h2>
               <button className="btn">Добавить новую цель</button>
            </div>

            <Styled.GoalsSummary>
               <Styled.SummaryCard>
                  <h3>Всего целей</h3>
                  <Styled.SummaryValue>5</Styled.SummaryValue>
               </Styled.SummaryCard>
               <Styled.SummaryCard>
                  <h3>Достигнуто</h3>
                  <Styled.SummaryValue>2</Styled.SummaryValue>
               </Styled.SummaryCard>
               <Styled.SummaryCard>
                  <h3>В процессе</h3>
                  <Styled.SummaryValue>3</Styled.SummaryValue>
               </Styled.SummaryCard>
               <Styled.SummaryCard>
                  <h3>Общая сумма</h3>
                  <Styled.SummaryValue>₽245,000</Styled.SummaryValue>
               </Styled.SummaryCard>
            </Styled.GoalsSummary>
         </div>

         <Styled.MicroFrontendGoals>
            <RemoteGoalsWithErrorBoundary />
         </Styled.MicroFrontendGoals>

         <div className="card-section">
            <div className="section-header">
               <h2 className="section-title">Создать план сбережений</h2>
            </div>

            <Styled.SavingsCalculator>
               <Styled.CalculatorForm>
                  <Styled.FormGroup>
                     <Styled.FormLabel>Целевая сумма</Styled.FormLabel>
                     <Styled.FormControl type="number" defaultValue="100000" />
                  </Styled.FormGroup>
                  <Styled.FormGroup>
                     <Styled.FormLabel>Срок достижения (месяцев)</Styled.FormLabel>
                     <input type="range" min="1" max="60" step="1" defaultValue="12" />
                     <Styled.RangeValue>12 месяцев</Styled.RangeValue>
                  </Styled.FormGroup>
                  <Styled.FormGroup>
                     <Styled.FormLabel>Ежемесячный взнос</Styled.FormLabel>
                     <Styled.CalculatedValue>₽8,334</Styled.CalculatedValue>
                  </Styled.FormGroup>
                  <button className="btn">Создать план</button>
               </Styled.CalculatorForm>

               <Styled.CalculatorTips>
                  <h3>Советы для достижения целей</h3>
                  <Styled.TipsList>
                     <li>Устанавливайте реалистичные цели</li>
                     <li>Создавайте автоматические платежи для пополнения сбережений</li>
                     <li>Отслеживайте свой прогресс ежемесячно</li>
                     <li>Избегайте импульсивных покупок</li>
                  </Styled.TipsList>
               </Styled.CalculatorTips>
            </Styled.SavingsCalculator>
         </div>
      </div>
   );
};

export default Goals;

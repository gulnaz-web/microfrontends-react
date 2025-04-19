import React from 'react';
import * as Styled from './styled/GoalsSection';
import { goals } from '../mocks/goals';

const GoalsSection: React.FC = () => {
   return (
      <Styled.GoalsSection>
         <div className="section-header">
            <h2 className="section-title">
               Goals
               <span role="img" aria-label="sparkle">
                  ✨
               </span>
            </h2>
         </div>

         <Styled.GoalsGrid>
            {goals.map((goal) => (
               <Styled.GoalCard key={goal.id}>
                  <Styled.GoalIcon>{goal.icon}</Styled.GoalIcon>
                  <Styled.GoalName>{goal.name}</Styled.GoalName>
                  <Styled.GoalAmount>{goal.amount}</Styled.GoalAmount>
                  <Styled.GoalDate>{goal.date}</Styled.GoalDate>
               </Styled.GoalCard>
            ))}
         </Styled.GoalsGrid>
      </Styled.GoalsSection>
   );
};

export default GoalsSection;

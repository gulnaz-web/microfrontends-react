import React from 'react';
import * as Styled from './styled/StatisticsSection';
import { stats } from '../mocks/stats';

const StatisticsSection: React.FC = () => {
   return (
      <Styled.StatisticsSection>
         <div className="section-header">
            <h2 className="section-title">Outcome Statistics</h2>
         </div>

         <div className="stats-container">
            {stats.map((stat) => (
               <Styled.StatsItem key={stat.id}>
                  <Styled.StatsIcon>{stat.icon}</Styled.StatsIcon>
                  <Styled.StatsContent>
                     <Styled.StatsTitle>
                        <Styled.StatsCategory>{stat.category}</Styled.StatsCategory>
                        <Styled.StatsPercentage>{stat.percentage}</Styled.StatsPercentage>
                     </Styled.StatsTitle>
                     <Styled.ProgressBar>
                        <Styled.ProgressBarFill className={stat.cssClass}></Styled.ProgressBarFill>
                     </Styled.ProgressBar>
                  </Styled.StatsContent>
               </Styled.StatsItem>
            ))}
         </div>
      </Styled.StatisticsSection>
   );
};

export default StatisticsSection;

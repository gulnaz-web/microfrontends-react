import React, { useState } from 'react';
import * as Styled from './styled/CardSection';
import { cards } from '../mocks/cards';

const CardSection: React.FC = () => {
   const [activeCardIndex, setActiveCardIndex] = useState(0);

   return (
      <div className="card-section">
         <div className="section-header">
            <h2 className="section-title">Cards</h2>
            <button className="btn btn-secondary">Add New</button>
         </div>

         <div className="card-container">
            <Styled.CardPreview>
               <Styled.CardLogo>cloudcash</Styled.CardLogo>
               <Styled.CardNumber>{cards[activeCardIndex].number}</Styled.CardNumber>
               <Styled.CardFooter>
                  <div className="card-holder">
                     <div className="label">Card holder</div>
                     <div>{cards[activeCardIndex].holder}</div>
                  </div>
                  <div className="card-expiry">
                     <div className="label">Valid thru</div>
                     <div>{cards[activeCardIndex].validThru}</div>
                  </div>
               </Styled.CardFooter>
            </Styled.CardPreview>

            <Styled.CardPagination>
               {cards.map((_, index) => (
                  <Styled.PaginationDot
                     key={index}
                     className={`${index === activeCardIndex ? 'active' : ''}`}
                     onClick={() => setActiveCardIndex(index)}></Styled.PaginationDot>
               ))}
            </Styled.CardPagination>

            <Styled.CardControls>
               <Styled.CardControlBtn>Weekly payment limit: $350.60 / $4000</Styled.CardControlBtn>
               <Styled.CardControlBtn>Deactivate card</Styled.CardControlBtn>
            </Styled.CardControls>
         </div>

         <Styled.BalanceInfo>
            <Styled.BalanceTitle>Current balance</Styled.BalanceTitle>
            <Styled.BalanceAmount>$ 2850.75</Styled.BalanceAmount>

            <Styled.IncomeOutcome>
               <Styled.Income>
                  <Styled.BalanceTitle>Income</Styled.BalanceTitle>
                  <Styled.BalanceIncomeAmount>$ 1500.50</Styled.BalanceIncomeAmount>
               </Styled.Income>
               <Styled.Outcome>
                  <Styled.BalanceTitle>Outcome</Styled.BalanceTitle>
                  <Styled.BalanceOutcomeAmount>$ 350.60</Styled.BalanceOutcomeAmount>
               </Styled.Outcome>
            </Styled.IncomeOutcome>
         </Styled.BalanceInfo>
      </div>
   );
};

export default CardSection;

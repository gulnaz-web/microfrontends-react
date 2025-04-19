import React, { useState } from 'react';
import '../styles/cards-section/cards-section.css';

const CardSection: React.FC = () => {
   const [activeCardIndex, setActiveCardIndex] = useState(0);

   const cards = [
      {
         number: '5789 **** **** 2847',
         holder: 'Mike Smith',
         validThru: '06/23',
      },
      {
         number: '4568 **** **** 1234',
         holder: 'Mike Smith',
         validThru: '09/24',
      },
   ];

   return (
      <div className="card-section">
         <div className="section-header">
            <h2 className="section-title">Cards</h2>
            <button className="btn btn-secondary">Add New</button>
         </div>

         <div className="card-container">
            <div className="card-preview">
               <div className="card-logo">cloudcash</div>
               <div className="card-number">{cards[activeCardIndex].number}</div>
               <div className="card-footer">
                  <div className="card-holder">
                     <div className="label">Card holder</div>
                     <div>{cards[activeCardIndex].holder}</div>
                  </div>
                  <div className="card-expiry">
                     <div className="label">Valid thru</div>
                     <div>{cards[activeCardIndex].validThru}</div>
                  </div>
               </div>
            </div>

            <div className="card-pagination">
               {cards.map((_, index) => (
                  <div
                     key={index}
                     className={`pagination-dot ${index === activeCardIndex ? 'active' : ''}`}
                     onClick={() => setActiveCardIndex(index)}></div>
               ))}
            </div>

            <div className="card-controls">
               <div className="card-control-btn">Weekly payment limit: $350.60 / $4000</div>
               <div className="card-control-btn">Deactivate card</div>
            </div>
         </div>

         <div className="balance-info">
            <div className="balance-title">Current balance</div>
            <div className="balance-amount">$ 2850.75</div>

            <div className="income-outcome">
               <div className="income">
                  <div className="balance-title">Income</div>
                  <div className="income-amount">$ 1500.50</div>
               </div>
               <div className="outcome">
                  <div className="balance-title">Outcome</div>
                  <div className="outcome-amount">$ 350.60</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default CardSection;

import React from 'react';
import * as Styled from './styled/TransactionsSection';
import { transactions } from '../mocks/transactions';

const TransactionsSection: React.FC = () => {
   return (
      <Styled.TransactionsSection>
         <div className="section-header">
            <h2 className="section-title">Transaction history</h2>
         </div>

         <div className="transactions-list">
            {transactions.map((transaction) => (
               <Styled.TransactionItem key={transaction.id}>
                  <Styled.TransactionIcon>{transaction.icon}</Styled.TransactionIcon>
                  <Styled.TransactionContent>
                     <Styled.TransactionRecipient>
                        {transaction.recipient}
                     </Styled.TransactionRecipient>
                     <Styled.TransactionType>{transaction.type}</Styled.TransactionType>
                  </Styled.TransactionContent>
                  <Styled.TransactionDate>{transaction.date}</Styled.TransactionDate>
                  <Styled.TransactionAmount>{transaction.amount}</Styled.TransactionAmount>
               </Styled.TransactionItem>
            ))}
         </div>
      </Styled.TransactionsSection>
   );
};

export default TransactionsSection;

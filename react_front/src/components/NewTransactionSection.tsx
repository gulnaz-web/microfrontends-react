import React, { useState } from 'react';
import { profiles } from '../mocks/profiles';
import * as Styled from './styled/NewTransactionSection';

const NewTransactionSection: React.FC = () => {
   const [amount, setAmount] = useState('');

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Transfer amount:', amount);
      setAmount('');
   };

   return (
      <Styled.NewTransactionContainer>
         <div className="section-header">
            <h2 className="section-title">New transaction</h2>
         </div>

         <Styled.ProfilesRow>
            {profiles.map((profile) => (
               <Styled.ProfileItem key={profile.id}>
                  <Styled.ProfileAvatar>{profile.avatar}</Styled.ProfileAvatar>
                  <Styled.ProfileName>{profile.name}</Styled.ProfileName>
               </Styled.ProfileItem>
            ))}
         </Styled.ProfilesRow>

         <Styled.TransferForm onSubmit={handleSubmit}>
            <Styled.TransferInput
               type="text"
               placeholder="Enter amount..."
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
            />
            <Styled.Btn type="submit">Send the transfer</Styled.Btn>
         </Styled.TransferForm>
      </Styled.NewTransactionContainer>
   );
};

export default NewTransactionSection;

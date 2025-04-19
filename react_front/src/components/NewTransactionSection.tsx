import React, { useState } from 'react';

const NewTransactionSection: React.FC = () => {
   const [amount, setAmount] = useState('');

   const profiles = [
      {
         id: 1,
         name: 'Ann',
         avatar: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#FF9F1C"
               />
            </svg>
         ),
      },
      {
         id: 2,
         name: 'Marisa',
         avatar: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#E63946"
               />
            </svg>
         ),
      },
      {
         id: 3,
         name: 'John',
         avatar: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#3A86FF"
               />
            </svg>
         ),
      },
      {
         id: 4,
         name: 'Mike',
         avatar: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#38B000"
               />
            </svg>
         ),
      },
      {
         id: 5,
         name: 'Xin',
         avatar: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path
                  d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                  fill="#8338EC"
               />
            </svg>
         ),
      },
      {
         id: 6,
         name: 'Add New',
         avatar: (
            <svg
               width="24"
               height="24"
               viewBox="0 0 24 24"
               fill="none"
               xmlns="http://www.w3.org/2000/svg">
               <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="#8D99AE" />
            </svg>
         ),
      },
   ];

   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Transfer amount:', amount);
      setAmount('');
   };

   return (
      <div className="new-transaction">
         <div className="section-header">
            <h2 className="section-title">New transaction</h2>
         </div>

         <div className="profiles-row">
            {profiles.map((profile) => (
               <div key={profile.id} className="profile-item">
                  <div className="profile-avatar">{profile.avatar}</div>
                  <div className="profile-name">{profile.name}</div>
               </div>
            ))}
         </div>

         <form className="transfer-form" onSubmit={handleSubmit}>
            <input
               type="text"
               className="transfer-input"
               placeholder="Enter amount..."
               value={amount}
               onChange={(e) => setAmount(e.target.value)}
            />
            <button type="submit" className="btn">
               Send the transfer
            </button>
         </form>
      </div>
   );
};

export default NewTransactionSection;

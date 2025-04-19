import React from 'react';
import * as Styled from './styled/Header';

const Header: React.FC = () => {
   return (
      <Styled.HeaderContainer>
         <div>
            <Styled.PageTitle>Weekly sumup</Styled.PageTitle>
            <Styled.PageSubtitle>
               Get summary of your weekly online transactions here.
            </Styled.PageSubtitle>
         </div>

         <Styled.UserProfile>
            <Styled.Notification>
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
                     fill="currentColor"
                  />
               </svg>
               <Styled.NotificationBadge />
            </Styled.Notification>

            <Styled.AccountInfo>
               <Styled.AccountName>Andrew</Styled.AccountName>
               <Styled.AccountType>Admin account</Styled.AccountType>
            </Styled.AccountInfo>

            <Styled.UserAvatar>
               <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                     fill="#FFB930"
                  />
               </svg>
            </Styled.UserAvatar>
         </Styled.UserProfile>
      </Styled.HeaderContainer>
   );
};

export default Header;

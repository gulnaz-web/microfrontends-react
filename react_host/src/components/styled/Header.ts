import styled from 'styled-components';

export const HeaderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 25px;
`;

export const PageTitle = styled.h1`
   font-size: 2rem;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.text};
`;

export const PageSubtitle = styled.p`
   font-size: 0.9rem;
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-top: 5px;
`;

export const UserProfile = styled.div`
   display: flex;
   align-items: center;
   gap: 6px;
`;

export const Notification = styled.div`
   position: relative;
`;

export const NotificationBadge = styled.div`
   background-color: ${({ theme }) => theme.colors.warning};
   border-radius: 50%;
   width: 10px;
   height: 10px;
   position: absolute;
   top: -3px;
   right: -3px;
`;

export const AccountInfo = styled.div`
   text-align: right;
`;

export const AccountName = styled.div`
   font-weight: 500;
   font-size: 0.9rem;
`;

export const AccountType = styled.div`
   font-size: 0.75rem;
   color: ${({ theme }) => theme.colors.textSecondary};
`;

export const UserAvatar = styled.div`
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: #f1f3f5;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-left: 15px;
   overflow: hidden;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`;

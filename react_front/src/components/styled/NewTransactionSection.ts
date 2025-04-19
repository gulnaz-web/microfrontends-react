import styled from 'styled-components';

export const NewTransactionContainer = styled.div`
   margin-top: 30px;
   background-color: ${({ theme }) => theme.colors.cardBackground};
   border-radius: ${({ theme }) => theme.borderRadius};
   box-shadow: ${({ theme }) => theme.shadow};
   padding: 20px;
`;

export const ProfilesRow = styled.div`
   display: flex;
   gap: 10px;
   margin-bottom: 20px;
   overflow-x: auto;
   padding-bottom: 10px;
`;

export const ProfileAvatar = styled.div`
   width: 45px;
   height: 45px;
   border-radius: 50%;
   background-color: #f1f3f5;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 auto 8px;
   overflow: hidden;

   img {
      width: 100%;
      height: 100%;
      object-fit: cover;
   }
`;

export const ProfileName = styled.div`
   font-size: 0.8rem;
   white-space: nowrap;
`;

export const ProfileItem = styled.div`
   text-align: center;
   min-width: 60px;
`;

export const TransferForm = styled.form`
   display: flex;
   align-items: center;
   margin-top: 15px;
`;

export const TransferInput = styled.input`
   flex: 1;
   padding: 10px 15px;
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
   margin-right: 10px;
`;

export const Btn = styled.button`
   padding: 10px 15px;
   border: none;
   border-radius: ${({ theme }) => theme.borderRadius};
   background-color: ${({ theme }) => theme.colors.primary};
   color: white;
   cursor: pointer;
   font-weight: 500;
   transition: all 0.2s;

   &:hover {
      opacity: 0.9;
   }
`;

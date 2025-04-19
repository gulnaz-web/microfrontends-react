import styled from 'styled-components';

export const SettingsLayout = styled.div`
   display: flex;
   gap: 30px;
`;

export const SettingsSidebar = styled.div`
   width: 200px;
`;

export const SettingsContent = styled.div`
   flex: 1;
`;

export const SettingsNav = styled.div`
   display: flex;
   flex-direction: column;
`;

export const SettingsNavItem = styled.button`
   padding: 10px 15px;
   background: none;
   border: none;
   text-align: left;
   cursor: pointer;
   border-radius: ${({ theme }) => theme.borderRadius};
   margin-bottom: 5px;
`;

export const SettingsNavItemActive = styled(SettingsNavItem)`
   background-color: rgba(58, 134, 255, 0.1);
   color: var(--primary-color);
   font-weight: 500;
`;

export const ProfileHeader = styled.div`
   display: flex;
   margin-bottom: 30px;
`;

export const ProfileAvatarLarge = styled.div`
   width: 100px;
   height: 100px;
   border-radius: 50%;
   background-color: #f1f3f5;
   display: flex;
   align-items: center;
   justify-content: center;
   margin-right: 20px;
   position: relative;
`;

export const ProfileDetails = styled.div`
   display: flex;
   flex-direction: column;

   h3 {
      font-size: 1.5rem;
      margin-bottom: 5px;
   }
`;

export const UserStatus = styled.p`
   color: ${({ theme }) => theme.colors.textSecondary};
   margin-bottom: 5px;
`;

export const UserSince = styled.p`
   font-size: 0.8rem;
   color: ${({ theme }) => theme.colors.textSecondary};
`;

export const SettingsForm = styled.div`
   max-width: 800px;
`;

export const FormGroup = styled.div`
   margin-bottom: 20px;
`;

export const FormRow = styled.div`
   display: flex;
   gap: 20px;
   margin-bottom: 15px;

   ${FormGroup} {
      flex: 1;
   }
`;

export const FormLabel = styled.label`
   display: block;
   margin-bottom: 8px;
   font-size: 0.9rem;
`;

export const FormControl = styled.input`
   width: 100%;
   padding: 10px;
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
`;

export const FormSelect = styled.select`
   width: 100%;
   padding: 10px;
   border: 1px solid ${({ theme }) => theme.colors.border};
   border-radius: ${({ theme }) => theme.borderRadius};
`;

export const ChangeAvatarBtn = styled.button`
   position: absolute;
   bottom: -5px;
   right: -5px;
   background-color: ${({ theme }) => theme.colors.primary};
   color: white;
   border: none;
   border-radius: 20px;
   padding: 5px 10px;
   font-size: 0.8rem;
   cursor: pointer;
`;

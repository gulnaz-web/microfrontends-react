import styled from 'styled-components';

export const CardManagementTabs = styled.div`
   display: flex;
   border-bottom: 1px solid ${({ theme }) => theme.colors.border};
   margin-bottom: 20px;
`;

export const CardTab = styled.button`
   padding: 10px 20px;
   background: none;
   border: none;
   border-bottom: 2px solid transparent;
   cursor: pointer;
   font-weight: 500;
   color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CardTabActive = styled(CardTab)`
   color: ${({ theme }) => theme.colors.primary};
   border-bottom-color: ${({ theme }) => theme.colors.primary};
`;

export const CardSettings = styled.div`
   display: flex;
   flex-direction: column;
   gap: 30px;
`;

export const CardSettingsGroup = styled.div`
   h3 {
      font-size: 1.1rem;
      margin-bottom: 15px;
   }
`;

export const CardSettingsItem = styled.div`
   margin-bottom: 15px;
`;

export const CardSettingsLabel = styled.label`
   display: block;
   margin-bottom: 8px;
   font-size: 0.9rem;
`;

export const CardSettingsControl = styled.div`
   display: flex;
   align-items: center;

   input[type='range'] {
      flex: 1;
      margin-right: 15px;
   }

   span {
      font-weight: 500;
      min-width: 80px;
      text-align: right;
   }
`;

export const CardToggleOption = styled.div`
   margin-bottom: 15px;
`;

export const CardToggleSwitch = styled.span`
   position: relative;
   display: inline-block;
   width: 40px;
   height: 20px;
   background-color: ${({ theme }) => theme.colors.border};
   border-radius: 20px;
   margin-right: 10px;

   &:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      border-radius: 50%;
      transition: 0.3s;
   }
`;

export const CardToggleLabel = styled.span`
   font-size: 0.9rem;
`;

export const CardToggleControl = styled.label`
   display: flex;
   align-items: center;
   cursor: pointer;

   input {
      opacity: 0;
      width: 0;
      height: 0;
   }

   input:checked + ${CardToggleSwitch} {
      background-color: ${({ theme }) => theme.colors.primary};
   }

   input:checked + ${CardToggleSwitch}:before {
      transform: translateX(20px);
   }
`;

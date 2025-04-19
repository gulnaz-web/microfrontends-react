import styled from 'styled-components';

export const GoalsSection = styled.div`
   background-color: ${({ theme }) => theme.colors.cardBackground};
   border-radius: ${({ theme }) => theme.borderRadius};
   box-shadow: ${({ theme }) => theme.shadow};
   padding: 20px;
   flex: 1;

   @media (max-width: 992px) {
      flex: 0 0 calc(50% - 10px);
   }

   @media (max-width: 768px) {
      flex: 0 0 100%;
   }
`;

export const GoalsGrid = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
   gap: 20px;
`;

export const GoalCard = styled.div`
   text-align: center;
   padding: 15px;
   border-radius: ${({ theme }) => theme.borderRadius};
   background-color: ${({ theme }) => theme.colors.background};
   transition: all 0.2s;

   &:hover {
      transform: translateY(-5px);
      box-shadow: ${({ theme }) => theme.shadow};
   }
`;

export const GoalIcon = styled.div`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   background-color: rgba(58, 134, 255, 0.1);
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 auto 10px;
`;

export const GoalName = styled.div`
   font-weight: 500;
`;

export const GoalAmount = styled.div`
   font-size: 1.2rem;
   font-weight: 600;
   margin-bottom: 5px;
`;

export const GoalDate = styled.div`
   font-size: 0.8rem;
   color: ${({ theme }) => theme.colors.textSecondary};
`;

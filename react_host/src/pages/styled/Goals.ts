import styled from 'styled-components';

export const MicroFrontendGoals = styled.div`
   margin-bottom: 25px;
`;

export const SavingsCalculator = styled.div`
   display: flex;
   gap: 30px;
`;

export const CalculatorForm = styled.div`
   flex: 1;
`;

export const FormGroup = styled.div`
   margin-bottom: 20px;
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

export const RangeValue = styled.div`
   margin-top: 8px;
   font-size: 0.9rem;
   color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CalculatedValue = styled.div`
   font-size: 1.5rem;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.primary};
`;

export const CalculatorTips = styled.div`
   flex: 1;

   h3 {
      margin-bottom: 15px;
      font-size: 1.1rem;
   }
`;

export const TipsList = styled.ul`
   padding-left: 20px;

   li {
      margin-bottom: 10px;
      color: ${({ theme }) => theme.colors.textSecondary};
   }
`;

export const GoalsSummary = styled.div`
   display: grid;
   grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
   gap: 15px;
   margin-bottom: 20px;
`;

export const SummaryCard = styled.div`
   background-color: ${({ theme }) => theme.colors.background};
   padding: 15px;
   border-radius: ${({ theme }) => theme.borderRadius};
   text-align: center;

   h3 {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.colors.textSecondary};
      margin-bottom: 10px;
   }
`;

export const SummaryValue = styled.div`
   font-size: 1.5rem;
   font-weight: 600;
   color: ${({ theme }) => theme.colors.primary};
`;

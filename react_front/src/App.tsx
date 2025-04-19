import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './AppRoutes';
import theme from './styled-components/theme';
import GlobalStyles from './styled-components/GlobalStyles';

const App: React.FC = () => (
   <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppRoutes />
   </ThemeProvider>
);

export default App;

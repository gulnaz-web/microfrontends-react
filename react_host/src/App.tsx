import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AppRoutes from './AppRoutes';
import theme from './styled-components/theme';
import GlobalStyles from './styled-components/GlobalStyles';
import './styles/global.css';

function App() {
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyles />
         <BrowserRouter>
            <div className="container">
               <Sidebar />

               <div className="main-content">
                  <Header />

                  <AppRoutes />
               </div>
            </div>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;

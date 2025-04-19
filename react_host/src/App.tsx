import { BrowserRouter } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import AppRoutes from './AppRoutes';
import './styles/global.css';

function App() {
   return (
      <BrowserRouter>
         <div className="container">
            <Sidebar />

            <div className="main-content">
               <Header />

               <AppRoutes />
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;

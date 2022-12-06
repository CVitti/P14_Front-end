// @ts-nocheck

// CSS Import
import '../styles/global.css';

// React/React-router/Redux components import
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Custom components import
import HomePage from "../pages/HomePage/HomePage"
import CreateEmployeePage from "../pages/CreateEmployeePage/CreateEmployeePage"
import EmployeeListPage from "../pages/EmployeeListPage/EmployeeListPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Header from '../components/Header/Header';

function Router() {
  return (
    <BrowserRouter>
      <Header /> 
        <Routes> 
                  
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />}/>
          {/* Home Page Route */}
          <Route path="/create" element={<CreateEmployeePage />}/>
          <Route path="/list" element={<EmployeeListPage />}/>

          {/* Error Route */}
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </BrowserRouter>     
  );
}

export default Router;

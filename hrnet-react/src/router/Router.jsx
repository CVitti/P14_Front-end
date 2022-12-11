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


/**
 * Router of the app, managing page to display and routing error cases
 * @returns JSX code of the page accordign to current route
 */
export default function Router() {
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
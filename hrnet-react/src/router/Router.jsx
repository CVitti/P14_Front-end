// @ts-nocheck

// CSS Import
import '../styles/pages/App.css';

// React/React-router/Redux components import
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// Custom components import
import HomePage from "../pages/HomePage"
import CreateEmployeePage from "../pages/CreateEmployeePage"
import EmployeeListPage from "../pages/EmployeeListPage"
import ErrorPage from "../pages/ErrorPage"

function Router() {
  return (
    <BrowserRouter>
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

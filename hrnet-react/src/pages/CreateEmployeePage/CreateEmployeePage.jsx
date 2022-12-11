// @ts-nocheck

// CSS import
import "./CreateEmployeePage.css";

// Custom components import
import Form from "../../components/Form/Form";
import CustomButton from "../../components/CustomButton/CustomButton";

// React/React-router import
import { NavLink } from 'react-router-dom';

// FontAwesomeIcons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faHouse } from "@fortawesome/free-solid-svg-icons";

/**
 * Page used to create a new employee and access to current employees list page
 * @returns JSX Code for the CreateEmployeePage with the form and navigation buttons
 */
export default function CreateEmployeePage(){
  return(
      <main>
        <section className="flex flex--column createSection">
          <h2 className="flex sectionTitle">Create Employee</h2>

          {/* Form used to create a new employee */}
          <Form />
          
          {/* Navigation buttons */}
          <nav className="buttonsContainer flex flex--row">
            <NavLink to="/list">
              <CustomButton>
                <FontAwesomeIcon icon={faList} color="#FFFFFF" fixedWidth size="xl"/>  
                View current employees list
              </CustomButton>
            </NavLink>
            <NavLink to="/">
              <CustomButton> 
                <FontAwesomeIcon icon={faHouse} color="#FFFFFF" fixedWidth size="xl"/>
                Back to home
              </CustomButton>
            </NavLink>         
          </nav>
        </section>
      </main>
  );
}
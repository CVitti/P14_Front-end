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

export default function CreateEmployeePage(){
  return(
      <main>
        <section className="flex flex--column createSection">
          <h2 className="flex sectionTitle">Create Employee</h2>
          <Form />
          
          <div className="buttonsContainer flex flex--row">
            <NavLink to="/list">
              <CustomButton 
                icon={<FontAwesomeIcon icon={faList} color="#FFFFFF" fixedWidth size="xl"/>}>  
                View current employees list
              </CustomButton>
            </NavLink>
            <NavLink to="/">
              <CustomButton 
                icon={<FontAwesomeIcon icon={faHouse} color="#FFFFFF" fixedWidth size="xl"/>}>  
                Back to home
              </CustomButton>
            </NavLink>         
          </div>
        </section>
      </main>
  );
}
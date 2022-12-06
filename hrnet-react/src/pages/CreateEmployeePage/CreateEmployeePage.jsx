// @ts-nocheck

// CSS import
import "./CreateEmployeePage.css";

// Custom components import
import { Modal } from "hrnet-react-components";

// React/React-router/React-redux import
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';

// FontAwesomeIcons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard, faUserPlus, faCalendarDay, faUsersRectangle, faHouseChimneyUser, faList, faHouse } from "@fortawesome/free-solid-svg-icons";

// Store functions import
import { setModalDisplay } from "../../store/store";
import Form from "../../components/Form/Form";

export default function CreateEmployeePage(){

  const testEmployee = {
    firstName: "Prénom",
    lastName: "Nom",
    dateOfBirth: "1997-05-22",
    startDate: "2019-02-18",
    department: "Engeneering",
    street: "Rue",
    city: "Ville",
    state: "Etat",
    zipCode: "Code postal"
  };

  const dispatch = useDispatch();
  const modalIsOpen = useSelector((state) => state.hrStore.isModalOpen);

  function manageModalState(){
    dispatch(setModalDisplay()); 
  }

  return(
      <main>
        
        <section className="flex flex--column createSection">
          <h2 className="flex sectionTitle">Create Employee</h2>
          <Form manageModalState={manageModalState}/>
          
          <div className="buttonsContainer flex flex--row">
            <NavLink to="/list">
              <button className="btn">
                <FontAwesomeIcon icon={faList} color="#FFFFFF" fixedWidth size="xl"/>
                View current employees list
              </button>
            </NavLink>
            <NavLink to="/">
              <button className="btn">
                <FontAwesomeIcon icon={faHouse} color="#FFFFFF" fixedWidth size="xl"/>
                Back to home
              </button>
            </NavLink>         
          </div>
        </section>
        
        <Modal
          isOpen={modalIsOpen}
          modalClose={manageModalState}
        >
          <ul className="createModalList">
            <li className="createModalTitle createModalItem">
              <FontAwesomeIcon icon={faUserPlus} color="#0ca00c" fixedWidth size="xl"/>
              <span className="bold">User added to the list !</span>
            </li>
            <li className="createModalItem">
              <FontAwesomeIcon icon={faIdCard} color="#146EBE" fixedWidth size="xl"/>
              <span className="employeData">{testEmployee.lastName} {testEmployee.firstName} </span>
              (Born on <span className="employeData">{testEmployee.dateOfBirth}</span>)
            </li>
            <li className="createModalItem">
              <FontAwesomeIcon icon={faCalendarDay} color="#146EBE" fixedWidth size="xl"/> Started on 
              <span className="employeData">{testEmployee.startDate}</span>
            </li>
            <li className="createModalItem">
              <FontAwesomeIcon icon={faUsersRectangle} color="#146EBE" fixedWidth size="xl"/>
              <span className="employeData">{testEmployee.department}</span>Department
            </li>
            <li className="createModalItem">
              <FontAwesomeIcon icon={faHouseChimneyUser} color="#146EBE" fixedWidth size="xl"/>
              <span className="employeData">{testEmployee.street}, {testEmployee.city}, {testEmployee.zipCode}, {testEmployee.state}</span>
            </li>
          </ul>       
        </Modal>
      </main>
  );
}
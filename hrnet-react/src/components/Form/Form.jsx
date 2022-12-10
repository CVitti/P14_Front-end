// @ts-nocheck

// CSS import
import "./Form.css"

// FontAwesomeIcons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faIdCard, faUserPlus, faCalendarDay, faUsersRectangle, faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";

// Data import
import { departments, states } from "../../data/data.js";

// Custom components import
import { Modal } from "hrnet-react-components";
import CustomButton from "../CustomButton/CustomButton";

// React/React-router/React-redux import
import { useDispatch, useSelector } from "react-redux";

// Store functions import
import { setModalDisplay, setLastSavedEmployee } from "../../store/store";
import React from "react";

export default function Form(){

    const dispatch = useDispatch();
    const modalIsOpen = useSelector((state) => state.hrStore.isModalOpen);
    const lastEmployee = useSelector((state) => state.hrStore.lastSavedEmployee);
  
    /**
     * Function that saves the display state of the modal
     */
    function manageModalState(){
      dispatch(setModalDisplay()); 
    }

    function saveEmployee(e){
        e.preventDefault();
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dateOfBirth = document.getElementById('date-of-birth').value;
        const startDate = document.getElementById('start-date').value;
        const department = document.getElementById('department').value;
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zipCode = document.getElementById('zip-code').value;

        let currentEmployee = {};

        if (firstName === "" || 
            lastName === "" || 
            dateOfBirth === "" || 
            startDate === "" || 
            department === "" || 
            street === "" || 
            city === "" || 
            state === "" || 
            zipCode === "" ) 
        {
            document.getElementById("formError").classList.add("flex");
            document.getElementById("formError").classList.remove("hidden");
        } else {
            document.getElementById("formError").classList.remove("flex");
            document.getElementById("formError").classList.add("hidden");
            currentEmployee = {
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                startDate: startDate,
                department: department,
                street: street,
                city: city,
                state: state,
                zipCode: zipCode
            };
            dispatch(setModalDisplay());
            dispatch(setLastSavedEmployee(currentEmployee));
            document.forms["create-employee"].reset();
        }
        
    }

    return(
        <React.Fragment>
            <form action="#" id="create-employee" className="flex flex--column">
                <div className="flex flex--row formContainer">
                    <div className="flex flex--column inputContainer">
                        <div className="flex flex--column">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" required />
                        </div>
                        <div className="flex flex--column">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" required />
                        </div>
                        <div className="flex flex--column">
                            <label htmlFor="date-of-birth">Date of Birth</label>
                            <input id="date-of-birth" type="date" required />
                        </div>
                        <div className="flex flex--column">
                            <label htmlFor="start-date">Start Date</label>
                            <input id="start-date" type="date" required />
                        </div>
                        <div className="flex flex--column">
                            <label htmlFor="department">Department</label>
                            <select name="department" id="department" required>
                                {
                                    departments.map((dpt) => (
                                        <option key={dpt}>{dpt}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>

                    <fieldset className="flex flex--column inputContainer">
                        <legend>Address</legend>
                        <div className="flex flex--column">
                            <label htmlFor="state">State</label>
                            <select name="state" id="state" required >
                                {
                                    states.map((state) => (
                                        <option key={state.abbreviation} value={state.abbreviation} name={state.name}>{state.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="flex flex--column">
                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" required />
                        </div>
                        <div className="flex flex--column">
                            <label htmlFor="city">City</label>
                            <input id="city" type="text" required />
                        </div>
                        <div className="flex flex--column">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" required />
                        </div>
                    </fieldset>
                </div>

                <div className="hidden formError" id="formError">
                    All fields from the form must be completed before saving employee
                </div>

                <CustomButton 
                    action={saveEmployee}
                    icon={<FontAwesomeIcon icon={faFloppyDisk} color="#FFFFFF" fixedWidth size="xl"/>}>  
                    Save
                </CustomButton>
            </form>

            <Modal
                isOpen={modalIsOpen}
                modalClose={manageModalState}
            >
                <ul className="createModalList">
                    <li className="createModalTitle createModalItem">
                        <FontAwesomeIcon icon={faUserPlus} color="#0ca00c" fixedWidth size="xl"/>
                        <span className="bold">Employee added to the list !</span>
                    </li>
                    <li className="createModalItem">
                        <FontAwesomeIcon icon={faIdCard} color="#146EBE" fixedWidth size="xl"/>
                        <span className="employeData">{lastEmployee.lastName} {lastEmployee.firstName} </span>
                        (Born on <span className="employeData">{lastEmployee.dateOfBirth}</span>)
                    </li>
                    <li className="createModalItem">
                        <FontAwesomeIcon icon={faCalendarDay} color="#146EBE" fixedWidth size="xl"/>
                        Started on <span className="employeData">{lastEmployee.startDate}</span>
                    </li>
                    <li className="createModalItem">
                        <FontAwesomeIcon icon={faUsersRectangle} color="#146EBE" fixedWidth size="xl"/>
                        <span className="employeData">{lastEmployee.department}</span>Department
                    </li>
                    <li className="createModalItem">
                        <FontAwesomeIcon icon={faHouseChimneyUser} color="#146EBE" fixedWidth size="xl"/>
                        <span className="employeData">{lastEmployee.street}, {lastEmployee.city}, {lastEmployee.zipCode}, {lastEmployee.state}</span>
                    </li>
                </ul>       
            </Modal>
        </React.Fragment>
    );
}
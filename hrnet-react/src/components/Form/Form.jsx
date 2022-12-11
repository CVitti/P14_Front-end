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
import Select from 'react-select';
import CustomButton from "../CustomButton/CustomButton";

// React/React-router/React-redux import
import React from "react";
import { useDispatch, useSelector } from "react-redux"; 

// Store functions import
import { setModalDisplay, setLastSavedEmployee } from "../../store/store";

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

        let currentEmployee = {
            firstName: document.getElementById('first-name').value,
            lastName: document.getElementById('last-name').value,
            dateOfBirth: document.getElementById('date-of-birth').value,
            startDate: document.getElementById('start-date').value,
            department: document.getElementsByName('department')[0].value,
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementsByName('state')[0].value,
            zipCode: document.getElementById('zip-code').value
        };

        if (currentEmployee.firstName === "" || 
            currentEmployee.lastName === "" || 
            currentEmployee.dateOfBirth === "" || 
            currentEmployee.startDate === "" || 
            currentEmployee.department === "" || 
            currentEmployee.street === "" || 
            currentEmployee.city === "" || 
            currentEmployee.state === "" || 
            currentEmployee.zipCode === "" ) 
        {
            document.getElementById("formError").classList.add("flex");
            document.getElementById("formError").classList.remove("hidden");
        } else {
            document.getElementById("formError").classList.remove("flex");
            document.getElementById("formError").classList.add("hidden");
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
                            <Select 
                                inputId="department" 
                                name="department" 
                                isClearable 
                                isSearchable 
                                required 
                                options={departments} 
                                styles={{
                                    control: (baseStyles) => ({
                                      ...baseStyles,
                                      borderColor: "#146EBE",
                                      borderWidth: "2px",
                                      fontWeight: "500"
                                    }),
                                }}
                            />
                        </div>
                    </div>

                    <fieldset className="flex flex--column inputContainer">
                        <legend className="adress">Address</legend>
                        <div className="flex flex--column">
                            <label htmlFor="state">States</label>
                            <Select 
                                id="state" 
                                name="state" 
                                isClearable 
                                isSearchable 
                                required 
                                options={states} 
                                styles={{
                                    control: (baseStyles) => ({
                                      ...baseStyles,
                                      borderColor: "#146EBE",
                                      borderWidth: "2px",
                                      fontWeight: "500"
                                    }),
                                }}
                            />
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

                <CustomButton action={saveEmployee}>
                    <FontAwesomeIcon icon={faFloppyDisk} color="#FFFFFF" fixedWidth size="xl"/>
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
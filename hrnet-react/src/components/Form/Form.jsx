// @ts-nocheck

// CSS import
import "./Form.css"

// FontAwesomeIcons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk, faIdCard, faUserPlus, faCalendarDay, faUsersRectangle, faHouseChimneyUser } from "@fortawesome/free-solid-svg-icons";

// Data import
import { departments, states } from "../../data/data.js";

// React/React-router/React-redux import
import React, { useState } from "react";
import { useDispatch } from "react-redux"; 

// Custom components import
import { Modal } from "hrnet-react-components";
import CustomButton from "../CustomButton/CustomButton";
import CustomSelect from "./CustomSelect/CustomSelect";
import CustomDatePicker from "./CustomDatePicker/CustomDatePicker";

// Store functions import
import { addEmployee } from "../../store/store";

/**
 * Form used to create a new employee
 * @returns JSX Code for the form
 */
export default function Form(){

    const dispatch = useDispatch();
    const [ createdEmployee, setCreatedEmployee ] = useState({});
    const [ modalDisplay, setModalDisplay ] = useState(false);

    /**
     * Function that sets the display state of the modal
     */
    function manageModalState(){
        setModalDisplay(!modalDisplay); 
    }

    /**
     * Check if all fields from the form are non-empty.
     * If at least one field is empty, display an error and form is not validated.
     * Else hide error if already shown, open modal with employee data and save created employee, then reset form fields.
     * @param {object} e Triggered event (click on form validation button)
     */
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
            manageModalState();
            setCreatedEmployee(currentEmployee);
            dispatch(addEmployee(currentEmployee));
            document.forms["create-employee"].reset();
        }
    }

    return(
        <React.Fragment>
            <form action="#" id="create-employee" className="flex flex--column">
                <div className="flex flex--row formContainer">

                    {/* Employee data part of the form */}
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
                            <CustomDatePicker id="date-of-birth"/>
                        </div>
                        <div className="flex flex--column">
                            <label htmlFor="start-date">Start Date</label>
                            <CustomDatePicker id="start-date"/>
                        </div>
                        <div className="flex flex--column">
                        <label htmlFor="department">Department</label>
                            <CustomSelect data={departments} inputId="department"/>
                        </div>
                    </div>

                    {/* Adress part of the form */}
                    <fieldset className="flex flex--column inputContainer">
                        <legend className="adress">Address</legend>
                        <div className="flex flex--column">
                            <label htmlFor="state">States</label>
                            <CustomSelect data={states} inputId="state"/>
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

                {/* Error block displayed on form submit if needed */}
                <div className="hidden formError" id="formError">
                    All fields from the form must be completed before saving employee
                </div>

                {/* Form validation button */}
                <CustomButton action={saveEmployee}>
                    <FontAwesomeIcon icon={faFloppyDisk} color="#FFFFFF" fixedWidth size="xl"/>
                    Save
                </CustomButton>
            </form>

            {/* Custom modal displayed on valid form submit */}
            <Modal
            isOpen={modalDisplay}
            modalClose={manageModalState}>
                <ul className="createModalList">
                    <li className="createModalTitle createModalItem">
                        <FontAwesomeIcon icon={faUserPlus} color="#0ca00c" fixedWidth size="xl"/>
                        <span className="bold">Employee added to the list !</span>
                    </li>
                    <li className="createModalItem">
                        <FontAwesomeIcon icon={faIdCard} color="#146EBE" fixedWidth size="xl"/>
                        <span className="employeeData">{createdEmployee.lastName} {createdEmployee.firstName},</span>
                        Born on <span className="employeeData">{createdEmployee.dateOfBirth}</span>
                    </li>
                    <li className="createModalItem">
                        <FontAwesomeIcon icon={faCalendarDay} color="#146EBE" fixedWidth size="xl"/>
                        Started on <span className="employeeData">{createdEmployee.startDate}</span>
                    </li>
                    <li className="createModalItem">
                        <FontAwesomeIcon icon={faUsersRectangle} color="#146EBE" fixedWidth size="xl"/>
                        <span className="employeeData">{createdEmployee.department}</span>Department
                    </li>
                    <li className="createModalItem">
                        <FontAwesomeIcon icon={faHouseChimneyUser} color="#146EBE" fixedWidth size="xl"/>
                        <span className="employeeData">{createdEmployee.street}, {createdEmployee.city}, {createdEmployee.zipCode}, {createdEmployee.state}</span>
                    </li>
                </ul>       
            </Modal>
        </React.Fragment>
    );
}
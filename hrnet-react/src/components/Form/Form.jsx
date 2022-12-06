// @ts-nocheck

// CSS import
import "./Form.css"

// FontAwesomeIcons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

export default function Form({manageModalState}){
    return(
        <form action="#" id="create-employee" className="flex flex--column">
            <div className="flex flex--row formContainer">
                <div className="flex flex--column inputContainer">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" required />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" required />
                    
                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="date" required />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="date" required />

                    <label htmlFor="department">Department</label>
                    <select name="department" id="department" required>
                        <option>Sales</option>
                        <option>Marketing</option>
                        <option>Engineering</option>
                        <option>Human Resources</option>
                        <option>Legal</option>
                    </select>
                </div>

                <fieldset className="flex flex--column inputContainer">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" required />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" required />

                    <label htmlFor="state">State</label>
                    <select name="state" id="state" required >
                        <option>State 1</option>
                        <option>State 2</option>
                        <option>State 3</option>
                        <option>State 4</option>
                        <option>State 5</option>
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" required />
                </fieldset>
            </div>

            <button onClick={manageModalState} className="btn">
                <FontAwesomeIcon icon={faFloppyDisk} color="#FFFFFF" fixedWidth size="xl"/>
                Save
            </button>
        </form>
    );
}
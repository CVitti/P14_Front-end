// @ts-nocheck

// CSS import
import "./EmployeeListPage.css";

// React-router import
import { NavLink } from 'react-router-dom';

// FontAwesomeIcons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

// Custom components import
import CustomButton from "../../components/CustomButton/CustomButton";

/**
 * Page sued to see the table of of currently saved employees
 * @returns JSX Code for the EmployeeListPage
 */
export default function EmployeeListPage(){
    return (
        <main>
            <section className="flex flex--column listSection">
            <h2 className="flex sectionTitle">Current employees list</h2>
                <NavLink to="/">
                    <CustomButton >
                        <FontAwesomeIcon icon={faHouse} color="#FFFFFF" fixedWidth size="xl"/>
                        Back to home
                    </CustomButton>
                </NavLink>          
            </section>
        </main>
    );
}
// @ts-nocheck

// CSS import
import "./HomePage.css";

// React/React-router components import
import { NavLink } from 'react-router-dom';

// FontAwesomeIcons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

// Custom components import
import CustomButton from "../../components/CustomButton/CustomButton";

export default function HomePage(){
    return (
        <main>
            <section className="flex flex--column homeSection">
                <h2 className="flex sectionTitle">Home page</h2>
                <NavLink to="/create">
                    <CustomButton 
                        icon={<FontAwesomeIcon icon={faUserPlus} color="#FFFFFF" fixedWidth size="xl"/>}>  
                        Create a new employee
                    </CustomButton>
                </NavLink>
            </section>
        </main>
    );
}
// @ts-nocheck

// CSS Import
import "./ErrorPage.css"

// React/React-router components import
import { NavLink } from 'react-router-dom';

// FontAwesomeIcons import
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

// Custom components import
import CustomButton from "../../components/CustomButton/CustomButton";

/**
 * Error page displayed in case of wrong route
 * @returns JSX Code for the error page
 */
export default function ErrorPage(){
    return(
        <main className="errorMain">
            <section className="flex flex--column errorSection">
                <h2 className="flex sectionTitle">Error <span>404</span></h2>
                <p className="bold">
                    This page doesn't exist.
                </p>        
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
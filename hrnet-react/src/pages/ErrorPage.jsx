// @ts-nocheck

// CSS Import
import "../styles/pages/ErrorPage.css"

// React/React-router components import
import { NavLink } from 'react-router-dom';

export default function ErrorPage(){
    return(
        <main>
            <div className="flex flex--column">
                <h2>Error 404</h2>
                <p>
                    This page doesn't exist.
                </p>        
                <NavLink to="/" >
                    Go back to home page
                </NavLink>        
            </div>
        </main>
    );
}
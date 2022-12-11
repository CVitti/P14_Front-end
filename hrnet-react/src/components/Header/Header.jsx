// @ts-nocheck

import "./Header.css";

/**
 * Header of the App, contaning HRnet logo
 * @returns JSX Code for the header
 */
export default function Header(){
    return(
        <header className="flex">
            <h1 className="flex mainTitle">HRnet</h1>
        </header>
    );
}
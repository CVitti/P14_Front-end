// @ts-nocheck

// React/React-router components import
import { NavLink } from 'react-router-dom';

export default function HomePage(){
    return (
        <main>
            <NavLink to="/create">
                Create a new employee
            </NavLink>
        </main>
    );
}
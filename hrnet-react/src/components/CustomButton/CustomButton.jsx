// @ts-nocheck

// CSS import
import "./CustomButton.css";

// Proptypes import
import PropTypes from 'prop-types';

CustomButton.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    action: PropTypes.func
};

/**
 * Customized button with onclick management and adaptative content
 * @param {object} props Props object of the component
 * @param {Node} props.children Code passed between CustomButton component tags
 * @param {Function} props.action Function to exeute on button click
 * @returns JSX Code for the button
 */
export default function CustomButton({children, action}){
    return (
        <button className="btn" onClick={action}>
            {children}
        </button>
    );
};
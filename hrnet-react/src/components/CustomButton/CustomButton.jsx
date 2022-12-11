// @ts-nocheck

// CSS import
import "./CustomButton.css";

export default function CustomButton({action, children}){
    return (
        <button className="btn" onClick={action}>
            {children}
        </button>
    );
};
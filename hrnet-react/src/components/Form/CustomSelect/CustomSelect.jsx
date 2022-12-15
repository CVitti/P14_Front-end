// @ts-nocheck

// CS import
import "./CustomSelect.css";

// Custom components import
import Select from 'react-select';

// Proptypes import
import PropTypes from 'prop-types';

CustomSelect.propTypes = {
    data: PropTypes.arrayOf(
            PropTypes.objectOf(PropTypes.string)
          ).isRequired,
    inputId: PropTypes.string.isRequired
};

/**
 * Customized select with react-select
 * @param {object} props Props object of the component
 * @param {object} props.data Data to display in select input
 * @param {string} props.inputId id to define on input
 * @returns JSX Code for the Select somponent
 */
export default function CustomSelect({data, inputId}){
    return(
        <Select 
            inputId={inputId}
            name={inputId} 
            isClearable 
            isSearchable 
            required 
            options={data} 
            styles={{
                control: (baseStyles) => ({
                    ...baseStyles,
                    borderColor: "#146EBE",
                    borderWidth: "2px",
                    fontWeight: "500"
                }),
            }}
        />
    );
};
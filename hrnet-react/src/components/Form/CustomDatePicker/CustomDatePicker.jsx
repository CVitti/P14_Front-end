// @ts-nocheck

// CS import
import "./CustomDatePicker.css";

// DatePicker components import
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

// React import
import { useState } from 'react';

// Proptypes import
import PropTypes from 'prop-types';

CustomDatePicker.propTypes = {
    id: PropTypes.string.isRequired
};

/**
 * Custom Datepicker using React-datepicker
 * @param {object} props Custom Datepicker props
 * @param {string} props.id Id of the datepicker Input
 * @returns JSX Code for the datepicker Input
 */
export default function CustomDatePicker({id}){
    const [startDate, setStartDate] = useState(new Date());
    return(
        <DatePicker 
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="Select a date..."
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        dateFormat="dd/MM/yyyy"
        fixedHeight
        className="customDatePicker"
        id={id}
        todayButton="Reset"
        />
    ); 
};
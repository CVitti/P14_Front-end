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

    function limitDays(date, days) {
        var result = new Date();
        result.setDate(new Date(date).getDate() + (days));
        return result;
    }

    // For the birth date, max date is fixed to current date - 3650 days (10 Years) to avoid errors
    if (id === "date-of-birth") {
        return(
            <DatePicker 
            selected={limitDays(startDate, -3650)}
            onChange={(date) => setStartDate(date)}
            placeholderText="Select a date..."
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            fixedHeight
            dateFormat="dd/MM/yyyy"
            className="customDatePicker"
            id={id}
            todayButton="Reset"
            maxDate={limitDays(startDate, -3650)}
        />);
    }else{
        return(
            <DatePicker 
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Select a date..."
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
            fixedHeight
            dateFormat="dd/MM/yyyy"
            className="customDatePicker"
            id={id}
            todayButton="Reset"
        />);
    }    
};
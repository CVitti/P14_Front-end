// @ts-nocheck

// Redux Toolkit import
import { configureStore, createSlice } from "@reduxjs/toolkit";

/* Creating a slice of the store. */
const hrStore = createSlice({
    name: 'hrnet',
    initialState: {
        isModalOpen: false,
        lastSavedEmployee : {
            firstName: "",
            lastName: "",
            dateOfBirth: "1970-01-01",
            startDate: "1970-01-01",
            department: "",
            street: "",
            city: "",
            state: "",
            zipCode: ""
        }
    },
   
    reducers: {
        setModalDisplay: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
        setLastSavedEmployee: (state, data) => {
            state.lastSavedEmployee.firstName = data.payload.firstName;
            state.lastSavedEmployee.lastName = data.payload.lastName;
            state.lastSavedEmployee.dateOfBirth = data.payload.dateOfBirth;
            state.lastSavedEmployee.startDate = data.payload.startDate;
            state.lastSavedEmployee.department = data.payload.department;
            state.lastSavedEmployee.street = data.payload.street;
            state.lastSavedEmployee.city = data.payload.city;
            state.lastSavedEmployee.state = data.payload.state;
            state.lastSavedEmployee.zipCode = data.payload.zipCode;
        }
    },
}) 

export const { setModalDisplay, setLastSavedEmployee } = hrStore.actions;

// Enabling redux devtools for the redux browser extension
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/* Creating a store with the reducer. */
export const store = configureStore({
    reducer: {
        hrStore: hrStore.reducer,
    },
    reduxDevtools
})
// @ts-nocheck

// Redux Toolkit import
import { configureStore, createSlice } from "@reduxjs/toolkit";

/* Creating a slice of the store. */
const hrStore = createSlice({
    name: 'hrnet',
    initialState: {
        isModalOpen: false
    },
   
    reducers: {
        setModalDisplay: (state) => {
            state.isModalOpen = !state.isModalOpen;
        },
    },
}) 

export const { setModalDisplay } = hrStore.actions;

// Enabling redux devtools for the redux browser extension
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/* Creating a store with the reducer. */
export const store = configureStore({
    reducer: {
        hrStore: hrStore.reducer,
    },
    reduxDevtools
})
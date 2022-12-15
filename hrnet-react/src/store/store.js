// @ts-nocheck

// Redux Toolkit import
import { configureStore, createSlice } from "@reduxjs/toolkit";
import {combineReducers} from "redux";
// Redux persist import
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

/* Creating a slice of the store. */
const hrStore = createSlice({
    name: 'hrnet',
    initialState: {
        employeesList: [],
        currentId:0
    },
    
    reducers: {
        addEmployee: (state, data) => {
            state.employeesList.push(data.payload);
        },
        setCurrentId: (state) =>{
            state.currentId ++;
        }
    },
}) 

const reducers = combineReducers({
    hrnet: hrStore.reducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const { addEmployee,setCurrentId } = hrStore.actions;

// Enabling redux devtools for the redux browser extension
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

/* Creating a store with the reducer. */
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    reduxDevtools
})
import handleCart from "./handleCart";
import { combineReducers } from "redux"
// import { configureStore } from "@reduxjs/toolkit"


const rootReducers = combineReducers({
    handleCart,
})

export default rootReducers;
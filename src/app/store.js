import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./authSlice"
import userReducer from "./userSlice"

const saveToLocalStorage = (state) => {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem("state", serialisedState)
    } catch (e) {
        console.warn(e)
    }
}

const loadFromLocalStorage = () => {
    try {
        const serialisedState = localStorage.getItem("state")
        if (serialisedState === null) return undefined
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return undefined
    }
}

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
    },
    preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store

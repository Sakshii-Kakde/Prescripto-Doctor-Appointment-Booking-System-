import { createContext } from "react";

export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currency = '₹'

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const calculateAge = (dob) => {
        const today = new Date()
        const birthDate = new Date(dob)

        let age = today.getFullYear() - birthDate.getFullYear()
        return age
    }

    const slotDateFormat = (slotDate) => {
        if (!slotDate) return ""

        const parts = slotDate.includes('_')
        ? slotDate.split('_')
        : slotDate.split('/')

        const [day, month, year] = parts

        const date = new Date(year, month - 1, day)

        return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
        })
    }

    const value = {
        calculateAge,
        slotDateFormat,
        currency,
        backendUrl
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
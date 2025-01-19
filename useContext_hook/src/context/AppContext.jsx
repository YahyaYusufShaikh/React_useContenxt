/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext } from "react";

export const AppContext = createContext()

const ContextProvider = (props)=>{
    const phone = "+91 9820956289";
    const name = "Yahya Yusuf";

    return (
    <AppContext.Provider value={phone}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider
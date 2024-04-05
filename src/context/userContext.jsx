/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserContextProvider=({initial,children})=>{
    const [user,setUser]=useState(initial)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}
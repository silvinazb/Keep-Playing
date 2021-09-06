import React, { createContext, useState } from 'react'

export const UIContext = createContext()

export  const UIContextProvider = ({children}) => {

    const[Loading, setLoading] = useState(false)

    return (
        <UIContext.Provider value={{Loading, setLoading}}>
            {children}
        </UIContext.Provider>
    )
}

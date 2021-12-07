import reat, {createContext, useState} from 'react'

export const ProcedureContext = createContext({})

export const ProcedureContextProvider = ({children}) => {
    const [currentProcedure, setCurrentProcedure] = useState({});
    const [currentCategory, setCurrentCategory] = useState("");

    return (
        <ProcedureContext.Provider
        value = {{
            currentProcedure, 
            setCurrentProcedure,
            currentCategory,
            setCurrentCategory
        }}
        >
            {children}
        </ProcedureContext.Provider>
    )
}
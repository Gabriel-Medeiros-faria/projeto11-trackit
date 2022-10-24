import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    let[user, setUser] = useState()
    const [token, setToken] = useState("")
    const [habits, setHabits] = useState([])
    const [arraySelected, setArraySelected] = useState([])
    const [percent , setPercent]=useState(0)
    return(
        <AuthContext.Provider value={{setUser, user, setToken, token, habits, setHabits, arraySelected, setArraySelected, percent, setPercent}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    let[user, setUser] = useState()
    const [token, setToken] = useState("")
    console.log(token)

    return(
        <AuthContext.Provider value={{setUser, user, setToken, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
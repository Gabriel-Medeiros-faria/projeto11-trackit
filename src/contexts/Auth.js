import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    let[user, setUser] = useState()
    const [token, setToken] = useState("")
    console.log(token)

    useEffect(()=> {
        const userStorage = localStorage.getItem("user")
        const userToken = localStorage.getItem("token")

        if(userToken){
            setUser(JSON.parse(userStorage))
            setToken(JSON.parse(userToken))
        }
        else{
            setUser("")
            setToken("")
        }

    },[])

    return(
        <AuthContext.Provider value={{setUser, user, setToken, token}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
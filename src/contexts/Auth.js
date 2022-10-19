import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){

    let[user, setUser] = useState()



    return(
        <AuthContext.Provider value={{setUser, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
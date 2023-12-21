import React, { createContext, useState } from 'react'

function LoginContext() {

    // STATE
    const [username, setUsername] = useState(undefined)
    const [roleName, setRoleName] = useState(undefined)
    const [isLogin, setIsLogin] = useState(false)

    

    // CONTEXT
    const LoginAuthenticationContext = React.createContext();

    // LOGIN
    userLogin = (authenticationState) => {
        setIsLogin(true)
    }

    // LOGOUT
    userLogout = (authenticationState) => {
        setIsLogin(false)
        setUsername(undefined)
    }

    return (
        <React.Fragment>
            <LoginAuthenticationContext.Provider
                value={{
                    userIsLogin: userLogin,
                    userIsLogout: userLogout,
                }}
            ></LoginAuthenticationContext.Provider>
        </React.Fragment>
    )
}

export default LoginContext
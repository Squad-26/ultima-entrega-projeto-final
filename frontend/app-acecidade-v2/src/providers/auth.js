import React from 'react'

export const AuthContex = React.createContext({})

export const AuthProvider = (props) => {
    const [user, setUser] = React.useState({
        name:"",
        email:"",
        profilePic:"",
        id: "",
        tokenGoogle:'',
        tokenFacebook:'',
        isLoggedIn: false,
        isGoogle: false,
        isFacebook: false,
        isEmail: false,
    })
  
    return (
        <AuthContex.Provider value={{user, setUser}}>
            {props.children}
        </AuthContex.Provider>
    )
}


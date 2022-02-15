import React from 'react'

export const ModalContex = React.createContext(false)

export const ModalProvider = (props) => {
    const [modalIsAtive, setModalIsAtive] = React.useState(false)
  
    return (
        <ModalContex.Provider value={{modalIsAtive, setModalIsAtive}}>
            {props.children}
        </ModalContex.Provider>
    )
}
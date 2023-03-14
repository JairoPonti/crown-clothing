import { createContext, useState } from 'react'


//Valor real al que quiero acceder
export const userContext = createContext ({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const[currentUser,setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    return <userContext.Provider value={value}>{children}</userContext.Provider>
}
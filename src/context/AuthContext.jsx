import { createContext, useContext } from 'react';
import {
    createUserWithEmailAndPassword,

} from "firebase/auth"
import {auth} from "../firebase"

const UserContext = createContext();



export const AuthContextProvider = ({children}) => {
    const [user, setUser] = React.useState({});


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };

    return (

        <UserContext.Provider value={createUser}>
            {children}
        </UserContext.Provider>
    )

}

export const UserAuth = () => {
    return useContext(UserContext);
  };
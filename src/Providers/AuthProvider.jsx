import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { createContext, useState } from 'react';
import { app } from '../firebase/firebae.config';


export const AuthContext = createContext(null);

const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(false)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authData= {
        createUser,
        logInUser
    }

    return (
        <AuthContext.Provider value={authData}>
                {children}
        </AuthContext.Provider>
    );  
};

export default AuthProvider;
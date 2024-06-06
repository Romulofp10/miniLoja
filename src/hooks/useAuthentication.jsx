import {db} from '../firebase/config';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    //clean up
    //deal with memory leak, para nao fica armazenado no cache da memoria nenhum componente.
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfCancelled()
        setError(null);
        setLoading(true)

        try {
            const { user } =  await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            await updateProfile(user, {
                displayName: data.displayName,

            });
            setLoading(false);
            return user;

        } catch (error) {
             console.log(error.message);
             console.log(typeof error.message);

            let systemErrorMessage;

            if(error.message.includes("Password")){
                systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres."
                
            }else if(error.message.includes("email-already")){
                systemErrorMessage = "E-mail ja cadastrado."
            } else{
                systemErrorMessage = "Ocorreu um error, tente mais tarde.";
            }
            setLoading(false);
            setError(systemErrorMessage);
        }
     setLoading(false);
    };

    //evita memoryy leak
    useEffect(() => {
        return () => setCancelled(true);
    },[]);
    
    return {
        createUser,
        auth,
        error,
        loading,
    }

}
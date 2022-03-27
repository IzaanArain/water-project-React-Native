import React, { createContext,userState } from 'react';
import auth from '@react-native-firebase/auth';


export const AuthContext = createContext();

export const AuthProvider =({children})=>{
    const{user,setuser}=userState(null);
return(
    <AuthContext.Provider
    value={{
        user,
        setuser,
        Login: async (email,password)=>{
            try{
                await auth().signInWithEmailAndPassword(email,password);
            }catch(e){
                console.log(e);
            }
        },
        register: async (email,password)=>{
            try{
                await auth().createUserWithEmailAndPassword(email,password);
            }catch(e){
                console.log(e);
            }
        },
        Logout:async()=>{
            try{
                await auth().signOut();
            }catch(e){
                console.log(e);
            }
        }
    }}>
        {children}
    </AuthContext.Provider>
)
}
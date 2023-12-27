import React, {  useEffect, useState } from 'react'
import { auth } from 'config/Firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useReducer } from 'react'
import { createContext } from 'react'
export const AuthContext=createContext()

const initialValue={ isAuthenticated:false }

const reducer=((state,action)=>{
    switch (action.type) {
        case "LOGIN":
            return {isAuthenticated:true, user: action.payload}
        case "LOGOUT":
            return {isAuthenticated:false}
        default:
            return state
    }

})
export default function AuthContextProvider(props) {
  const [authentication,dispatch]=useReducer(reducer,initialValue)   
  const [userDetail,setUserDetail]=useState({})
  const [crntUser,setCurrentUser]=useState({})
  const {user, isAuthenticated}=authentication

  useEffect(()=>{
      onAuthStateChanged(auth, (user) => {
          if (user) {
              dispatch({type:"LOGIN", payload:user})
              setUserDetail(user)
            } else {
                dispatch({type:"LOGOUT"})
            }
        });
    },[])
    

return (
    <>
        <AuthContext.Provider value={{authentication,dispatch,userDetail,isAuthenticated,user,crntUser,setCurrentUser}} >
            {props.children}
        </AuthContext.Provider>
    
    </>
  )
}

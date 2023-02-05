import { firestore } from 'config/Firebase'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
export const CartContext = createContext()

export default function CartContextProvider(props) {
    const [cartLength, setCartLength] = useState(0)
    const [documents, setDocuments] = useState([])

    const { user } = useContext(AuthContext)


    useEffect(() => {
        if (user!== undefined) {
            getData()
        }
        setCartLength(documents.length)
    }, [user, documents])

    const getData = async () => {
        var array = []

        const q = query(collection(firestore, "cart"), where("createdBy.uid", "==", user.uid));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            array.push(doc.data())
            setDocuments(array)
        });
    }
    return (
        <>
            <CartContext.Provider value={{ cartLength, setCartLength }}>
                {props.children}
            </CartContext.Provider>
        </>
    )
}
import React, { useEffect, useState } from 'react'
import { db } from './../firebaseConfig';
import { collection, query, where, getDocs } from "firebase/firestore"
import BusinessContext from './business-context'

const defaultBusinessState = {
    categories: [],
    menu: [],
    name: "",
    id: "",
    table: ""
}

const BusinessProvider = (props) => {
    const [business, setBusiness] = useState(defaultBusinessState);

    useEffect(() => {
        const getBusiness = async () => {
            const [username, table] = window.location.pathname.substring(1).split('_')
            const q = query(collection(db, "businesses"), where("username", "==", username))
            const querySnap = await getDocs(q)
            const doc = querySnap.docs[0];
            const data = doc.data();
            setBusiness({ ...data, id: doc.id, table: table, menu: [...Object.values(data.menu)] })
        }

        getBusiness()
    }, [])

    const context = {
        categories: business.categories,
        menu: business.menu,
        name: business.name,
        id: business.id,
        table: business.table
    }
    return (
        <BusinessContext.Provider value={context}>
            {props.children}
        </BusinessContext.Provider>
    )
}

export default BusinessProvider
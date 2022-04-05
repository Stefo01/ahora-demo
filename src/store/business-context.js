import { createContext } from "react";

const BusinessContext = createContext({
    categories: [],
    menu: [],
    name: "",
    id: "",
    table: ""
})

export default BusinessContext;
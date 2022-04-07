import { createContext } from "react";

const CategoryContext = createContext({
    selectedCategory: "",
    filteredMenu: [],
    selectCategory: (id) => { },
    isSelected: (id) => { },
})

export default CategoryContext;
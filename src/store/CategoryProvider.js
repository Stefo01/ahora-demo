import React, { useState } from 'react'
import BusinessContext from './business-context';
import CategoryContext from './category-context'


const CategoryProvider = (props) => {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [filteredMenu, setFilteredMenu] = useState([]);
    const businessCtx = React.useContext(BusinessContext);

    const selectCategoryHandler = (category) => {
        setSelectedCategory(category);
        setFilteredMenu(businessCtx.menu.filter(item => item.category === category));
    }

    const isSelectedHandler = (category) => {
        return selectedCategory === category;
    }

    const context = {
        selectedCategory: selectedCategory,
        filteredMenu: filteredMenu,
        selectCategory: selectCategoryHandler,
        isSelected: isSelectedHandler
    }

    return (
        <CategoryContext.Provider value={context}>
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider
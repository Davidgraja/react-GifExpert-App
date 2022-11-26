import { useState } from "react";
import { AddCategory , GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{
        
        if(categories.includes(newCategory)) return;

        setCategories(cat => [newCategory ,...cat]);
        
    }

    const deleteCategory = (deleteValue) =>{
        const index = categories.indexOf(deleteValue);
        categories.splice(index, 1)
        setCategories([...categories])
    }

    return (
        <>
            {/* Titulo */}

            <h1>GifExpertApp</h1>

            {/* Input */}

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value) }
            />
            

            {/* Listado de Gifs */}

            { 
                categories.map(category => 
                    (
                        <GifGrid key={ category } category={ category }  onDeleteCategory ={ (value) =>deleteCategory(value) } />
                    )
                )
            
            }
            

        </>
    )
}

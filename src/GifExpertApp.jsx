import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) =>{
        
        if(categories.includes(newCategory)) return;

        setCategories(cat => [newCategory ,...cat]);
        
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
                        <GifGrid key={ category } category={ category }/>
                    )
                )
            
            }
            

        </>
    )
}

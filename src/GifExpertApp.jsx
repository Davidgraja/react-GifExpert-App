import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch' , 'God of war']);

    const onAddCategory = (newCategory) =>{
        // console.log(newCategory)
        setCategories(cat => [newCategory ,...cat])
        
    }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                onNewCategory = {(value) => onAddCategory(value) }
            />
            

            {/* Listado de Gifs */}
            <ol>
                { categories.map(category => <li key={ category }>{ category }</li>) }
            </ol>

                {/* Gif item */}
        </>
    )
}

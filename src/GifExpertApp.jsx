import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch' , 'God of war']);

    // const onAddCategory = () =>{
    //     // setCategories(['Horizon Cero',...categories])

    //     setCategories(cat => ['Horizon Cero',...cat])
        
    // }

    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories={ setCategories }/>
            

            {/* Listado de Gifs */}
            <ol>
                { categories.map(category => <li key={ category }>{ category }</li>) }
            </ol>

                {/* Gif item */}
        </>
    )
}

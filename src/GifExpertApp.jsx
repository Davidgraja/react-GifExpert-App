import { useState } from "react";
import { AddCategory , GifGrid } from "./components";

import { AiFillGithub } from "react-icons/ai";


export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const [amoutGif, setAmoutGif] = useState(1);

    const onAddCategory = (newCategory) =>{
        
        if(categories.includes(newCategory)) return;

        setCategories(cat => [newCategory ,...cat]);
        setAmoutGif(1);
    }

    const onChangeAmout = (amount) =>{
        setAmoutGif(amount)
    }

    const deleteCategory = (deleteValue) =>{
        const index = categories.indexOf(deleteValue);
        categories.splice(index, 1)
        setCategories([...categories])
    }

    return (
        <>

            <div className="container-links">
                <figure>
                    <a href="https://github.com/Davidgraja?tab=repositories"> <AiFillGithub/> </a>
                </figure>
            </div>

            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value)} 
                onChangeAmountGif ={ (value) => onChangeAmout(value)}
            />
            

            {/* Listado de Gifs */}

            { 
                categories.map(category => 
                    (
                        <GifGrid key={ category } category={ category }  onDeleteCategory ={ (value) =>deleteCategory(value) } amount ={ amoutGif } />
                    )
                )
            
            }
            

        </>
    )
}

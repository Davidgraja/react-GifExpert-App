import { useState } from "react";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch' , 'God of war']);
    console.log(categories)
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de Gifs */}
            <ol>
                { categories.map(category => <li key={ category }>{ category }</li>) }
            </ol>

                {/* Gif item */}
        </>
    )
}

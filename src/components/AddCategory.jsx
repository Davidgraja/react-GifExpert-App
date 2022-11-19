import { useState } from 'react';

export function AddCategory({setCategories }) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);

    }

    const onSubmitEvent = (event) =>{
        event.preventDefault();
        
        if(inputValue.trim().length <=1) return;

        setCategories(categories => [inputValue , ...categories]);
        setInputValue('');
        
    }

    return (
        <form onSubmit={ onSubmitEvent }>

            <input 
                type="text" 
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange }
            />

        </form>
    )
}

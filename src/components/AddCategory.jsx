import { useState } from 'react';

export function AddCategory({onNewCategory}) {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target}) =>{
        setInputValue(target.value);

    }

    const onSubmitEvent = (event) =>{
        event.preventDefault();
        const valueInput = inputValue.trim()
        if(valueInput.length <=1) return;

        onNewCategory(valueInput)
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

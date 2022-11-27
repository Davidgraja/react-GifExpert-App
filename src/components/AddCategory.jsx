import { useState } from 'react';

export function AddCategory({onNewCategory , onChangeAmountGif}) {

    const [inputValue, setInputValue] = useState('');
    const [amout, setAmout] = useState("");

    const onInputChange = ({target}) =>{
        setInputValue(target.value);

    }


    const onSubmitEvent = (event) =>{
        event.preventDefault();
        const valueInput = inputValue.trim()
        const valueAmount = amout.trim()
        if(valueInput.length <=1) return;
        if(valueAmount <=0) return;
        
        onNewCategory(valueInput);
        onChangeAmountGif(valueAmount);
        setInputValue('');
        setAmout("");
        
    }

    const onAmoutChange = ({target}) => {
        setAmout(target.value)

    }

    

    return (
        <form onSubmit={ onSubmitEvent }>

            <input 
                type="text" 
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange }
            />

            <input 
                type="text" 
                pattern='^\d+$'
                title='Solo numeros'
                placeholder={'Cantidad'}
                value={ amout }
                onChange={ onAmoutChange }
            />
            
            <input type="submit" value={'Buscar'} className="btn-submit" />
            {/* <button type='submit' ></button> */}

        </form>
    )
}

import { useState } from 'react';
import PropTypes from "prop-types";

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
        setAmout('');
        
    }

    const onAmoutChange = ({target}) => {
        setAmout(target.value)

    }

    

    return (
        <form onSubmit={ onSubmitEvent } aria-label="form" >

            <input 
                type="text" 
                placeholder='Buscar gifs'
                value={ inputValue }
                onChange={ onInputChange }
                data-testid = 'categoryInput'
                
            />

            <input 
                type="text" 
                pattern='^\d+$'
                title='Solo numeros'
                placeholder={'Cantidad'}
                value={ amout }
                onChange={ onAmoutChange }
                data-testid = 'amountInput'
            />
            
            <input type="submit" value={'Buscar'} className="btn-submit" />
            

        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory : PropTypes.func.isRequired,
    onChangeAmountGif : PropTypes.func.isRequired
}

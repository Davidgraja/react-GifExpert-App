import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas sobre <AddCategory/>', () => { 
    
    test('debe de cambiar el valor de la caja de texto al ingresar un categoria', () => { 
        render(<AddCategory onNewCategory={ ()=>{} } onChangeAmountGif={ ()=>{} }/>);
        const input = screen.getByTestId('categoryInput');

        fireEvent.input(input , {target:{value : 'god of war'}});
        expect(input.value).toBe('god of war');
        
    })

    
    test('debe de cambiar el valor de la caja de texto al ingresar un monto', () => { 
        render(<AddCategory onNewCategory={ ()=>{} } onChangeAmountGif={ ()=>{} }/>);
        const input = screen.getByTestId('amountInput');

        fireEvent.input(input , {target:{value : '2'}});
        expect(input.value).toBe('2');
    })



    test('debe de cambiar el valor a un string vacio  de los inputs de categorias y  cantidad al hacer onsubmit', () => { 
        render(<AddCategory onNewCategory={ ()=>{} } onChangeAmountGif={ ()=>{} }/>);
        const inputCategory = screen.getByTestId('categoryInput')
        const inputAmount = screen.getByTestId('amountInput');
        const form = screen.getByRole('form')

        
        fireEvent.input(inputCategory , {target:{value : 'god of war'}});
        fireEvent.input(inputAmount , {target:{value : '2'}});
        fireEvent.submit(form)

        expect(inputCategory.value).toBe('')
        expect(inputAmount.value).toBe('')
    })


    test('se debe de validar el llamado de las funciones requeridas dentro de el componente', () => { 

        const onNewCategory = jest.fn()
        const onChangeAmountGif = jest.fn()

        render(<AddCategory onNewCategory={ onNewCategory } onChangeAmountGif={ onChangeAmountGif }/>);

        const inputCategory = screen.getByTestId('categoryInput')
        const inputAmount = screen.getByTestId('amountInput');
        const form = screen.getByRole('form')

        fireEvent.input(inputCategory , {target:{value : 'god of war'}});
        fireEvent.input(inputAmount , {target:{value : '2'}});
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith('god of war');

        expect(onChangeAmountGif).toHaveBeenCalledWith('2')

        
    })

    test('No se deben de llamar las funciones onNewCategory y onChangeAmountGif  si la categoria  tiene una longitud <= 1 o si la cantidad es  <=0  ', () => {
        const onNewCategory = jest.fn()
        const onChangeAmountGif = jest.fn()

        render(<AddCategory onNewCategory={ onNewCategory } onChangeAmountGif={ onChangeAmountGif }/>);

        const inputCategory = screen.getByTestId('categoryInput')
        const inputAmount = screen.getByTestId('amountInput');
        const form = screen.getByRole('form')

        fireEvent.input(inputCategory , {target:{value : 'g'}});
        fireEvent.input(inputAmount , {target:{value : '0'}});
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onChangeAmountGif).not.toHaveBeenCalled()
        
    })
})
import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('pruebas sobre <GifxpertApp/>', () => { 
    test('prueba', () => { 
        render(<GifExpertApp/>)
        const inputCategory = screen.getByTestId('categoryInput')
        const inputAmount = screen.getByTestId('amountInput');
        const form = screen.getByRole('form')

        
        fireEvent.input(inputCategory , {target:{value : 'god of war'}});
        fireEvent.input(inputAmount , {target:{value : '2'}});
        fireEvent.submit(form)
        expect(screen.getByText('god of war'))
    })
})
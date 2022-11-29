import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"
import { useFetchGifs } from "../src/hooks/useFetchGifs"


describe('pruebas sobre <GifxpertApp/>', () => {

    test('se debe de renderizar la categoria enviada en el html', () => { 


        render(<GifExpertApp/>)
        const inputCategory = screen.getByTestId('categoryInput')
        const inputAmount = screen.getByTestId('amountInput');
        const form = screen.getByRole('form');

        fireEvent.input(inputCategory , {target:{value : 'god of war'}});
        fireEvent.input(inputAmount , {target:{value : '4'}});
        fireEvent.submit(form)

        expect(screen.getByText('god of war'));
        expect(inputCategory.value).toBe('');
        expect(inputAmount.value).toBe('');

        screen.debug();
    })

})
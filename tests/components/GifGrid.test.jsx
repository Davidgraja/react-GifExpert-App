import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas sobre el componente <GifGrid/>' , ()=>{
    const category = 'Batman';
    const onDeleteCategory = jest.fn();
    const amountGif = 2;


    test('debe de mostar el Cargando inicialmente ', () => { 
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render(<GifGrid category={ category }  onDeleteCategory={onDeleteCategory} amount={ amountGif } />)
        expect(screen.getByText('Cargando...')).toBeTruthy();
        
    })

    test('debe de mostar items cuando se cargan las imagenes en useFetchGifs', () => { 
        const gifs = [
            {
                id:'diow2323',
                title:'naruto',
                url:'https://naruto.jpg'
            },

            {
                id:'diow2323',
                title:'god of war',
                url:'https://god of war.jpg'
            }
        ]
        
        useFetchGifs.mockReturnValue({ 
            images: gifs,
            isLoading: false
        })
        
        render(<GifGrid category={ category }  onDeleteCategory={onDeleteCategory} amount={ amountGif }/>)
        expect(screen.getAllByRole('img').length).toBe(2)
        
    })
})
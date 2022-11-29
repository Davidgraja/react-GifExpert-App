import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('pruebas sobre el componente GifItem' , ()=>{

    const titleGif = "god of war";
    const urlGif = "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png";

    test('el compoente GifItem debe de recibir las propiedades title y url',()=>{
    
        render(<GifItem title={titleGif}  url={urlGif} />)
    })

    test('hacer la evaluacion frente el snapshot', ()=>{

        const {container} = render(<GifItem title={titleGif}  url={urlGif} />)
        expect(container).toMatchSnapshot();
    });

    test('debe de mostrar la imagen con el url y el alt indicado ', () => { 

        render(<GifItem title={titleGif}  url={urlGif} />)
        // expect(screen.getByRole('img').src).toBe(urlGif);
        const{src , alt} = screen.getByRole('img');
        expect(src).toBe(urlGif);
        expect(alt).toBe(titleGif);

    })

    test('debe de existir el titulo dentro del componente', () => { 
        render(<GifItem title={titleGif}  url={urlGif} />)
        expect(screen.getByText(titleGif)).toBeTruthy()
        // expect(screen.getByTestId('p-title').innerHTML).toBe(titleGif)
    })

})
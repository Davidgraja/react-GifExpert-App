import { render } from "@testing-library/react";
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

})
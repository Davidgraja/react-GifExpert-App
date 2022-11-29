import { getGifs } from "../../src/helpers/getGifs"

describe('pruebas sobre la funcion getGifs()', () => { 
    
    test('la funcion debe de retornar un arreglo de gifs', async () => { 
        const gifs = await getGifs('Dragon Ball' ,5 );
        // console.log(gifs)
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id : expect.any(String),
            title : expect.any(String),
            url : expect.any(String)
        })
    })

    test('la funcion debe de retornar un arreglo de gifs con una longitud de 2 si se envia un string', async () => { 
        const gifs = await getGifs('Dragon Ball' , 's' );
        
        expect(gifs.length).toBe(2)
        
    })

})
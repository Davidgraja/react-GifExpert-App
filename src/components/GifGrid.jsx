import PropTypes, { element } from 'prop-types'

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category , onDeleteCategory , amount}) => {
    const {images , isLoading} = useFetchGifs(category , amount);

    const eventDelete = () =>{
        onDeleteCategory( category )
    }

    return (
        <>
            
            <section className="container-title-button">
                <h3>{ category }</h3>
                <button onClick={ eventDelete }>Eliminar</button>
            </section>
            
            

        {
            isLoading && (<h2>Cargando...</h2>)
        }

            
            <div className="card-grid">
                { images.map((image) => (

                    <GifItem 
                        key={ image.id }
                        {...image}
                    />

                ))}

            </div>
        </>
    )
}

GifGrid.propTypes = {
    category : PropTypes.string.isRequired,
    onDeleteCategory : PropTypes.func.isRequired,
    amount : PropTypes.string.isRequired
}
import PropsTypes from 'prop-types'

export const GifItem = ({title , url , id}) => {
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p data-testid='p-title'>{ title }</p>
        </div>
    )
}

GifItem.propTypes = {
    title : PropsTypes.string.isRequired,
    url : PropsTypes.string.isRequired
}
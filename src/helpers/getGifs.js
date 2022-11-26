export const getGifs = async ( categoty ) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GY39uAIJ9HaU30gpr4cq4tYRdQc9EiOo&q=${ categoty }&limit=20`;
    const res = await fetch(url);
    const { data } = await res.json();

    const gif = data.map( img => ({
        id : img.id,
        title : img.title,
        url : img.images.downsized_medium.url

    }))
    return(gif)
}
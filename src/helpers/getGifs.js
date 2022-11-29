
export const getGifs = async ( category , amount) =>{
    
    const amountGif = Number(amount)
    
    if(amountGif){
        
            const url = `https://api.giphy.com/v1/gifs/search?api_key=GY39uAIJ9HaU30gpr4cq4tYRdQc9EiOo&q=${ category }&limit=${ amount }`;
            const res = await fetch(url);
            const { data } = await res.json();
        
            const gif = data.map( img => ({
                id : img.id,
                title : img.title,
                url : img.images.downsized_medium.url
        
            }))
            return(gif)

    }else{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=GY39uAIJ9HaU30gpr4cq4tYRdQc9EiOo&q=${ 'not' }&limit=${ 2 }`;
            const res = await fetch(url);
            const { data } = await res.json();
        
            const gif = data.map( img => ({
                id : img.id,
                title : img.title,
                url : img.images.downsized_medium.url
        
            }))
            return(gif)
    }
}

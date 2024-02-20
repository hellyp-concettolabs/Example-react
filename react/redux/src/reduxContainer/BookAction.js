export const buybook = 'buybook'
export const sellbook = 'sellbook'
export const purchase_books = () =>{
    return{
        type : buybook
    }
}

export const sell_books = () =>{
    return{
        type : sellbook
    }
}
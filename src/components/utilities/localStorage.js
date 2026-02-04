const getStoredCart = () =>{
    const storedEmailString = localStorage.getItem('Email');

    if(storedEmailString){
        return JSON.parse(storedEmailString);
    }
    return [];
}
const addToLS = (email) =>{
    const cart = getStoredCart();

    const isDuplicate = cart.some((item) => item.toLowerCase() === email.toLowerCase());

    if(isDuplicate){
        return true;
    }else{
        cart.push(email);
        
        saveCartToLS(cart);
    }

}


const saveCartToLS = (cart) =>{
    const cartStringField = JSON.stringify(cart);
    
    localStorage.setItem('Email', cartStringField);
}

export {addToLS};
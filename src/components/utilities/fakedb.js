// use local storage to manage cart data
const addToDB = id => {
    let shoppingCart;

    // get the shoppingCart
    const storedCard = localStorage.getItem('shopping-cart');
    if(storedCard){
        shoppingCart = JSON.parse(storedCard);
    }
    else {
        shoppingCart = {};
    }


    // add quantity
    const quantity = shoppingCart[id];
    console.log(shoppingCart);

    if(quantity) {
        const newQuantity = parseInt(quantity) + 1;
        shoppingCart[id] = newQuantity;

    }
    else {
        shoppingCart[id] = 1;
    
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

export {addToDB};
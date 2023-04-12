// use local storage to manage cart data
const addToDb = id => {
    let jobCart = getJobCart();
    // add quantity
    const quantity = jobCart[id];
    if (!quantity) {
        jobCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobCart[id] = newQuantity;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(jobCart));
}

const removeFromDb = id => {
    const jobCart = getJobCart();
    if (id in jobCart) {
        delete jobCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(jobCart));
    }
}

const getJobCart = () => {
    let jobCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

const getLocalData=()=>{
    let jobCart = {};
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart
}

export  {
    getLocalData,
    addToDb,
    removeFromDb,
    getJobCart,
    deleteShoppingCart
}

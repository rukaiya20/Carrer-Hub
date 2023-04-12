
const addToDb = id => {
    let jobCart = getJobCart();

    const quantity = jobCart[id];
    if (!quantity) {
        jobCart[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        jobCart[id] = newQuantity;
    }
    localStorage.setItem('job-cart', JSON.stringify(jobCart));
}


const getJobCart = () => {deleteCart
    let jobCart = {};

    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart;
}

const getLocalData=()=>{
    let jobCart = {};
    const storedCart = localStorage.getItem('job-cart');
    if (storedCart) {
        jobCart = JSON.parse(storedCart);
    }
    return jobCart
}

export  {
    getLocalData,
    addToDb,
    getJobCart,
}

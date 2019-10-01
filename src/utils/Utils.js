export const getRandomInt = (lower, upper) => {
    return lower + Math.floor(Math.random() * (upper - lower + 1));
};

export const getRandomArrayValue = (arr) => {
    return arr[getRandomInt(0, arr.length - 1)];
}

export const debounce = (func) => { 
    let debounceTimer 
    return function() { 
        const context = this;
        const args = arguments; 
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => func.apply(context, args), 500);
    } 
};

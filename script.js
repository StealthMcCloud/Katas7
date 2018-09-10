//Katas1 forEach()
function forEach(array, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const currentValue = array[x];
        callBackFunction(currentValue, x, array);
    }
}

//Katas2 map()
function map(array, callbackFunction) {
    for (let x = 0; x < array.length; x++) {
        const newArray = array[x];
        callBackFunction(newArray, x, array);
    }
}

//Katas3 some()
function some(array, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const arrayCheck = array[x];
        if (arrayCheck === array[x]) {
            return true;
        }

        else if (arrayCheck !== array[x]) {
            return false;
        }
        callBackFunction(arrayCheck, x, array);
    }
}

//Katas4 find()
function find(array, callBackFunction) {
    for (let x = 0; x < array.length; x++) {
        const arrayFind = array[x];
        if (arrayFind === array[x]) {
            return arrayFind[x]
        }

        else if (arrayFind !== array[x]) {
            return "undefined";
        }
    }
    callBackFunction(arrayFind, x, array);
}

//Katas5 findIndex()


//Katas6 every()


//Katas7 filter()



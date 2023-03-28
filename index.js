// Creating myEach which takes in a collection and a callback 
// Calls the callback for each element in the collection
// Returns the original collection

// function myEach(collection, callback) {
//   // Your code here
// //   If the collection is an array, loop through it
//     if (Array.isArray(collection)) {
//         for (let i = 0; i < collection.length; i++) {
//             callback(collection[i]);
//         }
//     }

// //   If the collection is an object, loop through it
//     else {
//         for (let key in collection) {
//             callback(collection[key]);
//         }
//     }

//     return collection;
// }


function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for(let i = 0; i < collection.length; i++){
            callback(collection[i])
        }
    }
    else {
        let values = Object.values(collection)
        for (let index = 0; index < collection.length; index++) {
            const element = collection[index];
            callback(element)
        }
    }
    return collection
}


// Creating myMap which takes in a collection and callback and returns a new array
function myMap(collection, callback) {
    // Your code here
    let newArray = []
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            newArray.push(callback(collection[i]))
        }
    }
    else {
        for (let key in collection) {
            newArray.push(callback(collection[key]))
        }
    }
    return newArray
}

// Creating myReduce which takes in a collection, callback, and optional starting value
// Returns the result of the callback
function myReduce(collection, callback, acc) {
    // Your code here
    if (acc === undefined) {
        acc = collection[0]
        collection = collection.slice(1)
    }

    myEach(collection, function (el) {
        acc = callback(acc, el)
    })
    return acc
}

// Creating myFilter which takes in a collection and callback and returns a new array
function myFilter(collection, callback) {
    // Your code here
    let newArray = []
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i])) {
                newArray.push(collection[i])
            }
        }
    }
    else {
        for (let key in collection) {
            if (callback(collection[key])) {
                newArray.push(collection[key])
            }
        }
    }
    return newArray
}

// Creating myFind which takes in a collection and callback and returns the first element that passes the callback
function myFind(collection, callback) {
    // Your code here
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (callback(collection[i])) {
                return collection[i]
            }
        }
    }
    else {
        for (let key in collection) {
            if (callback(collection[key])) {
                return collection[key]
            }
        }
    }

    return undefined
}

// Creating mySize which takes in a collection and returns the size of the collection
function mySize(collection) {
    // Your code here
    if (Array.isArray(collection)) {
        return collection.length
    }
    else {
        return Object.keys(collection).length
    }
}

// Creating myFirst which takes in an array and a number and returns the first number of elements in the array
function myFirst(array, n) {
    // Your code here
    if (n === undefined) {
        return array[0]
    }
    else {
        return array.slice(0, n)
    }
}

// Creating myLast which takes in an array and a number and returns the last number of elements in the array
function myLast(array, n) {
    // Your code here
    if (n === undefined) {
        return array[array.length - 1]
    }
    else {
        return array.slice(array.length - n)
    }
}

// Creating myKeys which takes in an object and returns an array of the keys
function myKeys(object) {
    // Your code here
    return Object.keys(object)
}

// Creating myValues which takes in an object and returns an array of the values
function myValues(object) {
    // Your code here
    return Object.values(object)
}
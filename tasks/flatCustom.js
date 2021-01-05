function flatCustom(arr = this) {
    return arr.reduce((resultArray, itemArray) => {
        if(Array.isArray(itemArray)) {
            return resultArray.concat(flatCustom(itemArray));
        }
        if(typeof itemArray === 'object' && itemArray !== null) {
            if(Object.keys(itemArray).length > 0) {
                return resultArray.concat(flatCustom(Object.values(itemArray)));
            } else {
                return resultArray;
            }
        }
        return resultArray.concat(itemArray);
    }, []);
}

module.exports = {
    flatCustom
}

// USAGE:

// UNCOMMENTED NEXT 7 LINES FOR TEST IN TERMINAL
// Array.prototype.flatCustom = flatCustom;
// const arr1 = [[2], 3, {}, [1, 2]] // [2, 3, 1, 2]
// const arr2 = [2, 3, [[1, {a: "text"}], [[2]]], 5] // [2, 3, 1, "text", 2, 5]
// const arr3 = [5, {a: 1}, [ 1,[ 3, {}, {c: "a", d: [2, 2]} ] ,[[ 6 ]]]] // [5, 1, 1, 3, "a", 2, 2, 6]
// console.log(arr1.flatCustom());
// console.log(arr2.flatCustom());
// console.log(arr3.flatCustom());

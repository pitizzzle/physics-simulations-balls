const util = {

    forEachPair(array, callback) {
        for (let i = 0; i < array.length; i++) {  // loop every item
            for (let j = i + 1; j < array.length; j++) { // loop every item after the current item
                callback(array[i], array[j], i, j);
            }
        }
    },

};

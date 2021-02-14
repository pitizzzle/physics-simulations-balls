/*
    - vectors are vanilla javascript arrays with numbers in it
    - all methods are functional, and don't mutate the given vector object
*/


window.Vector = {

    /**
     * @param {Array<number>} vec 
     */
    norm(vec) {
        const squared_sum = vec.reduce((acc, x) => (acc + x * x), 0);
        return Math.sqrt(squared_sum);
    },

    /**
     * @param {Array<number>} vec 
     * @param {number} factor 
     * @param {number} divisor 
     */
    scale(vec, factor, divisor = 1) {
        return vec.slice().map(x => x * factor / divisor);
    },

    /**
     * @param {Array<number>} vec 
     */
    normalize(vec) {
        return Vector.scale(vec, 1, Vector.norm(vec));
    },

    /**
     * @param {Array<number>} vec1 
     * @param {Array<number>} vec2 
     */
    dotProduct(vec1, vec2) {
        if (vec1.length !== vec2.length) {
            throw new Error('cannot compute dot product of vectors of unequal length');
        }
        return vec1.reduce((acc, x, i) => (acc + vec1[i] * vec2[i]), 0);
    },

    /**
     * @param {Array<number>} vec1 
     * @param {Array<number>} vec2 
     */
    add(vec1, vec2) {
        if (vec1.length !== vec2.length) {
            throw new Error('cannot add vectors of unequal length');
        }
        return vec1.slice().map((x, i) => (x + vec2[i]));
    },

    /**
     * @param {Array<number>} vec1 
     * @param {Array<number>} vec2 
     */
    subtract(vec1, vec2) {
        if (vec1.length !== vec2.length) {
            throw new Error('cannot subtract vectors of unequal length');
        }
        return vec1.slice().map((x, i) => (x - vec2[i]));
    },

};
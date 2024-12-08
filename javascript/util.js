
Array.isEqual = function(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

export function toInt(x) {
    return parseInt(x, 10);
}

export function parseNumbers(s) {
    return s.matchAll(/\d+/g).map(toInt);
}


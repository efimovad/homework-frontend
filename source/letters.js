const letters = function (arr, isFirst) {

    const reverse = function (str){
        return str.split("").reverse().join("")
    }

    if (typeof arr == 'undefined') {
        return '';
    }
    
    if (typeof isFirst == 'undefined') {
        const counts = Object.create(null)
        arr.split('').forEach(symbol => {
            counts[symbol] = counts[symbol] ? counts[symbol] + 1 : 1
        })
        return arr.split('').filter(symbol => counts[symbol] == 1).join('')
    } else if (isFirst) {
        return Array.from(new Set(arr.split(''))).join('');
    } else if (!isFirst){
        return reverse(letters(reverse(arr), true))
    }
};

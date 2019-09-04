const letters = (str, isFirst) => {

    if ( !str ) return '';
    const arr = str.split('');
    
    if ( typeof isFirst === 'undefined' ) {
        const counts = {};
        arr.forEach(symbol => {
            counts[symbol] = counts[symbol] ? counts[symbol] + 1 : 1;
        })
        return arr.filter( symbol => counts[symbol] === 1 ).join('');
    } else if ( isFirst ) {
        return Array.from( new Set(arr) ).join('');
    } else if ( !isFirst ) {
        return reverse( letters(reverse(str), true) );
    }
}

const reverse = str => {
    return str.split('').reverse().join('');
}


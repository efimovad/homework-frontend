const letters = function (arr, isFirst) {
    set = new Set()
    var unique=''

    function reverse(str){
        return str.split("").reverse().join("")
    }

    if (typeof arr == 'undefined') {
        return unique;
    }

    if (typeof isFirst !== 'undefined' && isFirst) {
        for(var i = 0; i < arr.length; i++){
            if (!set.has(arr[i])){
                unique += arr[i]
                set.add(arr[i])
            }
        }
        return unique;
    } else if (typeof isFirst !== 'undefined' && !isFirst){
        for(var i = arr.length - 1; i >= 0; i--){
            if (!set.has(arr[i])){
                unique += arr[i]
                set.add(arr[i])
            }
        }
        return reverse(unique)
    } else {
        doubleset = new Set()

        for(var i = 0; i < arr.length; i++){
            if (!set.has(arr[i])){
                set.add(arr[i])
            } else {
                doubleset.add(arr[i])
            }
        }
        
        for(var i = 0; i < arr.length; i++){
            if (!doubleset.has(arr[i])){
                unique += arr[i]
            }
        }
        return unique;
    }
};

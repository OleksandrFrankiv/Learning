function filter(array, filterFunc){
    var filtered = [];
    for(var i = 0; i <= array.length - 1; i++){
        filtered = filterFunc(i);
        if(filtered) console.log(array[i])
            else {
                if ( i = array.length - 1 ) break
                    else continue 
        }
    }
}

console.log(filter([1,1,2,3,4,5], n => n < 3))
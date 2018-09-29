function fibonacci( num ){
    var fibmas = [ 0, 1 ];
    for( var i = 2; i <= num; i++ ){
            fibmas[i] = fibmas[ i - 1 ] + fibmas[ i - 2 ];
        }
        return fibmas[num]
    }

console.log(fibonacci( 10 ))
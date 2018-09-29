function fibonacci( num ){
    var fibmas = [ 0, 1 ];
    for( var i = 2; i <= num; i++ ){
            fibmas[i] = fibmas[ i - 1 ] + fibmas[ i - 2 ];
            console.log( fibmas )
        }
    }

console.log(fibonacci( 10 ))
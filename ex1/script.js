const arr1 = [[1,2,3],[4,5,6],[7,8,9]]
const arr2 = [[1,2,3],[4,5,6],[7,8,9]]

function add(array1, array2){
    var arr3 = []
    for(i=0;i<=array1.length-1;i++){
                arr3[i] = []
            for(j=0;j<=array1.length-1;j++){
                arr3[i][j] = array1[i][j] + array2[i][j]
        }
    }
    return arr3
}

console.log(add(arr1, arr2));

function add2(a1, a2) {
    return a1.map((row, i) => {
        return row.map((elem, j) => {
            return elem + arr2[i][j];
        })
    })
}
console.log(add2(arr1, arr2))
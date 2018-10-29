function indexOf(array, index){
    for(var i = 0; i <= array.length - 1; i++){
        if(index >= array.length) return -1;
        if(index == i) return i+1;
    }
}

let arr = [1,2,3,4,5]
console.log(indexOf(arr,3)


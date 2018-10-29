function isSorted( arr ){
    debugger
    for( i = 0; i <= arr.length-1; i++){
        if(arr[i] > arr[i+1]) { 
            console.log("False")
            return false 
        }
        else {
            if(i != arr.length-1) { continue } 
            else {
                console.log("True")
            return true 
            }
        }
    }
}

isSorted([0,1,2,3,5])
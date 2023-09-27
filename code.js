function insertionSortReverse(array) {
    for (var i=array.length-1; i>=0; i--){  //Have i=the end of the array, make sure i>=0 and decrement i each loop
        var val = array[i];     //Store the current element
        var j;  
        for(j=i; j<array.length && array[j+1]<val; j++){    //Compare the current element with the element that follows. 
            array[j]=array[j+1];    //Shift if necessary
        }
        array[j]=val;   //Place current element in the right spot
    }
    return array;
}

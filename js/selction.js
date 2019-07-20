const arr = [7, 4, 6, 9, 10, 5, 2, 8, 1, 3]

//Quick Sort
function quicksort(arr){

}

//Merge Sort

//Insertion Sort
function insertionSort(arr){
    
}

//Selection Sort
function selectionSort(arr){
    for (let i = 0, n = arr.length; i < n; i++){
        for (let j = i + 1; j < n; j++){
            if (arr[j] < arr[i]){
                let swapArr = swap(arr[i], arr[j]);
                arr[i] = swapArr[0];
                arr[j] = swapArr[1];
            }
        }
    }
    return arr;
}

//swap function
function swap(a, b){
    temp = a;
    a = b;
    b = temp;
    return [a, b];
}
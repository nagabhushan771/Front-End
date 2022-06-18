// let a = [40];
// let b = new Array(2);

// console.log(a);
// console.log(b);


// //push add element to array at the end and return the length of the array
// b.push("Mango");
// console.log(b);

// b[0] = "apple";
// //pop will remove the last element from the array and return the removed element
// b.pop();

// console.log(b);

//to check weather the given object is array or not
// console.log(Array.isArray(a));
// console.log(a instanceof Array);


//shift() will remove the first element of the array and return the first element
//unshift("var") will add the parameter at first index and return the length of the array

// var fruit = ["mango", "apple", "banana", "orange"];
// var fruit1 = ["Guava", "Lichi"];
// var fruit2 = ["grape", "watermelon"];
//concat will create the new array using the given arrays in that oreder
// var allFruits = fruit.concat(fruit1, fruit2);

// console.log(allFruits.toString());
// console.log(allFruits.join("-"));

//splice(insert-position, no. of elements to be deleted, elements to be added)
//slice(no. of elements to be removed from the beginning) it will return the new array will not do any changes in the main array

// fruit.splice(2, 0, fruit1);
// console.log(fruit.toString());
// console.log(fruit);
// console.log(fruit[2][1]);

// var a = [20, 58, 23, 89, 28];
// a[a.length] = 74;
// console.log(a);
// a.sort();//sorts in increasing order
// a.reverse();//if we reverse the sorted array we can get the array in decreasing order
// console.log(a);
// a.forEach((element, i, j, k) => {
//     console.log(i + " " + element + " " + j + " " + k);
// });

//map() will call the function for all the elements in the which have the value it will not call for undefined values
// delete a[2];
// var b = a.map((i) => {
//     return i*2;
// })
// console.log(b);


//filter() will filter out the elements according to our condition and creates the new array with those elements
// var b = a.filter((i) => {
//     return i>50;
// })

// console.log(b);

// var a = [20, 58, 23, 89, 28];
// console.log(a.reduce((i, cur, j, k) => {
//     console.log(i+" "+ cur + " " + k[j]);
//     return i + cur ;
// }));
// var initialVal = 9;
// var b = a.reduce(sum, initialVal);

// function sum(total, sum){
//     return total+sum;
// }
// a.length = 1;
// console.log(a);

// indexOf(element)//method will give first occurance of the given element 
// lastIndexOf(element)//gives the index of the last occurance of the given element

// const letters = ["alpha", "gamma", "delta"];
// // letters.splice(1, 0, 'beta');
// [...letters.slice(0, 1), 'beta', ...letters.slice(1)]
// console.log(letters);

// const arr = [1, 3, 5, 7];
// console.log(arr.fill(6, 1, 3));



var a = [20, 58, 23, 89, 28, 12, 43, 28, 28];
console.log("Before sorting");
console.log(a.toString());
//bubble sort
// for(var i = 0; i<a.length; i++){
//     for(var j = 0; j<a.length-i-1; j++){
//         if(a[j] > a[j+1]){
//             [a[j+1], a[j]] = [a[j], a[j+1]];
//         }
//     }
// }

//insertion sort
// for(var i = 0; i<a.length-1; i++){
//     var cur = a[i+1];
//     var j;
//     for(j = i; j>=0 && a[j] > cur; j--){
//         a[j+1] = a[j];
//     }
//     a[j+1] = cur;
// }

//selection sort
// for(var i = 0; i<a.length; i++){
//     // var minEle = a[i];
//     var minInd = i;
//     // var j;
//     for(var j = i+1; j < a.length; j++){
//         if(a[minInd] > a[j])
//             minInd = j;
//     }
//     [a[i], a[minInd]] = [a[minInd], a[i]];
// }


function mergeSort(a, left, right){
    if(left >= right)
        return;
    let mid = left + Math.floor((right-left)/2);
    // console.log(mid);
    mergeSort(a, left, mid);
    mergeSort(a, mid+1, right);
    merge(a, left, mid, right);
}

function merge(a, left, mid, right){
    let ind1 = left;
    let ind2 = mid+1;
    let finalInd = 0;
    let n = Number(right-left);
    // console.log(right + " " + left);
    // console.log(right + " - " + left + " = " + n);
    let merged = new Array(n);
    while(ind1 <= mid && ind2 <= right){
        if(a[ind1]<=a[ind2])
            merged[finalInd++] = a[ind1++];
        else
            merged[finalInd++] = a[ind2++];
    }
    if(ind1 <= mid){
        while(ind1 <= mid)
            merged[finalInd++] = a[ind1++];
    }
    if(ind2 < right){
        while(ind2 <= right)
            merged[finalInd++] = a[ind2++];
    }
    // console.log(merged);
    for(var i = 0; i<merged.length; i++){
        a[left+i] = merged[i];
    }
    // return a;
}

function quickSort(a, left, right){
    if(left >= right){
        return;
    }
    let pivot = left;
    let l = left+1;
    let r = right;
    while(l<=r){
        while(l<=r && a[l] <= a[pivot])
            l++;
        while(l<=r && a[r] > a[pivot])
            r--;
        if(l<r){
            [a[l], a[r]] = [a[r], a[l]];
        }
    }

    [a[pivot], a[r]] = [a[r], a[pivot]];
    quickSort(a, left, r-1);
    quickSort(a, r+1, right);
}

console.log("After sorting");
// console.log(a.length-1);
// mergeSort(a, 0, a.length-1);
quickSort(a, 0, a.length-1);
console.log(a.toString());

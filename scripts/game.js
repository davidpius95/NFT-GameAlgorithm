// let arr = [
//     [1,2,34],
//     [1,2,34],
//     // [1,2,34],
//     // [1,2,34],
//     // [1,2,34],
//     // [1,2,34],
//     // [1,2,34]
// ];

// let arra = [];
// function check() {
//     for (let i = 0; i < arr.length; i++) {
//         for (let y = 0; y < arr.length; y++) {
//             if (arr[0][y]==arr[1][i]){
//                 console.log(true);
//             }
//         }

     
//     }
      
// }


// check()
function compare(arr){
    base = arr[0]
    
    for (i=1; i < arr.length; i++){
        next = arr[i];

        for(j=0; j < base.length; j++){
            if (next[j] !== base[j]){
                return false;
            }
        }
    }
    return true;

}


good_arr1 = [[1,2,3,4], [1,2,3,4]]
bad_arr1 = [[1,2,3,4], [1,4,3,2]]
good_arr2 = [[1,2,3,4], [1,2,3,4], [1,9,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4], [1,2,3,4]]

console.log('comparing ', bad_arr1)
console.log(compare(bad_arr1))
console.log('comparing ', good_arr1)
console.log(compare(good_arr1))
console.log('comparing ', good_arr2)
console.log(compare(good_arr2))
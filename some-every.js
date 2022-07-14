// let numbers = [1,2,3];
// numbers.some(function(value,index,array){
//     return value < 3;
// });
// //true

// numbers.some(function(value,index, array){
//     return value > 10;
// });

// //false

const words = [
    'immunoelectrophoretically',
    'rotavator',
    'tsktsk',
    'psychophysicotherapeutics',
    'squirreled',
    'crypt',
    'uncopyrightable',
    'cysts',
];
// words.some(function(word){
//     return word.length > 25;
// })

// words.some(function(word){
//     word.indexOf('thyroid')
// })
// function allStr(arr){
//     return arr.every(function(el){
//        return typeof el === 'string';
//     })
// }

// let btn = document.querySelector('button');
// btn.addEventListener('click', function(e){
//     let checkedBox = document.querySelectorAll('input[type ="checkbox"]');
//     console.log(checkedBox);
//     const allChecked = Array.from(checkedBox).every(function(checkedBox){
//         return checkedBox.checked;
//     });
//     console.log(allChecked);
//     if(!allChecked) alert ('PLEASE AGREE TO EVERYTHING');
// })




// // filter(arr, callback)
// function myFilter(array, callback){
//     let newArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(callback(array[i], i, array)){
//             newArray.push(array[i]);
//         }
//     }
//     return newArray;
// }

// function mySome(arr,callback){
//     for(let i = 0; i < arr.length; i++){
//         if(callback(arr[i]), i, arr) return true;
//     }
//     return false;
// }

// // mySome([4,5,6,7], function(n){
// //     return n > 5;
// // })

// function myEvery(arr, callback){
//     for(let i = 0; i < arr.length; i ++){
//         if(!callback(arr[i], i , arr)) return false;
//     }
//     return true;
// }
// myEvery([4,5,6,7], function(n){
//     return n > 5
// });

// function hasOddNumber(arr) {
//    return arr.some(function(val){
//     return val % 2 !== 0;
// })
// }

// function hasAZero(num){
//     return num.toString().split('').some(function(val){
//         return val === '0';
//     })
// }

// function hasOnlyOddNumbers(arr) {
//     return arr.every(function(val){
//         return val % 2 !== 0;
//     })
// }
// function hasNoDuplicates(arr) {
//     return arr.every(function(val){
//         return arr.indexOf(val) === arr.lastIndexOf(val) 
//     });
// }

// let arr = [
//     {title: "Instructor", first: 'Elie', last:"Schoppik"},
//     {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
//     {title: "Instructor", first: 'Matt', last:"Lane"},
//     {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
//   ]
// function hasCertainKey(arr, key){
//      return arr.every(function(val){
//         return key in val;
//         // return ;
//     })
// }
let arr = [
    {title: "Instructor", first: 'Elie', last:"Schoppik"},
    {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true},
    {title: "Instructor", first: 'Matt', last:"Lane"},
    {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
  ]

function hasCertainValue(arr, key, searchValue) {
    return arr.every(function(val){
        return key[searchValue] === arr[val];
    })
}

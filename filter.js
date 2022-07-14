// let letters = ['a', 'b', 'c', 'b', 'c'];
// let newArray = letters.filter(function(value, index, array){
//     return array.length >= 3;
//     return value === 'b';
// });

// const words = [
//     'immunoelectrophoretically',
//     'rotavator',
//     'tsktsk',
//     'psychophysicotherapeutics',
//     'squirreled',
//     'crypt',
//     'uncopyrightable',
//     'cysts',
// ];

// const cOrUWords = words.filter(function(w){
//     return w[0] === 'u' || w[0] === 'c';
// });

// const containsVowel = function(word){
//     for(let char of word){
//         isVowel(char)
//     }
// }
// const isVowel = function(char){
//     return 'aeiou'.indexOf(char) !== -1;
// }

// const noVowels = words.filter(function(word){

// })
// const containVowels = words.filter(containsVowel);
// const noVowel = words.filter(function(word){
//     return !containsVowel(word);
// })

// let allCheckedBoxes = document.querySelectorAll('input[type="checkbox"]');

// const checked = Array.from(allCheckedBoxes).filter(function(box){
//     return box.checked;
// });

// // const completedItems = checked.map(function(checkbox){
// //     return checkbox.parentElement.innerText;
// // })
// function extractCompletedTodos (){
//     return Array.from(allCheckedBoxes).filter(function(box){
//         return box.checked;
//     })
//     .map(function(checkbox){
//     return checkbox.parentElement.innerText;
//     })
// }

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
// const shortWords = myFilter(words, function(word){
//     return word.length <= 10;
// })

// const everyOtherWord = myFilter(words, function(word, idx){
//     return idx % 2 === 0;
// })



// function filterByValue(arr, key){
    
//     return arr.filter(function(w){
//         return w[key] !== undefined;
            
//     })

// }

// // function find(arr, searchValue){
// //     return arr.filter(function(val){
// //         return searchValue === val;
// //     })
// // }

// // function findInObj(arr, key, searchValue) {
// //     return arr.filter(function(val){
// //         return val[key] === searchValue;
// //     })[0];
// // }
// function removeVowels(str){
//     const vowels = 'aeiou';
//     return str.toLowerCase().split('').filter(function(val){
//        return vowels.indexOf(val) === -1;
//     }).join('');
// }


// // let obj= {};
// // newArr.forEach(function(char){
// //     let lowerCaseChars = char.toLowerCase();
// //     if(vowels.indexOf(lowerCaseChars) !== -1){
// //         if(obj[lowerCaseChars]){
// //             return obj[lowerCaseChars] ++;
// //         }
// //         return obj[lowerCaseChars] = 1;
// //     }
// // })

// // return obj;

// // }
// function doubleOddNumbers(arr) {
//     return arr.filter(function(evenNum){
//         return evenNum % 2 !== 0;
//     }).
//     map(function(oddNum){
//         return oddNum * 2;
//     })
//     //

// }

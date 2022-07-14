// const whisper = function(){
//     console.log('I have a secret')
// }

// function add(x, y){
//     return x + y;
// }
// function subtract(x, y){
//     return x - y;
// }
// function multiply(x, y){
//     return x * y;
// }
// function divide (x,y){
//     return x / y;
// }
// function power(x,y){
//     return x ** y;
// }
// let mathFuncs = [add, subtract, multiply, divide, power];

// setTimeout(function(){
//     whisper();
// }, 4000);

// doMath(4,2,subtract);
// function doMath(a,b, mathFuncs){
//    return mathFuncs(a,b);
// }

// doMath(3, 4, function(a,b){
//     console.log(a ** b)
// })

// function doAllMath(a,b, mathFuncs){
//     for(let func of mathFuncs){
//         console.log(func (a,b));
//     }
// }
// const colors = ['teal', 'cyan', 'peach', 'purple'];

// colors.forEach(console.log);

// colors.forEach(function(val){
//     console.log(val.toUpperCase())
// })
// const prices = [30.99, 19.99, 2.50]
// let total = 0;
// prices.forEach(function(price){
//     total += price;
// })
// console.log(total);
// function myForEach(arr, callback){
//     // let arr = [1,2,3];

//     for(let i = 0; i <arr.length; i++){
//         callback(arr[i], i, arr);
//     }
// }

// const numbers = [1,2,3]
// myForEach(numbers, function(number, i){
//     console.log(number, "At index of:", i);
// })
// numbers.forEach(function(number, i){
//     console.log(number, 'At index of:', i);
// })
// function onlyEvenValues(array){
//     let newArr =[];
//     array.forEach(function(x){
//         if (x % 2 === 0){
//             newArr.push(x);
//         }
//     })
//     //
//     return newArr;
// }

// function showFirstAndLast(arr){
//     let newArr = [];
//     arr.forEach(function(char){
//         newArr.push(char[0] + char[char.length - 1]);
//     })
//     //
//     return newArr;
// }

// function addKeyAndValue(arr, key, value){
//     // let newArr =[];
//     arr.forEach(function(name){
//         arr.push(name[key] = value);
//     })
//     //
//     return arr;
// }


// const containsVowel = function(word){
//     for(let char of word){
//         isVowel(char)
//     }
// }
// const isVowel = function(char){
//     return 'aeiou'.indexOf(char) !== -1;
// }
// function vowelCount(str){
// const vowels = 'aeiou';
// let newArr = str.split('');
// let obj= {};
// newArr.forEach(function(char){
//     let lowerCaseChars = char.toLowerCase();
//     if(vowels.indexOf(lowerCaseChars) !== -1){
//         if(obj[lowerCaseChars]){
//             return obj[lowerCaseChars] ++;
//         }
//         return obj[lowerCaseChars] = 1;
//     }
// })

// return obj;

// }
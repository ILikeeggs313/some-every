// const numbers = [21,32,64,99,142];
// const negative = numbers.map(function(num, callback){
//     return num * -1;
// });

// const doubles = numbers.map(function(num){
//     console.log(num * 2);
// });
// const todos = [
//     {
//         id: 1,
//         text: 'walk the dog',
//         priority: 'high'
//     },
//     {
//         id: 2,
//         text: 'walk the chickens',
//         priority: 'medium'
//     }
// ];

// const todoText = todos.map(function(todo){
//     return todo.text, todo.priority;
    
// })

// const links = document.querySelectorAll('a');
// // Array.from(links);
// const urls = links.map(function(a){
//     return a.href;
// })

// myMap([1,2,3], function(val){
//     return val * 3;
// });

// const priorityMap = myMap(todos, function(todo){
//     return todo.priority;
// })
// function myMap(arr, callback){
//     let newArr =[];
//     for (let i = 0; i < arr.length; i++){
//         newArr.push(callback(arr[i], i, arr));
//     }
//     return newArr;
// }

// const repeatStr = myMap(['a','b','c','d','e'], function(str, idx){
//     return str.repeat(idx);
// })
// function doubleValuesWithMap(arr){
//     let newArr = [];
//     arr.map(function(num){
//         newArr.push(num*2);
//     })
//     //
//     return newArr;
// }
// function valTimesIndex(arr){
//     let newArr =[];
//     arr.map(function(num, idx){
//         newArr.push(num * idx);
//     })
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

function extractFullName(arr){
    let newArr =[];
    arr.map(function(value){
        newArr.push(value.first + ' ' + value.last);
    })
    //
    return newArr;
}
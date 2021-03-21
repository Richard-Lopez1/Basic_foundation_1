// 1. Write a function that returns an array with all the numbers from 1 to 255.
var array=255;
for (var i = 1; i <= array; i++) {
   console.log(i);
} 
    
// 2.	Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  
// You may use a modulus operator for this exercise.
var array=1000;
for (var i = 1; i <= array; i++) {
   if (i % 2 == 0) {
    console.log(i);
   }  
} 

// 3.	Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
var array = 0;
for (var i = 1; i <= 5000; i+=2) { 
    var num = i + array;
    var array = num;      
} 
console.log(num);

// 4.	Iterate an array - Write a function that returns the sum of all the values within an array. 
// (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

    var array1 = [1,2,5];
    var array2 = [-5,2,5,12];
    var x = 0;
    for(var i=0; i < array1.length; i++) {
        var sum1 = array1[i] + x;
        var x = sum1;
    }
    var x = 0;
    for(var i=0; i < array2.length; i++) {
        var sum2 = array2[i] + x;
        var x = sum2;
}
console.log(sum1);
console.log(sum2);

// 5.	Find max - Given an array with multiple values, write a function that returns the maximum 
// number in the array. (e.g. for [-3,3,5,7] max is 7)
function biggest(arr) { 
    var max = arr[0];
for(var i=1; i < arr.length; i++) {
     if (max < arr[i]) { 
       max = arr[i];   
        }    
    }
    return max;
}
     y = biggest([-3,3,5,7]);
    console.log(y);

// 6.	Find average - Given an array with multiple values, write a function that returns 
// the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function maxMinAvg(arr) {
   var arrnew = [];
  var max = arr[0]; 
  var min = arr[0];
  var sum = arr[0]; 
   for(var i=1; i < arr.length; i++) {
     if (arr [i] > arr [max]) {
      max = arr[i];
    }
      if (arr [i] < arr [min]) {
      min = arr[i];
   }
       sum = sum + arr[i]
  }
   var ave = sum / arr.length;
   var arrnew = [ave];
        return arrnew;
}
 z=maxMinAvg([1,3,5,7,20])
 console.log(z)

//  7.	Array odd - Write a function that would return an array of all the odd numbers 
// between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
var array = 50;
y = [];
for(var i = 1; i < array; i+=2) {      
   y.push(i); 
   }
console.log(y);

// 8.	Greater than Y - Given value of Y, write a function that takes an array and returns the number 
// of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will 
// return 2. (There are two values in the array greater than 3, which are 5, 7).
var testArr = [1,3,5,7];
var max = 0;
var sum = 1;
var y = 3;
for(var i=0; i < testArr.length; i++) {
    if (testArr[i] == y) {
        sum+=i;
      var max = testArr.length - sum;      
        }
    }
console.log(max);

// 9.	Squares - Given an array with multiple values, write a function that replaces each 
// value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

var testArr = [1,5,10,-2];
var num = 0;
var answer = [];
for(var i=0; i < testArr.length; i++) {
  var num = (testArr[i] * testArr[i]);
   answer.push(num);
}
 console.log(answer);

//  10.	Negatives - Given an array with multiple values, write a function that replaces any 
// negative numbers within the array with the value of 0. When the program is done the array 
// should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0]).
var testArr = [1,5,10,-2];
var num = 0;
var answer = [];
for(var i=0; i < testArr.length; i++) {
  if (testArr[i] < 0) {
    answer.push(0);
  }
     else { 
     answer.push(testArr[i]);
    }
  }
 console.log(answer);

//  11.	Max/Min/Avg - Given an array with multiple values, write a function that returns a new array 
// that only contains the maximum, minimum, and average values of the original array. 
// (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxMinAvg(arr) {
    var arrnew = [];
   var max = arr[0]; 
   var min = arr[0];
   var sum = arr[0]; 
    for(var i=1; i < arr.length; i++) {
      if (arr [i] > max) {
       max = arr[i];
       console.log(max);
     }
       if (arr [i] < min) {
       min = arr[i];
    }
        sum = sum + arr[i]
   }
    var ave = sum / arr.length;
    var arrnew = [max, min, ave];
         return arrnew;
  }
  z=maxMinAvg([1,3,5,7,20])
  console.log(z)

// 12.	Swap Values - Write a function that will swap the first and last values of any 
// given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).  
function arr(j) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
      return j
  }
    z=arr([1,5,10,-2,20,30]);
    console.log(z);

// 13.	Number to String - Write a function that takes an array of numbers and replaces 
// any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], 
// your function will return ['Dojo','Dojo',2].
function arr(j) {
    for(var i = 0; i < [arr.length]; i++) {     
        if (arr[i] < 0) {
            arr[i] = "DOJO";
            }
            console.log([i]);
            return j
        }
    }
    z=arr([1,5,10,-2,20,30]);
    console.log(z);
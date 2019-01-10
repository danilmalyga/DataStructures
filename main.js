Convert Celsius to Fahrenheit
function convertToF(celsius) {   
    var fahrenheit = celsius*(9/5) + 32 ;
    return fahrenheit;   
  }

Reverse a String
function reverseString(str) {
    return str.split('').reverse().join("");;
  }

Factorialize a Number
function factorialize(num) {
    var i, t = 1;
        for (i = num; i > 0; i -= 1){
            t *= i;
        }
    return t;
  }

Find the Longest Word in a String
function findLongestWordLength(str) {
    var arr = str.split(" "),
        t = 0,
        i = 0;
            for (i = 0; i < arr.length; i++ ){
                if (arr[i].length > t){
                    t = arr[i].length;
                    }
            }
    return t;
  }
findLongestWordLength("The quick565656 brown fox jumped over the lazy dog");


Return Largest Numbers in Arrays  !!
function largestOfFour(arr) {
    var i,newArr = [];
    for (i = 0; i < arr.length; i += 1){
        arr[i].sort(function(a,b){
            return a-b;
         });
         newArr.push(arr[i][arr[i].length-1])
         
    }
    return newArr;
}
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [1,2,3,1], [1,2,1023,1] ]);


Confirm the Ending  !!
function confirmEnding(str, target) {
    if (str.substring (str.length - target.length) === target){
        return true;
    }
    else {
        return false;
    }
  }

confirmEnding("Bastian", "an");

Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    var arr = [], i = 0;
        while (i < num){
            arr.push(str);
            console.log(arr);
             i += 1;
        }
        return arr.join("")
  }
  repeatStringNumTimes("abc", 2);

Truncate a String
function truncateString(str, num) {
    str = str.substring(0,num).concat("...");
    console.log (str);
  }
  
  truncateString("A-", 8);
function truncateString(str, num) {
    if (str.length <= num){
        return str;
        }
    else {
        var b = str.substring(0,num).concat("...");
    return b;
    }
}
truncateString("A-tisket a-tasket A green and yellow basket",2)
  
Finders Keepers
function findElement(arr, func) {
    let num = arr.filter(func);
    return num[0];
  }
  findElement([1, 2, 3, 4], num => num % 2 === 0);

Boo who
function booWho(bool) {
    if ( bool === true || bool === false ){
        return bool = true;
    }
    else { 
      return bool = false; 
    }
  }
  booWho(null);

Title Case a Sentence
function titleCase(str) {
    var s = "",i;
    for (i = 0; i < str.length; i += 1){
        if (str[i-1] === " " || i === 0){
        s += str[i].toUpperCase();
        }
        else {
            s += str[i].toLowerCase();
        }
    }
    return s;
  }
  titleCase("I'm a little tea pot");

Slice and Splice
function frankenSplice(arr1, arr2, n) {
    var cloneArr2 = arr2.slice(0);
      cloneArr2.splice(n,0,arr1);
      return cloneArr2.flat();
  }
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

Falsy Bouncer
function bouncer(arr) {
    var b = arr.filter(function(elem){
        if (elem){
        return elem;
        }
    });
return b;
}
bouncer([7, "ate", "", false, 9]);

Where do I Belong
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort(function (a, b){
       return a-b;
    });
    return arr.indexOf(num);
    };
getIndexToIns([1,2,3,4], 2);

Mutations
function mutation(arr) {
    var i,
        big = arr[0].toLowerCase().split(""),
        small = arr[1].toLowerCase().split("");
    
    for (i = 0; i < small.length; i += 1 ){
           if ( big.indexOf(small[i]) === -1 ) {
               return false;
           }  
    }
    return true;
  }
  mutation(["helloy", "hey"]);

Chunky Monkey
function chunkArrayInGroups(arr, size) {
    var i,newArr = [];
    for (i = 0; i < arr.length ; i += size){
      newArr.push(arr.slice(i,size + i));
    }
    return newArr;
  }
  chunkArrayInGroups(["a", "b", "c", "d","e","f"], 2);

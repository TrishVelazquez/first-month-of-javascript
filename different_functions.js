/******************************************************
Write a function that takes in a number that represents the
length of a sequence. The function should should return the first `n`
numbers in the fibonacci sequence.

The first two numbers of the fibonacci sequence are 1 and 1. The next
number in the sequence can be found by adding the last two numbers in
the sequence.

Solve this without recursion.
******************************************************/

function fibonacci(n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }

  var result = [1, 1];

  while (result.length < n) {
    var back1 = result[result.length - 1];
    var back2 = result[result.length - 2];

    result.push(back1 + back2);
  }
  return result;
}

console.log(fibonacci(0)); //[]
console.log(fibonacci(1)); //[ 1 ]
console.log(fibonacci(2)); //[ 1, 1 ]
console.log(fibonacci(3)); //[ 1, 1, 2 ]
console.log(fibonacci(5)); //[ 1, 1, 2, 3, 5 ]
console.log(fibonacci(10)); //[ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ]

/******************************************************
Write a function that takes in two strings representing
a hand of 4 cards. Return the string of the hand with the
higher total score. If there is a tie, return 'DRAW'.

Possible cards are:
J = 1 point
Q = 2 points
K = 3 points
******************************************************/

function winningHand(hand1, hand2) {
  var h1 = 0;
  var h2 = 0;
  for (var i = 0; i < hand1.length; i ++) {
    var card = hand1[i];

    if (card === 'K') {
      h1 += 3;
    } else if (card === 'Q') {
      h1 += 2;
    } else {
      h1 += 1;
    }

  }
  for (var j = 0; j < hand2.length; j ++) {
    var card2 = hand2[j];

    if (card2 === 'K') {
      h2 += 3;
    } else if (card2 === 'Q') {
      h2 += 2;
    } else {
      h2 += 1;
    }
  }
  if (h1 > h2) {
    return hand1;
  } else if (h1 < h2) {
    return hand2;
  }
  return 'DRAW';
}

console.log(winningHand('JQKJ', 'QQJJ')); //JQKJ
console.log(winningHand('KJKJ', 'QQQK')); //QQQK
console.log(winningHand('JKJJ', 'QQJJ')); //DRAW
console.log(winningHand('KJKJ', 'QQQQ')); //DRAW

/******************************************************
Write a function that takes in a number and returns a
string of the number in a simple 'Roman Numeral' form.
For reference: I = 1, V = 5, X = 10, L = 50, C = 100.
******************************************************/

function toNumerals(n) {
  var results = '';

  var obj = {
  100 : 'C',
  50 : 'L',
  10 : 'X',
  5 : 'V',
  1 : 'I',
  };


  while (n >= 100) {
    results += 'C';
    n -= 100;
  }
  while (n >= 50) {
    results += 'L';
    n -= 50;
  }
  while (n >= 10) {
    results += 'X';
    n -= 10;
  }
  while (n >= 5) {
    results += 'V';
    n -= 5;
  }
  while (n >= 1) {
    results += 'I';
    n -= 1;
  }
  return results;
}

console.log(toNumerals(52)); //LII
console.log(toNumerals(220)); //CCXX
console.log(toNumerals(100)); //C
console.log(toNumerals(8)); //VIII

/******************************************************
Write a function that takes in a string representing
a number. The function should return a new string where
each digit character is replaced with it's "word"
respresentation.
******************************************************/

function numsToWords(numString) {
  var results = '';

  var nums = {
    0 : 'Zero',
    1 : 'One',
    2 : 'Two',
    3 : 'Three',
    4 : 'Four',
    5 : 'Five',
    6 : 'Six',
    7 : 'Seven',
    8 : 'Eight',
    9 : 'Nine'
  }

  for (var i = 0; i < numString.length; i ++) {
    var key = numString[i];

    results += nums[key];
  }
  return results;
}

console.log(numsToWords('42')); //FourTwo
console.log(numsToWords('123')); //OneTwoThree
console.log(numsToWords('8675309')); //EightSixSevenFiveThreeZeroNine

/******************************************************
Write a function that takes in an array. The function
should return true is the array has symmetry, return
false otherwise.
******************************************************/

function hasSymmetry(array) {
  for (var i = 0; i < array.length; i ++) {
    var front = array[i];
    var end = array[array.length - 1 - i];

    if (front !== end) {
      return false;
    }
  }
  return true;
}

arr1 = [1, 2, 3, 3, 2, 1];
arr2 = [1, 2, 3, 3, 4, 1];
arr3 = ['cat', 'dog', 'bird', 'dog', 'cat'];
arr4 = ['cat', 'dog', 'bird', 'bird', 'cat'];

console.log(hasSymmetry(arr1)); //true
console.log(hasSymmetry(arr2)); //false
console.log(hasSymmetry(arr3)); //true
console.log(hasSymmetry(arr4)); //false

/******************************************************
Write a function that takes in a sentence string and
returns the longest bigram in the sentence.
******************************************************/

function longestBigram(sentence) {
  var longest = '';
  var newSen = sentence.split(' ');

  for (var i = 0; i < newSen.length - 1; i ++) {
    var first = newSen[i];
    var second = newSen[i + 1];

    var bigram = first + ' ' + second;

    if (bigram.length > longest.length) {
      longest = bigram;
    }
  }
  return longest;
}

console.log(longestBigram('measure twice cut once')); //measure twice
console.log(longestBigram("One of these things is not like the other")); //these things
console.log(longestBigram("One must have a mind of winter")); //must have
console.log(longestBigram("his last assessment is fun")); //last assessment

/******************************************************
Write a function that takes in a number and returns
a boolean indicating whether or not the number is
a power of two.
******************************************************/

function isPowerOfTwo(num) {
  var check = findPower(num);

  if (check.indexOf(num) > -1) {
    return true;
  }
  return false;
}

function findPower(num) {
    var i = 1;
    var powOf2 = 1;
    var results = [1,];

    while (i <= num) {
      powOf2 *= 2;
      i += 1
      results.push(powOf2);
    }
    return results;
}

console.log(isPowerOfTwo(1)); //true
console.log(isPowerOfTwo(32)); //true
console.log(isPowerOfTwo(12)); //false
console.log(isPowerOfTwo(33)); //false

/******************************************************
Write a function that takes in an array of numbers and
returns a number representing the sum of all negative
numbers in the array.
******************************************************/

function negativeSum(arr) {
  var results = 0;
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];

    if (num < 0) {
      results += num;
    }
  }
  return results;

}

console.log(negativeSum([-3, 12, -5, -2, 3])); //-10
console.log(negativeSum([2, 1, 7])); //0

/******************************************************
Write a function that takes in a string and returns
the given string with its characters in reversed order.
******************************************************/

function reverseString(str) {
  var results = [];

  for (var i = 0; i < str.length; i++) {
    var ele = str[i];

    results.unshift(ele);

  }
  return results.join('');
}

console.log(reverseString('taco cat')); //tac ocat
console.log(reverseString('hello world')); //dlrow olleh
console.log(reverseString('nyan cat')); // tac nayn

/******************************************************
Write a function that takes in a string and returns a
string representing a word sandwich.
******************************************************/

function wordSandwich(outerWord, innerWord) {
  var upperOut = outerWord.toUpperCase();
  var lowerIn = innerWord.toLowerCase();

  return upperOut + lowerIn + upperOut;

}

console.log(wordSandwich('bread', 'cheese')); //'BREADcheeseBREAD'
console.log(wordSandwich('BREAD', 'CHEESE')); //'BREADcheeseBREAD'
console.log(wordSandwich('HeLLo', 'worLD')); // 'HELLOworldHELLO'

/******************************************************
Write a function that takes in an array of integers.
The function should return T or F depending on whether
any two numbers in the list sum to zero.
******************************************************/

function sumsToZero(array) {
  for (var i = 0; i < array.length; i++) {
    var num1 = array[i];

    for (var j = 0; j < array.length; j++) {
      var num2 = array[j];

      if (num1 + num2 === 0) {
        return 'T';
      }
    }
  }
  return 'F';
}

console.log(sumsToZero([1,2,-1,3,-2,-1])); //T
console.log(sumsToZero([3,2,4,1,-4,6,6])); //T
console.log(sumsToZero([2,3,-5])); //F

/******************************************************
Write a function that takes in an array of integers.
The function should return a single integer that
represents the sum of any numbers in the array that
are followed by the same number.
******************************************************/

function addNums(array) {
  var results = 0;

  for (var i = 0; i < array.length - 1; i ++) {
    var firstNum = array[i];
    var nextNum = array[i + 1];

    if (firstNum === nextNum) {
      results += nextNum;
    }
  }
  return results;
}

console.log(addNums([4,3,4,4,3,5,5])); //9
console.log(addNums([5,4,3])); //0

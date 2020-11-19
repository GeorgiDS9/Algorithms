// 1. String matchup

function solve(array1,array2){
  let arr = [];
  let count = 0;
  for (let i = 0; i < array2.length; i++) {
    for (let j = 0; j < array1.length; j++) {
      if (array2[i] === array1[j]) {
        count ++;
      }
    }
     arr.push(count);
  }
  return arr;
}

// 2. Value in Array

function check(a, x) {
  for (let i = 0; i < a.length; i++){
    if (a[i] === x){
      return true;
    }
  }
   return false;
}

// 3. Triple Trouble

function tripleTrouble(one, two, three) {
  var str = '';
  for (let i = 0; i < one.length; i++) {
    result += one.charAt(i) + two.charAt(i) + three.charAt(i);
  }
  return str;
}

// 4. 
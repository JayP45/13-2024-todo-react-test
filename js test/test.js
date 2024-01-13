//1. check if given number is palimdrome or not in js

// function isPalindrome(number) {
//     const num = number.toString();
//     console.log(num)
//     const reversedStr = num.split('').reverse('').join('')
//     return num === reversedStr;
//   }
  
//   const numberToCheck = 121;
//   const result = isPalindrome(numberToCheck);
//   console.log(result);

  //2. Remove Duplicates

//   let array = [1,1,3,4,5,4,3]
//   let newArray = new Set(array)
//   console.log([...newArray])


//3. find target

function findTarget(num, target){
    for(let i=0; i<num.length;i++){
        for(let j=i+1; j<num.length;j++){
            if(num[i]+num[j]===target){
                return[i,j]
            }
        }
    }
    return []
}
const num = [2,7,11,15]
const target = 9
console.log(findTarget(num, target))

//4. find missing array

function findMissingNumber(arr) {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    const missingNumber = expectedSum - actualSum;
    return missingNumber;
  }
  
  const numbersArray = [2,4,1,3,6,7,8];
  const missingNumber = findMissingNumber(numbersArray);
  console.log("Missing number:", missingNumber);
  
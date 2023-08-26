


//First I declare the function name with the correct parameters
const countingSumPairs = (x, numArray) => {
    //I then declare the output, initially zero, which will return with the correct value at the end of the function
  let Output = 0;
  //I then create a copy of the initial array to avoid altering the initial data (in case it needs use later on)
  let copyArray = [... numArray];
  //We then loop through the array of numbers examining each number individually
  for(i = 0; i < copyArray.length; i++){
    //For each number we then run a second loop through the numbers, in order to compare the first number with every other number in that array.
    for(j = 0; j< copyArray.length; j++){
        //When checking the two numbers against each other, we first check if they add together to make the value of x. We also check that they are not the same index position in the list to avoid adding an array entry with itself.
        if((copyArray[i] + copyArray[j] === x) && (i !== j)){
            //If the conditions are met we increase the value of the output.
            Output += 1;
            //Since the pair of numbers has now been used, we convert the numbers to strings that will not be capable of adding to the desired sum.
            copyArray[i] = "fizz";
            copyArray[j] = "buzz";
        }
    }
  }
  //once the main loop is completed, we can return the final output
  return("Output: " + Output);
}


let x = 1;
let list1 = [3, 4, 5, 6]
console.log(countingSumPairs(x, list1));

let y = 15;
let list2 = [0, 15, 32, 2000, 15000]
console.log(countingSumPairs(y, list2));

let z = 42;
let list3 = [1, 1, 10, 32, 41]
console.log(countingSumPairs(z, list3));
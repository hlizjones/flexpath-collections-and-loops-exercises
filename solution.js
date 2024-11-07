import { fileURLToPath } from "url";

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  /*

    To run the code you write for each exercise, change the `exercise_01()` 
    code below to match the EXACT name
    of the exercise, as it is written in the line `function exercise_xx`.
    
     For Example:

     If I want to run exercise_05 below, 
     I would change the code below from "exercise_01()" to
     "exercise_05()", save this file. 
		 
		 Then, when I run this file by running `node exercise.js`
     in the VS Code terminal while inside this folder, your code 
     for exercise_05 will run.

  */

  // Modify the line of code BELOW to run a different exercise
  exercise_11();
  // Modify the line of code ABOVE to run a different exercise
}

export function exercise_01() {
  /* 
   
    Exercise 1
    
		Arrays: 
		
		1. Create a variable assigned to an array of five numbers and 
       log the array to the console.
		2. Then, Log the length of this array.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers);
  console.log(numbers.length);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_02() {
  /* 
   
    Exercise 2

		Access Array Elements: 
    
    1. Create a variable assigned to an array of five numbers.
		2. Log the first and last elements of the numbers array to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers[0]); // First element
  console.log(numbers[numbers.length - 1]); // Last element
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_03() {
  /* 
   
    Exercise 3
    
    Add to Array: 
		
		Create a variable assigned to an empty array.
		Use push() to add a number to the end of the array five times.
		Then, log the array
  
  */
  // CODE IN THE OPEN LINES BELOW
  const arr = [];
  arr.push(1);
  arr.push(2);
  arr.push(4);
  arr.push(8);
  arr.push(16);
  console.log(arr);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_04() {
  /* 
   
    Exercise 4

    Add to Beginning: 
		
		Create an array of 5 strings. 
		Use unshift() to add a number to the beginning of the array.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = ["Hey", "There", "Student", "Lets", "Go!"];
  numbers.unshift(100);
  console.log(numbers);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_05() {
  /* 
   
    Exercise 5
    
    Remove from Array: 

		Create a variable assigned to an array of 5 strings. 
		
		Use pop() to remove the last item and log it to the console
    Then log the array
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers.pop());
  console.log(numbers);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_06() {
  /* 
   
    Exercise 6
    
    Remove from Beginning: 
		
		Create a variable assigned to an array of 5 numbers.
		Use shift() to remove the first item and log it to the console.
    Then, log the array to the console.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  console.log(numbers.shift());
  console.log(numbers);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_07() {
  /* 
   
    Exercise 7
    
    Create a variable assigned an array containing the numbers from 1 to 10.
		Check if the number 7 is in the array.
    If it is log the message "Item is in the array!" to the console
    Otherwise log the message "Item not present in the array".
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const inArray = numbers.includes(7);
  if (inArray) {
    console.log("Item is in the array!");
  } else {
    console.log("Item not present in the array");
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_08() {
  /* 
   
    Exercise 8
    
    Array Index: 
		
		Copy the array from exercise_08 below.
		Use indexOf() to find the position of 4 in the array.
    Then, using bracket notation on the `numbers` array, 
    print the element before and the element after 4 in the array

    WARNING: Don't just manually type out and print 3 and 5 to the console.
    Use bracket notation on the array to select the element before
    and the element after the indexOf 4 in the array, and print THOSE to the 
    console.

  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const i = numbers.indexOf(4);
  console.log("before:", numbers[i - 1]);
  console.log("after:", numbers[i + 1]);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_09() {
  /* 
   
    Exercise 9
    
    Splice Array: 
		
		Copy the array from exercise_08 and paste it below.
		Use splice() to remove the second item in the array.
    Then print the array to the console
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  numbers.splice(1, 1);
  console.log(numbers);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_10() {
  /* 
   
    Exercise 10

    Maps: 
		
		Create a new Map, and set values for these 3 keys:
    - name
    - age
    - job

    Then log this Map to the console

    Then create an object literal with these property/value pairs
    and log it to the console.

    Notice the difference on how it appears when logged to the console.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map();
  userMap.set("name", "John");
  userMap.set("age", 25);
  userMap.set("job", "Software Developer");
  console.log(userMap);

  console.log({
    name: "John",
    age: 25,
    job: "Software Developer",
  });
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_11() {
  /* 
   
    Exercise 11
    
    Get from Map: 
		
		Copy the Map creation code from exercise_10 and paste it below
		Use the .get() method on the Map to retrieve the value for the "name" key.
    Then, insert it into a string literal with the message:

    `This person's name is [nameValue]`

    Then log this to the console
  
  */
  // CODE IN THE OPEN LINES BELOW

  /*
   Answer info:
   This is how you instantiate a new map with values
   Notice, you pass it an array of multiple sub-arrays, each containing two
   elements each:
   - The first element the name of the key
   - The second element, the value of that key
  */
  let userMap = new Map([
    ["name", "John"],
    ["age", 25],
    ["job", "Software Developer"],
  ]);
  const name = userMap.get("name");
  const msg = `This person's name is ${name}`;
  console.log(msg);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_12() {
  /* 
   
    Exercise 12
    
    Delete from Map:
		 
		Copy the Map creation and key-value pair setting code from exercise_10 and paste it below.
		Delete the key "age" and log the map.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map();
  userMap.set("name", "John");
  userMap.set("age", 25);
  userMap.set("isMember", true);
  userMap.delete("age");
  console.log(userMap);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_13() {
  /* 
   
    Exercise 13
    
    Map Size: 
		
		Copy the Map creation and key-value pair setting code from exercise_10 and paste it below.
		Log the size of the map.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map();
  userMap.set("name", "John");
  userMap.set("age", 25);
  userMap.set("isMember", true);
  console.log(userMap.size);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
    Sets: 
		
		Create a set with three unique values and log the set.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);
  console.log(uniqueNumbers);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_15() {
  /* 
   
    Exercise 15
    
		Add to Set: 
		Copy the Set creation and value adding code from exercise_14 and paste it below.
		Try to add a duplicate value and log the set.
    
  
  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);
  uniqueNumbers.add(2);
  console.log(uniqueNumbers); // Should still have three values
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Set Size: 
		
		Copy the Set creation and value adding code from exercise_14 and paste it below.
		Log the size of the set.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);

  uniqueNumbers.add(2);
  console.log(uniqueNumbers.size);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_17() {
  /* 
   
    Exercise 17
    
		Check Set: 

		Copy the Set creation and value adding code from exercise_14 and paste it below.
		Use has() to check if the set contains the number 1.

  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);
  console.log(uniqueNumbers.has(1));
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_18() {
  /* 
   
    Exercise 18

		Delete from Set: 
    
		Copy the Set creation and value adding code from exercise_14 and paste it below.
		Remove a value from the set and log it.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set();
  uniqueNumbers.add(1);
  uniqueNumbers.add(2);
  uniqueNumbers.add(3);
  uniqueNumbers.delete(3);
  console.log(uniqueNumbers);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_19() {
  /* 
   
    Exercise 19
    
		While Loop: 
		
		Use a while loop to log numbers from 1 to 5.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_20() {
  /* 
   
    Exercise 20
    
    Do-While Loop: 
		
		Use a do-while loop to log numbers from 5 to 1.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let j = 5;
  do {
    console.log(j);
    j--;
  } while (j > 0);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_21() {
  /* 
   
    Exercise 21
    
    For Loop: 

		Copy the array defined in exercise_02 and paste it below.
		Use a for loop to iterate over the numbers array and log each item.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let numbers = [10, 20, 30, 40, 50];
  for (let k = 0; k < numbers.length; k++) {
    console.log(numbers[k]);
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_22() {
  /* 
   
    Exercise 22
    
		For-Of Loop: 
		
    Copy the array defined in exercise_02 and paste it below.
		Use a for-of loop to iterate over the numbers array and log each item.
  
  */
  // CODE IN THE OPEN LINES BELOW
  for (let num of numbers) {
    console.log(num);
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_23() {
  /* 
   
    Exercise 23
    
    For-In Loop: 
		
		Create an object and use a for-in loop to log each key and value.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let person = { name: "Alice", age: 30, city: "Paris" };
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_24() {
  /* 
   
    Exercise 24
    
    Break and Continue: 
		
		Use a loop to log numbers from 1 to 10, skipping 5 and stopping at 8.
  
  */
  // CODE IN THE OPEN LINES BELOW
  for (let x = 1; x <= 10; x++) {
    if (x === 5) continue;
    if (x === 8) break;
    console.log(x);
  }
  // CODE IN THE OPEN LINES ABOVE
}

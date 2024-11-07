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
  exercise_17();
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
		 
		Copy the Map creation and key-value pair setting code from exercise_11 and 
    paste it below
    Log the Map and it's size to the console

		Then, use the Map's delete method to delete the entry with the key "age"
    Log the Map and it's size to the console again
  
  */
  // CODE IN THE OPEN LINES BELOW
  let userMap = new Map([
    ["name", "John"],
    ["age", 25],
    ["job", "Software Developer"],
  ]);
  console.log(userMap);
  console.log("Size:", userMap.size);
  userMap.delete("age");
  console.log(userMap);
  console.log("Size:", userMap.size);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_13() {
  /* 
   
    Exercise 13
    
    Sets: 
		
		Create a new Set with three unique values
    Log the Set and its size to the console

    Then add 3 more unique items to the Set

    Log the Set and its size to the console

    Then, add an item to the Set that is already in it.
    Log the Set and its size to the console and notice that it 
    didn't add the duplicate

    Then use the .has() method to check if the set has 3 separate items
    
    Write a condition to store if the Set has all 3 items.
    Then write an if-else statement that prints "Has all three" if it does and
    "Does not contain all three" if it doesn't.

    Finally, delete three items from the Set and log the Set and it's size to
    the console.

  */
  // CODE IN THE OPEN LINES BELOW
  let uniqueNumbers = new Set([1, 2, 3]);
  console.log("Original:", uniqueNumbers, "\nSize:", uniqueNumbers.size);
  uniqueNumbers.add(4);
  uniqueNumbers.add(5);
  uniqueNumbers.add(6);
  console.log(
    "New Members Added:",
    uniqueNumbers,
    "\nSize:",
    uniqueNumbers.size
  );

  uniqueNumbers.add(2);
  console.log(
    "Set won't add item already in Set:",
    uniqueNumbers,
    "\nSize:",
    uniqueNumbers.size
  );

  const has1 = uniqueNumbers.has(1);
  const has5 = uniqueNumbers.has(5);
  const has15 = uniqueNumbers.has(15);

  const hasAllThree = has1 && has5 && has15;

  if (hasAllThree) {
    console.log("Has all three");
  } else {
    console.log("Does not contain all three");
  }

  uniqueNumbers.delete(4);
  uniqueNumbers.delete(5);
  uniqueNumbers.delete(2);

  console.log(
    "Set after deletions",
    uniqueNumbers,
    "\nSize:",
    uniqueNumbers.size
  );
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_14() {
  /* 
   
    Exercise 14
    
		While Loop: 
		
		Use a while loop and the increment operator to log numbers from 1 to 5.
  
  */
  // CODE IN THE OPEN LINES BELOW
  let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_15() {
  /* 
   
    Exercise 15
    
    Do-While Loop: 
		
		Use a do-while loop and the decrement operator to log numbers from 28 to 1.

    Then add a conditional inside the loop to only print the number if it is 
    divisible by 7 OR 4
  
  */
  // CODE IN THE OPEN LINES BELOW
  let j = 28;
  do {
    console.log(j);
    j--;
  } while (j > 0);

  let x = 28;
  do {
    if (x % 7 === 0 || x % 4 === 0) {
      console.log(x);
    }
    x--;
  } while (x > 0);
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_16() {
  /* 
   
    Exercise 16
    
    Break and Continue: 
		
    Create a for loop that iterates from 1 to 10 and logs 
    each number to the console.

    Then, using the `continue` and `break` keywords, skip the loop iteration
    each time the number is odd, and then break the loop once it reaches 8.
  
  */
  // CODE IN THE OPEN LINES BELOW
  for (let x = 1; x <= 10; x++) {
    console.log(x);
  }

  for (let x = 1; x <= 10; x++) {
    if (x % 2 === 1) continue;
    if (x === 8) break;
    console.log(x);
  }
  // CODE IN THE OPEN LINES ABOVE
}

export function exercise_17() {
  // DONT edit the code below
  const purchasedItems_November_5_2024 = [
    { item: "toilet paper", price: 17.99, type: "toiletry" },
    { item: "1lb ground beef", price: 6.99, type: "food" },
    { item: "Tooth brush 3 pack", price: 7.99, type: "toiletry" },
    { item: "Iphone Charging Cable", price: 12.49, type: "electronics" },
    { item: "Chips", price: 3.49, type: "food" },
    { item: "Xbox Gift Card", price: 25, type: "gift card" },
    { item: "12 pack Diet Coke", price: 9.99, type: "food" },
    { item: "Visa Gift Card", price: 160, type: "gift card" },
    { item: "Vizio 50 inch tv", price: 299, type: "electronics" },
  ];
  // DONT edit the code above
  /* 
   
    Exercise 17
    
    For Loop: 

		We have defined an array above named `purchasedItems_November_5_2024`.

    It contains objects that report on different properties of items bought 
    by a customer at a supermarket.

    Using a basic for loop, iterate through all elements in the array and log
    the `item` property of each object to the console. There are multiple ways 
    to accomplish this based on what we've learned.

    Then, create a new variable above the for loop named `itemTypes` 
    that stores a new Set.
    Update the code inside of your for loop to add an elements `type` property
    to the Set on each iteration

    Then, write a for-of loop to log all elements of the Set to the console.
    This allows us to see all the unique types of items that the customer had 
    in their purchasedItems

    Then, create a variable named `sumPricePerType` that stores 
    an empty Object Literal.
    
    Add a new line within the for loop that checks if the current elements
    'type' is a property in `sumPricePerType`. If it isn't, add the 'type' 
    value to `sumPricePerType` as a new property with a value of 0. 

    
  
  */
  // CODE IN THE OPEN LINES BELOW

  const itemNames = [];
  const uniqueTypes = new Set();
  const sumPricePerType = {};

  for (let i = 0; i < purchasedItems_November_5_2024.length; i++) {
    const itemName = purchasedItems_November_5_2024[i]["item"];
    itemNames.push(itemName);
    const type = purchasedItems_November_5_2024[i]["type"];
    const price = purchasedItems_November_5_2024[i]["price"];
    uniqueTypes.add(type);
    if (!sumPricePerType.hasOwnProperty(type)) {
      sumPricePerType[type] = 0;
    }
    const newSum = price + sumPricePerType[type];
    sumPricePerType[type] = Math.round(newSum, 2);
  }

  console.log("Item Names:");
  for (let type of uniqueTypes) {
    console.log("Item:", type);
  }
  console.log("--------------");

  console.log("Unique item types:");
  for (let type of uniqueTypes) {
    console.log("Unique Type:", type);
  }
  console.log("--------------");

  console.log("Total sum for each type");
  for (let key in sumPricePerType) {
    console.log(`Sum for ${key} items: ${sumPricePerType[key]}`);
  }
  console.log("--------------");

  // CODE IN THE OPEN LINES ABOVE
}

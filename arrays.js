let values = [ 1,2,3,4,'five','six',true]
console.log(values)
console.log(typeof(values))

// index
console.log(values[2])
console.log(values.at(-2))

// updating
values[0]='one'
console.log(values)

// no.of values in an array
console.log(values.length)

// slicing
console.log(values.slice(3,6))

// adding items
values.push(7,'eight',false)
console.log(values)

values.unshift('apples',100)
console.log(values)

// removing
values.pop()
console.log(values)

values.shift()
console.log(values)
// sort
let sortArray = [5, 2, 8, 1, 9, 3]
console.log("Before sort:", sortArray)
console.log("After sort:", sortArray.sort())
//  join
let joinArray = ['apple', 'banana', 'cherry', 'date']
console.log("Joined with -", joinArray.join('-'))
console.log("Joined with ,", joinArray.join(', '))
console.log("Joined with space", joinArray.join(' '))
//  includes 
let includeArray = ['red', 'green', 'blue', 'yellow']
console.log("Includes 'green':", includeArray.includes('green'))
console.log("Includes 'purple':", includeArray.includes('purple'))

// splicing-adding items
let array = [100,200,300,400,500,'jane','mark',true]
array.splice(3,0,'mike','google')
console.log(array)

// splicing-remove
array.splice(6,2)
console.log(array)

// splicing-replace
array.splice(1,2,'python','JS')
console.log(array)

// splice with negative index
let nums = [10,20,30,40,50,60]
nums.splice(-2,1,45) // replaces 60 with 45
console.log(nums)

// splice- extract and return removed elements
let fruits = ['apple','banana','cherry','date','elderberry']
let extracted = fruits.splice(1,3)
console.log('Extracted:',extracted)
console.log('Remaining:',fruits)

// splice- insert without removing
let colors = ['red','blue']
colors.splice(1,0,'green','yellow')
console.log(colors)

// splice- remove all from index to end
let letters = ['a','b','c','d','e']
letters.splice(2) // removes from index 2 to end
console.log(letters)

// splice- using arrays as insert values
let stack = [1,2,3]
let newItems = [4,5]
stack.splice(3,0,...newItems)
console.log(stack)

// splice- multiple replacements at once
let matrix = ['x','y','z','w']
matrix.splice(0,3,'a','b','c')
console.log(matrix)

// concat
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let arr3 = arr1.concat(arr2)
console.log(arr3)
console.log(arr3.reverse())

// Assignment 1: Create an Array Create an array named colors with the following elements: 'red', 'green', 'blue'.
let color = [ 'red', 'green', 'blue']

// Assignment 2: Access and Modify Array Elements
// Given the array colors, access the second element and change it to 'pink'. Then, display the modified array.
color[1]= 'pink'
console.log(color)

// Assignment 3: Determine the Length of an Array
// Given the array colors, determine its length and store it in a variable lengthOfColors. Then, display lengthOfColors.
console.log(color.length)
lengthOfColor = 3
console.log(lengthOfColor)

// Assignment 4: Use .pop() Method
// Given the array colors, use the .pop() method to remove the last element from the array. Then, display the modified array.
color.pop()
console.log(color)

// Assignment 5:Given two arrays arr1 and arr2, combine them into a single array combinedArray using the .
// concat() method. Then, remove the first element from combinedArray using the .shift() method. Finally, display the modified combinedArray.
let array1 = [100,200,300,400,500]
let array2 = ['blue','yellow','green']
let combinedArray = array1.concat(array2)
combinedArray.shift()
console.log(combinedArray)

// Assignment 6:Given an array "sourceArray", extract a subarray "extractedArray" from index 2 to index 4 using the .slice() method. Then, modify the extractedArray by replacing its elements with 'x', 'y', and 'z' using the .
// splice() method. Finally, display both the sourceArray and the modified extractedArray.

let sourceArray = ['a', 'b', 'c', 'd', 'e', 'f'];
let extractedArray = sourceArray.slice(2, 5); // Extract from index 2 to index 4 (exclusive of 5)
console.log(sourceArray);
console.log( extractedArray);

extractedArray.splice(0, 3, 'x', 'y', 'z'); // Replace elements from index 0 with 'x', 'y', 'z'
console.log(extractedArray);
console.log(sourceArray);

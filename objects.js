let person ={
    'name':"jane doe",
    'age':23,
    'address':"123 kimathi ST",
    'is_married':false

}
console.log(person)
console.log(typeof(person))
// accessing values
console.log(person.name)
console.log(person["name"])

console.log(Object.keys(person))
console.log(Object.values(person))
console.log(Object.entries(person))

const student = {
  name: "John",
  age: 20,
  courses: ["Math", "Physics", "Computer Science"],
  address: {
    city: "Nairobi",
    streets: ["Moi Avenue", "Kenyatta Avenue"]
  }
};


console.log(student.courses[2]);
console.log(student.address.streets[1]);


// Create a new file called objectTask and attempt the below questions:
// my_arr= [23, "Jane", 560, ["Lesson", "Maths", {"currency" : "KES"}], 987, 76,"John"]
let my_arr = [23, 'Jane', 560, ['Lesson', 'Maths', {'currency' : 'KES'}], 987, 76,'John']
// Display:
// 1. KES
// 2. 560
// 3. Maths

console.log(my_arr[3][2].currency); 
console.log(my_arr[2]); 
console.log(my_arr[3][1]); 
// 4. In the object with the key currency, add another key "amount" with value 90
my_arr[3][2].amount = 90;
console.log(my_arr[3][2]);

// 5. Reverse 987 to 789 without using an inbuilt -method or Assigning 789 manually.
// Solution: Convert to string, split to array, reverse, join back, parse to integer
let num = 987;
let reversed = parseInt(num.toString().split('').reverse().join(''));
console.log(reversed);

// 6. Change the name "John" to "Jane" .
my_arr[6] = 'Jane';
console.log(my_arr);

// question 7.
const university = {
  name: "Tech University",
  location: "Nairobi",

  students: [
    {
      name: "Alice",
      age: 21,
      courses: ["Algorithms", "Databases", "AI"]
    },
    {
      name: "Bob",
      age: 22,
      courses: ["Networks", "Operating Systems"]
    }
  ],

  departments: [
    {
      name: "Computer Science",
      lecturers: [
        { name: "Dr. Kim", subjects: ["DSA", "Machine Learning"] },
        { name: "Dr. Lee", subjects: ["Databases", "Distributed Systems"] }
      ]
    },
    {
      name: "Mathematics",
      lecturers: [
        { name: "Dr. Patel", subjects: ["Statistics", "Linear Algebra"] }
      ]
    }
  ]
};

// 1.Databases
console.log(university.students[0].courses[1]);

// 2.Linear Algebra
console.log(university.departments[1].lecturers[0].subjects[1]);

// 3.Distributed Systems
console.log(university.departments[0].lecturers[1].subjects[1]);

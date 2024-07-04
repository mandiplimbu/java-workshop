// getSomething(Function(){
// })
// getSomething(()=>{

// const nums = [1, 2, 3, 4, 5];
// const sq_num = [];
// nums.forEach(function (nums) {
//   sq_num.push(nums ** 2);
// });
// console.log(sq_num);

// const data = [
//   {
//     firstName: "Mandip",
//     lastName: "Yengden",
//     address: "Dharan",
//   },
//   {
//     firstName: "Nikesh",
//     lastName: "Dhimal",
//     address: "Urlabari",
//   },
//   {
//     firstName: "Max",
//     lastName: "Karki",
//     address: "Bihar",
//   },
// ];
// data.forEach(function (data) {
//   console.log(
//     "Name: " +
//       data.firstName +
//       " " +
//       data.lastName +
//       " " +
//       "Address :" +
//       data.address
//   );
// });

// const nums2 = [2, 3, 4, 5, 6];
// const sqr = nums2.map(function (num) {
//   return num * num;
// });
// console.log(sqr);
// console.log(nums2);

// const data = [
//   {
//     firstName: "Mandip",
//     lastName: "Yengden",
//     address: "Dharan",
//   },
//   {
//     firstName: "Nikesh",
//     lastName: "Dhimal",
//     address: "Urlabari",
//   },
//   {
//     firstName: "Max",
//     lastName: "Karki",
//     address: "Bihar",
//   },
// ];
// const result = data.map((object) => {
//   return (fullName = object.firstName + " " + object.lastName);
// });
// console.log(result);

// const nums2 = [2, 3, 4, 5, 6];
// const sqr = nums2.map(function (num) {
//   return num * num;
// });
// console.log(sqr);
// console.log(nums2);

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((object) => {
//   return { Text: "A", number: object };
// });
// console.log(result);

// const data = [
//   {
//     firstName: "Mandip",
//     lastName: "Yengden",
//     address: "Dharan",
//   },
//   {
//     firstName: "Nikesh",
//     lastName: "Dhimal",
//     address: "Urlabari",
//   },
//   {
//     firstName: "Max",
//     lastName: "Karki",
//     address: "Bihar",
//   },
// ];
// const result = data.map((object) => {
//   return { ...object, fullName: object.firstName + " " + object.lastName };
// });
// console.log(result);

// const numberData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = numberData.filter((number) => {
//   return number % 2 !== 0;
// });
// console.log(oddNumbers);
// const nums = numberData.filter((number) => {
//   return number > 5;
// });
// console.log(nums);

// books = [
//   {
//     title: "You can win",
//     author: "shiv khera",
//     publishedAt: 2001,
//   },
//   {
//     title: "Think like a monk",
//     author: "Jay shetty",
//     publishedAt: 2022,
//   },
//   {
//     title: "Cashflow quadrant",
//     author: "Robert T. Kiyosaki",
//     publishedAt: 1909,
//   },
//   {
//     title: "You can win2",
//     author: "shiv khera",
//     publishedAt: 1990,
//   },
//   {
//     title: "Think like a monk2",
//     author: "Jay shetty",
//     publishedAt: 1999,
//   },
//   {
//     title: "Cashflow quadrant2",
//     author: "Robert T. Kiyosaki",
//     publishedAt: 2010,
//   },
// ];
// const abcbooks = books.filter((defbooks) => {
//   return defbooks.publishedAt > 2000;
// });
// console.log(abcbooks);

// const files = ["index.html", "app.js", "app.java", "test.js"];
// const result = files.filter((obj) => {
//   return obj.endsWith(".js");
// });
// console.log(result);

// const lastTask = [1,2,null,undefined,"Mandip","haha", "hehehe"]
// const result = lastTask.filter((obj)=>{
//     return obj !== null && obj !== undefined 
// })
// console.log(result)


const lastData =
[
    {
        name : "Manish",
        marks : 800,
        status : "pass"
    },
    {
        name : "Anish",
        marks : 500,
        status : "fail"
    },
    {
        name : "Pranjal",
        marks : 900,
        status : "pass"
    },
    {
        name : "Bob",
        marks : 100,
        status : "fail"
    },
    {
        name : "Hari",
        marks : 550,
        status : "fail"
    },
    {
        name : "Shyam",
        marks : 600,
        status : "pass"
    },
    {
        name : "Laxman",
        marks : 300,
        status : "fail"
    }
]

const result = lastData.filter((obj)=>{
    return obj.name.endsWith ("sh") && obj.marks > 500 && obj.status == "pass"
})
console.log(result)
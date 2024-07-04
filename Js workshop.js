// const days = [
//   "Sunday",
//   "Monday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(days[1]);
// days.push("Thursday");
// days.pop("Thursday");
// days.unshift("hello");
// console.log(days);
// days.shift("hello");
// console.log(days);

// const data = days.slice(1, 3);
// console.log(data);
// const data = days.slice(1, 4);
// console.log(data);

// days.splice(1, 1, "haha");
// console.log(days);

// const data = [1, 2, 3, 4, 5, 6];
// output ---> [1,'hello','hello','world',5,6]

// data.splice(1, 3, "hello", "bye", "world");

// console.log(data);

// const vowels = ['m','a','n','d','i','p']

// const text = "I, am from, Nepal";
// const splittedData = text.split(",");
// console.log(splittedData);

// const languages = ["Js", "php", "c"];
// languages.splice(1, 0, "html");
// console.log(languages);

// const person = Object.freeze({
//   name: "Mandip",
//   address: "Ithari",
//   nationality: "Nepal",
// });

// const person = {
//   name: "Mandip",
//   address: "Dharan",
//   nationality: "Nepal",
// };

// person.age = 20;
// person.sex = "male";

// console.log(person);

// const test = [
//   {
//     name: "Mandip",
//   },
//   {
//     name: "Max",
//   },
// ];
// test.push({
//   name: "Bishista",
// });
// console.log(test);

const test2 = {
  name: ["Mandip", "Max", "Bishista"],
};

console.log(test2.name.splice(0, 3, 1, 2, 3));

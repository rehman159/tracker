// var Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };
// Person.prototype.calculateYear_of_Birth = function () {
//   return 2020 - this.age;
// };
// var rehman = new Person("Rehman Khan", 30);
// console.log(rehman.name);

// console.log(rehman.calculateYear_of_Birth());

// time to learn closure

function YourAge(date_of_year) {
  var welcome_msg = "Hi, Hope you will be fine and doing great!";
  return function (firstName) {
    age = 2020 - date_of_year;

    return function (yourFatherName) {
      console.log(
        `${firstName} son of ${yourFatherName} ${welcome_msg} Your age is : ${age} `
      );
    };
  };
}

YourAge(1970)("Muhammad Rehman")("Arshad Jamil");
YourAge(1980)("Subhan Khan")("Afsar Khan");

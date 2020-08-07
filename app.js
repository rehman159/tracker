var Person = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.calculateYear_of_Birth = function () {
  return 2020 - this.age;
};
var rehman = new Person("Rehman Khan", 30);
console.log(rehman.name);

console.log(rehman.calculateYear_of_Birth());

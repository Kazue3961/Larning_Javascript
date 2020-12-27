function hello(name, age) {
    console.log('Hello' + name + age);
    return name + age;
}

hello('Mary', 15);
const returnVal = hello('Tom', 20)
console.log(returnVal);

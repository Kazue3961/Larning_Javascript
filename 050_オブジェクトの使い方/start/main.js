const person = {
    name: ['code', 'Mary'],
    age: 32,
    gender: 'female',
    interests: {
        sports: 'golf',
        music: 'piano'
    },
    getFullname: function(){
        console.log(this.name[0] + this.name[1])
    }
};

// person.age = 12;
// console.log(person.age);


//ブラケット記法
const ageKey = 'age'
person[ageKey] = 13;
console.log(person.age);
person.getFullname();
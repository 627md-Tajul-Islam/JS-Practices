// if we need same type of objects ,we will make a class.
// (new)--> keyword is used for creating objects from class.
class person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const hero = new person('TAJUL', 'Islam', 20000);
console.log(hero);

const zero = new person('Pratasha', 'Islam', 20000);
console.log(zero);
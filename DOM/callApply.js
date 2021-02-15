// a function which is written inside an object is called method

// this file was made to clear the concept of object. if you look carefully you will find answers

// if i want to call a method which is inside the same object ,we will use (this) keyword.

//  if i want to call a method which is outside the same object, we will use console.log(var name.the property i want to access);

// we can write functions inside methods

// bind() method is used for using any method that is currently declared in another function

// we can use the same method declared in a function by using 3 way. 1[bind] 
// 2[call]  3[apply]

// call and apply are similar to bind.the main difference is when we use call  
// call(the method name, parameter, parameter, parameter) we will have to separate the parameter by using comma. 

//But when we use apply apply(heroPerson, [3000, 300, 30]) we have to use it inside an array
// a function which has names is called namefull function
// a function which has no names is called anonyms function

// .call is a

const normalPerson = {
        firstName: 'Tajul',
        lastName: 'Islam',
        salary: 15000,
        getFullName: function() {
            console.log(this.firstName, this.lastName);
        },
        chargeBill: function(amount) {
            this.salary = this.salary - amount;
            return this.salary;
        }
    }
    // normalPerson.chargeBill(150);
    // normalPerson.chargeBill(3000);
    // console.log(normalPerson.salary);


const heroPerson = {
    first: 'Jhankar',
    last: 'Mahbub',
    salary: 25000
}
const friendPerson = {
    first: 'Karina',
    last: 'Islam',
    salary: 25000
}

//normalPerson.chargeBill();
// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);
// const friendlyChargeBill = normalPerson.chargeBill.bind(friendPerson);
// friendlyChargeBill(1500);

// normalPerson.chargeBill.call(friendPerson, 5000, 500, 50);
// console.log(friendPerson.salary);
// console.log(normalPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 30]);
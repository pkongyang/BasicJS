let person={
    name: 'John',
    age: 30
}

//Dot Notation
person.name = 'Mary';


//Bracket Notation
person['name'] = 'June';

console.log(person.name);

let SelectedColour = ['Red','Blue'];
SelectedColour[2] = 'Green';
console.log(SelectedColour);
console.log(SelectedColour.length);


function greet(name, lastname){
    
    console.log('Hello '+ name + ' ' +lastname);

}

function square(number){
    return number*number;
}

greet('June','PK');

console.log(square(2));



//Salary Calculator
let baseSalary = 30000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate)
}


//Salary Calculator with Object orientation 
let employee = {
    baseSalary2: 30000,
    overTime2: 10,
    rate2: 20,
    getWage2: function(){
        return this.baseSalary2 + (this.overTime2 * this.rate2)
    }
};
console.log(employee.getWage2())
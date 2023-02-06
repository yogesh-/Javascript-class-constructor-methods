// Task 1: Code a Person class
// create a new class
class Person {
    //assign default values to constructor
    constructor(name = "Tom",age = 20,energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    // create a new method
    sleep() {
        return this.energy + 10
    }
    // create a new method
    doSomethingFun() {
         return this.energy - 10
    }
}

// Task 2: Code a Worker class
// this class inherits the methods and properties of Person class
class Worker extends Person {
    // apart from default inherited properties, add new properties
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name,age,energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        return this.xp + 10
    }
}


// Task 3: Code an intern object, run methods 
// create new instance of class Worker
function intern() {
    var intern = new Worker('Bob', 21, 110, 0, 10);
    // run method from class worker
    intern.goToWork();
    return intern;
}


// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker('Alice', 30, 120, 100, 30);
    manager.doSomethingFun();
    return manager;
}

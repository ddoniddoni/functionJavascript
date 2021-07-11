class Student extends Person{
    constructor(firstname, lastname, ssn, school){
        this._school = school;
    }
    get school(){
        return this._school;
    }
}
interface IPerson
{
    firstName:string;
    lastName:string;
    age:number;
    GetFullName():string;
    GetAge():number;
}
class Person implements IPerson
{
    firstName: string;
    lastName: string;
    age: number;

    GetFullName():string {
        return `${this.firstName} ${this.lastName}`;
    }
    GetAge():number {
        return this.age;
    }
    constructor(firstName: string,lastName: string,age: number)
    {
         this.firstName = firstName;
         this.lastName = lastName;
         this.age = age;
    }
}
let e1:Person = new Person("Sukanta","Sahoo",29);
console.log("Fullname : "+e1.GetFullName());
console.log("Age : "+e1.GetAge());
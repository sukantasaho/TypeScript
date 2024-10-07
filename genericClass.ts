class StudentInfo<T,S>{
    private id:T;
    private name:S;
    constructor(id:T,name:S)
    {
        this.id = id;
        this.name = name;
    }
    Display():void
    {
         console.log(`Id is : ${this.id} and Name is ${this.name}`);
    }
}
let s1:StudentInfo<number,string> = new StudentInfo<number, string>(101,"Sukanta");
s1.Display();

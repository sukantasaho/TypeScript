class Student
{
     sId:number=101;
     sName:string="sukanta";
     isActive:boolean=true;
     total:number = 0;
     average:number = 0;
     arrMarks:Array<number> = [35,45,36];
     arrCourses:string[] = ["Corejava","Adv. Java","MicroService","Spring","Spring Boot","Servlet","JSP"];
     admissionDate:[number,string,number] = [23,"January",2024];

     DisplayStudentDetails()
    {
        let studentDetails:string = `sid ${this.sId}\nStudentName ${this.sName}\nActive ${this.isActive}`;
        console.log(studentDetails);
    }
    DisplayResult()
    {
        for(let item of this.arrMarks)
        {
            this.total+=item;
        }
        console.log("Total-"+this.total);
        this.average = this.total/this.arrMarks.length;
        console.log("Average-"+this.average);
    }
}
let s1:Student = new Student();
s1.DisplayStudentDetails();
s1.DisplayResult();
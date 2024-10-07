enum Result{
    Pass,
    Failed,
    Promoted
}
function student()
{
    let sID:number=101;
    let sName:string="sukanta";
    let isActive:boolean=true;
    let marks:number[] = [34,45,45,56,54,67];
    let totalMark:number=600;
    let obtainedMark:number = 0;
    for(let i = 0; i<marks.length; i++)
    {
          obtainedMark = obtainedMark+marks[i];
    }
    let averageMark:number = (obtainedMark/totalMark)*100;
    console.log(averageMark);
    let courses:string[] = ["math","flo","tls","ssc"];
    for(let item of courses)
    {
        console.log(item);
    }
    for(let item in courses)
    {
            console.log(item);
    }
    if(averageMark<35)
        console.log(Result.Failed);
    else
    console.log(Result.Pass);

}
student();

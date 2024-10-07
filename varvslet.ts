function Test()
{
    var mark : number = 53;
    let result:string = "pass";
    if(mark<35)
    {
      let result:string = "fail";
       console.log("Result-"+result);
    }
    console.log("Result-"+result);
}
function test2()
{
    let marks:Array<number> = [33,24,45,54,43,35];
    let products:string[] = ["mango","banana","apple"];
    console.log(marks);
    console.log(products);
}
function test3()
{
    let employee:object ={
        name:"Sukanta",
        age:34,
        address:"Bhadrak"
    }
    console.log(employee);
}
function test4()
{
    let arrDOB:[number,String,number] = [12,"July",2024];
    console.log(arrDOB);
}
Test();
test2();
test3();
test4();
 
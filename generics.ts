function DisplayData<T>(id:T, name:string)
{
    console.log(`ID is : ${id} and Name is : ${name}`);
    console.log(`Datatype of ID is ${typeof(id)} and Datatype of Name is : ${typeof(name)}`);
}
DisplayData<number>(101,"Sukanta Sahoo");
DisplayData<string>("101","Manoj");


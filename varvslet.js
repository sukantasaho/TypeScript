function Test() {
    var mark = 53;
    var result = "pass";
    if (mark < 35) {
        var result_1 = "fail";
        console.log("Result-" + result_1);
    }
    console.log("Result-" + result);
}
function test2() {
    var marks = [33, 24, 45, 54, 43, 35];
    var products = ["mango", "banana", "apple"];
    console.log(marks);
    console.log(products);
}
function test3() {
    var employee = {
        name: "Sukanta",
        age: 34,
        address: "Bhadrak"
    };
    console.log(employee);
}
function test4() {
    var arrDOB = [12, "July", 2024];
    console.log(arrDOB);
}
function test5()
{
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let  dob = [22,9,2023];
     let monthValue = dob[1]-1;
     let month1 = months[monthValue];
     let displayDOB = dob[0]+"-"+month1+"-"+dob[2];
     console.log(displayDOB);
}

Test();
test2();
test3();
test4();
test5();

var Result;
(function (Result) {
    Result[Result["Pass"] = 0] = "Pass";
    Result[Result["Failed"] = 1] = "Failed";
    Result[Result["Promoted"] = 2] = "Promoted";
})(Result || (Result = {}));
function Student() {
    var sID = 101;
    var sName = "sukanta";
    var isActive = true;
    var marks = [34, 45, 45, 56, 54, 67];
    var totalMark = 600;
    var obtainedMark = 0;
    for (var i = 0; i < marks.length; i++) {
        obtainedMark = obtainedMark + marks[i];
    }
    var averageMark = (obtainedMark / totalMark) * 100;
    console.log(averageMark);
    var courses = ["math", "flo", "tls", "ssc"];
    for (var _i = 0, courses_1 = courses; _i < courses_1.length; _i++) {
        var item = courses_1[_i];
        console.log(item);
    }
    for (var item in courses) {
        console.log(item);
    }
    if (averageMark < 35)
        console.log(Result.Failed);
    else
        console.log(Result.Pass);
}
Student();

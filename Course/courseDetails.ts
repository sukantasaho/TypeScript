import { IStudentRegistration, UserData } from "../Admin/register";

class Course implements IStudentRegistration
{
    aadhar: number;
    age: number;
    qualification: string;
    sAddress: string;
    sId: number;
    sName: string;
    stream: string;

    cId:number;
    cName:string;
    facultyName:string;
    cFees:number;

}
class UserInfo implements UserData
{
    userName: string;
    userId: number;
    isActive: boolean;
    job: string;
    
}

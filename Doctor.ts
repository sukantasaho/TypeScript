class Doctor
{
    docId:number;
    docName:string;
    specialization:string;
    address:string;

    //setter method
    setDocId(docId:number):void
    {
        this.docId = docId;
    }
    setDocName(docName:string):void
    {
        this.docName = docName;
    }
    setSpecialization(specialization:string):void
    {
        this.specialization = specialization;
    }
    setAddress(address:string):void
    {
        this.address = address;
    }

    //getter method
    getDocId():number
    {
       return this.docId;
    }
    getDocName():string
    {
        return this.docName;
    }
    getSpecialization():string
    {
        return this.specialization;
    }
    getAddress():string
    {
       return this.address;
    }
}
let d1 : Doctor = new Doctor();
d1.setDocId(101);
d1.setDocName("Sukanta Sahoo");
d1.setSpecialization("Urology");
d1.setAddress("Bhubaneswara");
console.log(`Id : ${d1.getDocId()}\nName : ${d1.getDocName()}\nSpecialization : ${d1.getSpecialization()}\nAddress : ${d1.getAddress()}`);


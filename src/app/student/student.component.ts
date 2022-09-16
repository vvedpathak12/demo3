import { Component, OnInit } from '@angular/core';
import { FormBuilder , Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  Branches : any = [ "" , "Mechanical" , "Computer" , "Civil" , "ENTC"];

  States : any = ["" ,"Maharashtra" , "Gujarat" , "Bihar" , "Tamil Nadu" , "Uttar Pradesh" ,"Assam" , "Kerala" , "Karnataka" , "Andhra Pradesh" ,"West Bengal" , "Meghalaya", "Rajasthan" , "Madhya Pradesh" , "Haryana" , "Nagaland" , "Mizoram" , "Tripura" , "Odisha" , "Chhattisgarh" ,"Uttarakhand" , "Himachal Pradesh" , "Punjab" , "Manipur" , "Jharkhand"]
  
  display :any;

  constructor(private fb : FormBuilder , private ser1 : DataSharingService , private route : Router) { }

  isSubmitted : boolean = false;
  myForm1:any;
  myForm2:any;


  public myForm2Data:any;
  public result:any;

  public empdata:any;

  ngOnInit(): void {

    // this.myForm1 =this.fb.group ({
    //   fname : ["" , [Validators.required]],
    //   mname :["" , [Validators.required]],
    //   lname : ["" , [Validators.required]],
    //   email : ["" , [Validators.required , Validators.pattern (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
    //   mobile : ["" ,[Validators.required , Validators.pattern ("^((\\+91-?)|0)?[0-9]{10}$")]],
    //   date : ["" , [Validators.required]],
    //   states : ["" , [Validators.required]],
    //   address : ["" , [Validators.required]],
    //   gender : ["" , [Validators.required]],
    //   enrnum : ["" , [Validators.required]],
    //   brnch : ["" , [Validators.required]],
    //   pass : ["" , [Validators.required , Validators.pattern (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/)] ],
    //   cpass : ["" , [Validators.required , Validators.pattern (/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}/)] ],
    // })



    this.myForm2Data = [];
    this.myForm2 =this.fb.group ({
      name : ["" , [Validators.required]],
      age : ["" , [Validators.required]],
      empId : ["" , [Validators.required]],
      role : ["" , [Validators.required]],
      branch : ["" , [Validators.required]],
    })

    // this.getdatafromBackend();

    // this.ser1.getalldata().subscribe((res:any) => {
    //   console.log(res);
    //   this.empdata=res;
    // })

    
  }

  // onSubmitForm1(){
  //   console.log(this.myForm1.value);
  //   this.isSubmitted =true;
  // }

  onSubmitForm2(){
    // console.log(this.myForm2.value);
    // this.isSubmitted =true;

    // this.empdata.push(this.myForm2.value);
    // // console.log(this.empdata.push(this.myForm2.value));
    // this.ser1.sendmyForm1data(this.empdata.push(this.myForm2.value)).subscribe((res:any)=>{
    //   console.log(res);})

    this.result = this.myForm2Data.push(this.myForm2.value);
    console.log(this.result);
    this.isSubmitted =true;

    this.route.navigate(['details']);

    this.ser1.sendmyForm1data(this.myForm2.value).subscribe((res:any)=>{
      console.log(res);
    },
    (err)=>{
      console.log(err);
    })



    // this.myForm2.reset();

  }



  // onChangemyForm1(){
  //   if(this.myForm1.value.pass == this.myForm1.value.cpass){
  //     return;
  //   }
  //   else{
  //     this.display = "Password not matching , please re-enter the password";
  //   }
  // }

  onChangemyForm2(){
    if(this.myForm2.value.pass == this.myForm2.value.cpass){
      return;
    }
    else{
      this.display = "Password not matching , please re-enter the password";
    }
  }

  onClickbtn(){
    // this.route.navigate(['details']);
  }
  
  
  // get f1(){
  //   return this.myForm1.controls;
  // }

  get f2(){
    return this.myForm2.controls;
  }

}




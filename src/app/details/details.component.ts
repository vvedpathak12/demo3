import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public empdata:any;

  display :any;
  formData:any;

  constructor(private ser2 : DataSharingService ,  private route : Router) { 
    this.getDataFromBackend();
    this.sendDataFromStudent();
  }

  isSubmitted : boolean = false;

  ngOnInit(): void {

  }


  getDataFromBackend(){
    this.ser2.getalldata().subscribe((res:any) => {
      console.log(res);
      this.empdata=res;
    },
    (err:any)=>{
      console.log(err);
    })
  }

  sendDataFromStudent(){
    this.ser2.sendmyForm1data(this.formData).subscribe((res:any) =>{
      console.log(res);
    },
    (err:any)=>{
      console.log(err);
    })
  }

  addData(){
    this.route.navigate(['student']);
  };

  onEdit(Id:any , Data:any){
    console.log(Id);
    console.log(Data);
    this.ser2.setMessage(Id , Data);

    this.route.navigate(['update']);
  }



  onDelete(dt:any){
    if (confirm("Are you sure you want to delete?")){
    // this.empdata.splice(this.empdata.length-1);
    this.ser2.deleteData(dt).subscribe((res:any)=>{
      console.log(res);
    },
    (err:any)=>{
      console.log(err);
    })
  }
  }


  

  

}

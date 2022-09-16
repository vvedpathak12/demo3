import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  public updateFrm:any;
  public isSubmitted : boolean = false;
  public getIdData:any;

  constructor(private fb : FormBuilder , private ser3 : DataSharingService , private route : Router) {

    this.ser3.getMessage().subscribe((res:any)=>{
      console.log(res);
      console.log(res.id);
      this.getIdData =res;
      console.log(this.getIdData.name)

    })
   }

  ngOnInit(): void {

    this.updateFrm = this.fb.group({
      name : [this.getIdData.name],
      age : [this.getIdData.age],
      empId : [this.getIdData.empId],
      branch : [this.getIdData.branch],
      role : [this.getIdData.role],
    })
  }

  onSubmit123(){
    this.updateFrm.value;
    console.log(this.updateFrm.value);
    this.isSubmitted = true;

    this.ser3.editData(this.getIdData.id , this.updateFrm.value).subscribe((res:any)=>{
      console.log(res);
    })

    this.route.navigate(['details']);
  }

  get fun(){
    return this.updateFrm.controls;
  }

}

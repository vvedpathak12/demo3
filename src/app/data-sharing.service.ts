import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  public Id :any = new BehaviorSubject ('4');
  public currentId = this.Id.asObservable();

  public Data :any = new BehaviorSubject('');
  public currentData = this.Data.asObservable();

  constructor(private http : HttpClient ) { }

  setMessage(Id:any , Data:any){
    this.Id.next(Id);
    this.Data.next(Data);
  }

  getMessage(){
    return this.currentId , this.currentData;
  }


  getalldata(){
    return this.http.get("http://localhost:3000/api/getAllCourses");
  }

  sendmyForm1data(formdata:any){
    return this.http.post("http://localhost:3000/api/insertCourses" , formdata)
  }

  editData(ID:any , Data:any){
    return this.http.put("http://localhost:3000/api/updateCourses/" + ID , Data)
  }

  deleteData(ID:any){
    return this.http.delete("http://localhost:3000/api/deleteCourses/" + ID)
  }

}



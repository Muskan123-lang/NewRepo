import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { model } from '../models/model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  message: string | undefined;
  setMessage(data: string){
    this.message=data;
  }

  getMessage(){
    return this.message;
  }
  readonly baseUri="http://localhost:32262/api/ResultManagment";
  constructor(private http:HttpClient) { }


  getStudent():Observable<model[]>{
    return this.http.get<model[]>(this.baseUri);
  }

  addStudent(student:model):Observable<model>{
    //student.Id='00000000-0000-0000-0000-000000000000';
    return this.http.post<model>(this.baseUri,student);
  }

  onUpdate(student:model,rollNo:number){
    return this.http.put<model>(this.baseUri+'/'+rollNo,student);;
  }
  onDelete(rollNo:number):Observable<model>{
    return this.http.delete<model>(this.baseUri+'/'+rollNo);
  }
  getUsersByRollNo(rollNo: number):Observable<model> {
    return this.http.get<model>(this.baseUri+'/'+rollNo);
  }
 

}

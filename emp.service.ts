import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmp } from './iemp';

@Injectable({
  providedIn: 'root'
})
export class EmpService {

  constructor(private http:HttpClient) { }

  private _baseurl="http://localhost:8081/emp/";

  public getEmpById(empId:number):Observable<IEmp>{
   return this.http.get<IEmp>(this._baseurl+"find/"+empId);
  }

  public empList():Observable<IEmp[]>{
    return this.http.get<IEmp[]>(this._baseurl);
   }
}

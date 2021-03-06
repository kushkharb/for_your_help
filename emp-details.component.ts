import { Component, OnInit } from '@angular/core';

import { EmpService } from '../emp.service';
import { IEmp } from '../iemp';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private _service:EmpService) { }

  public emp:IEmp;
  ngOnInit(): void {
  }

  public getEmpDetails(id:number){
     this._service.getEmpById(id).subscribe(data=>this.emp=data);
 }

}

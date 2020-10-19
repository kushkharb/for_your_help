import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';
import { IEmp } from '../iemp';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private _service:EmpService) { }
  
  public empList:IEmp[]=[];

  ngOnInit(): void {
  }

  public getEmpList(){
    this._service.empList().subscribe(data=>this.empList=data);
  }

}

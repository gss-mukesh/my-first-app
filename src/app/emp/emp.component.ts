import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  
   emp1: Employee = new Employee();
        
  constructor() { }

  ngOnInit(): void {
  }
 getFullName():string {
  return this.emp1.empName + ' ' + this.emp1.emplName;
  //return 'hello';
 }
}



import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-pr  ngOnInit(): void {
    console.log('employee preview here')
  }
  ngOnDestroy(): voeview',
  templateUrl: './emp-preview.component.html',
  styleUrls: ['./emp-preview.component.css']
})
export class EmpPreviewComponent implements OnInit, OnDestroy{
@Input()
emp1: Employee = new Employee();
  constructor() { }

id {
    console.log('component destroy')
  }

}






  



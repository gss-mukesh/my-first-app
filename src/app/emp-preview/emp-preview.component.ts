import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-emp-preview',
  templateUrl: './emp-preview.component.html',
  styleUrls: ['./emp-preview.component.css']
})
export class EmpPreviewComponent implements OnInit, OnDestroy{
@Input()
emp1: Employee = new Employee();

  constructor() { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}






  



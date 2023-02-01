import { Component } from '@angular/core';

import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from 'src/app/service/Employee';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  employees: any

  constructor(
    private employeeService: EmployeeService
  ) {}

  deleteEmployee (id: number, iControl: number) {
    if (window.confirm("Are you sure about deleting this user?")){
      this.employeeService.deleteEmployee(id).subscribe(response => {
        this.employees.splice(iControl, 1)
      })
    }
  }
  
  ngOnInit():void {
    this.employeeService.getEmployees().subscribe(response => {
      this.employees = response
    })
  }
}

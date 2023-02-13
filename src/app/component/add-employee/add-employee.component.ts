import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { EmployeeService } from 'src/app/service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employeesForm: FormGroup

  constructor (
    public form: FormBuilder,
    private employeeService: EmployeeService,
    private router:Router
    ) {
    this.employeesForm = this.form.group({
      name: [''],
      email: ['']
    })
  }

  handleSubmit(): void {
    this.employeeService.addEmployee(this.employeesForm.value).subscribe(response => {
      this.router.navigateByUrl('/list-employees')
    })
  }

}

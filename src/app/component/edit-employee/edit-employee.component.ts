import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  employeesForm: FormGroup
  id: number

  constructor(
    private activedRoute: ActivatedRoute,
    private employeeService: EmployeeService,
    public form: FormBuilder,
    private router: Router
  ) {
    this. employeesForm = this.form.group({
      name: '',
      email: ''
    })
    this.id = Number(this.activedRoute.snapshot.paramMap.get('id'))
  }

  ngOnInit ():void {
    this.employeeService.getEmployeeById(this.id).subscribe(response => {
      const [ data ]: any = response

      this.employeesForm.setValue({
        name: data.name,
        email: data.email
      })
    })
  }

  handleSubmit(): void {
    this.employeeService.updateEmployee(this.id, this.employeesForm.value).subscribe(response => {
      this.router.navigateByUrl('/list-employees')
    })
  }

}

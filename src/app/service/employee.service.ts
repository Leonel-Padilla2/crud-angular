import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  URL: string = 'https://localhost/empleados/'

  constructor( private HTTPClient: HttpClient ) {}

  addEmployee (employeeData: Employee):Observable<any> {
    return this.HTTPClient.post( this.URL + "?insert=1", employeeData )
  }
 /* Instrucciones */
  getEmployees () {
    return this.HTTPClient.get( this.URL )
  }

  getEmployeeById (id: number) {
    return this.HTTPClient.get( this.URL + "?get=" + id )
  }

  deleteEmployee (id: number) {
    return this.HTTPClient.get( this.URL + "?delete=" + id )
  }

  
  updateEmployee (id: number, employeeData: Employee):Observable<any> {
    return this.HTTPClient.post( this.URL + "?update="+ id, employeeData )
  }
}

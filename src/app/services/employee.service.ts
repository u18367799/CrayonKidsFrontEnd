import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../shared/employee';
import { EmployeeType } from '../shared/employeeType';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "https://localhost:44359/api";


  employeeData: Employee
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get(this.url+ '/Employees').toPromise();
  }

  addEmployee(obj: Employee) {
    return this.http.post(this.url + '/Employees', obj);
  }

  updateEmployee(obj: Employee) {
    return this.http.put(this.url+ '/Employees/' + localStorage['Employee_ID'], obj);
  }

  deleteEmployee(id: number) {
    return this.http.delete(this.url + '/Employees/' + localStorage['Employee_ID']);
  }
  viewEmployee(id: string) {
    return this.http.get(this.url + '/Employees/' + id);
  }


  // getEmployees(){
  //   let employees:[]
  //   if (localStorage.getItem('employees'))
  //   {
  //     employees = JSON.parse(localStorage.getItem('employees')!)
  //   }
  //   let subject = new Subject()
  //   setTimeout(() => {subject.next(employees); subject.complete();},1000)
  //   return subject
  //   }


  // getEmployee(id: number){
  //     let employees: Employee[] = []
      
	//   if(localStorage.getItem('employees')){
	//      employees = JSON.parse(localStorage.getItem('employees')!)
	//      }
	//   return employees.find(employee => employee.id === id)
  //   }

  //   addEmployee(employee:Employee){
  //   let employees: Employee[] = []
  //   if (localStorage.getItem('employees'))
  //   {
  //     employees = JSON.parse(localStorage.getItem('employees')!)
  //   }
  //   let id = employees.length + 1
  //   employee.id = id
  //   employees.push(employee)
  //   localStorage.setItem('employees', JSON.stringify(employees))

  // }

  // deleteEmployee(id: number){
  //   let employees: Employee[] = []

  //   if(localStorage.getItem('employees')){
  //     employees = JSON.parse(localStorage.getItem('employees')!)
  //   }
  //   let employee = employees.find(employee => employee.id === id)

  //   if (employee){
  //     employees.splice(id - 1, 1)
  //     localStorage.setItem('employees', JSON.stringify(employees))
  //   }
  // }
}
 

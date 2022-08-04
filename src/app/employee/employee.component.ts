import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../shared/employee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  
  employees: any;
  employee: any;  
  employeeData: Employee
	constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private router: Router) {}

	 ngOnInit(): void{ 
    this.getEmployees();

  }
  getEmployees(){
    this.employeeService
    .getEmployees()
    .then((res) => {(this.employees = res as string[]), console.log(this.employees)});
  }
  deleteEmployee(){
    this.employeeService.deleteEmployee(localStorage['Employee_ID']).subscribe((res) => {
      location.reload()
    })
  }
  setID(id){
    localStorage['Employee_ID'] = id
    this.confirmDelete(id)
  }
  editEmployee(id: number,p: Employee) {
    this.employeeService.employeeData = p;
    localStorage['Employee_ID'] = id
    this.router.navigate(["/updateemployee/" +id]);
    
  }

  confirmDelete(id: number) {
    Swal.fire({
      title: 'Are you sure you want to delete this record?',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id).subscribe((res) => {
          this.deleteEmployee()
          Swal.fire(
            'Deleted!',
            'The record has been deleted.',
            'success'
          ).then(res => location.reload())
        },
        (error) => {

          console.log(error)
        });
      }
    })
   
  }
 



    

    // deleteEmployee(id:number){
    //   this.employeeService.deleteEmployee(id)
    //   location.reload()
    // }
    
    // getEmployee(id:number){
    //   this.employeeService.getEmployee(id)

    // }
}

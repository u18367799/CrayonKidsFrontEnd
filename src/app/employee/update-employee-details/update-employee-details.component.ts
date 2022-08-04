import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/shared/employee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-employee-details',
  templateUrl: './update-employee-details.component.html',
  styleUrls: ['./update-employee-details.component.css']
})
export class UpdateEmployeeDetailsComponent implements OnInit {  

  Employee_ID: any
  employeeDetails;
  employeeForm: FormGroup = new FormGroup({})
  constructor(public employeeService: EmployeeService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
    this.route.params.subscribe(data => {
      this.Employee_ID = data['id']
    });
    if(this.Employee_ID !== ''){
      this.employeeService.viewEmployee(this.Employee_ID)
      .subscribe(data => {
        this.employeeDetails = data;
        Object.assign(this.employeeDetails, data)
        
        this.employeeForm = this.formBuilder.group({
          Name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]),
          surname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]),
          birthDate: new FormControl(''),
          hireDate: new FormControl(''),
          email: new FormControl('', [Validators.required, Validators.email]),
          contactNr: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.minLength(10)]),
          streetAddress: new FormControl('', [Validators.required, Validators.maxLength(50)]),
          // province: new FormControl('', [Validators.required, Validators.maxLength(50)]),
          city: new FormControl(this.employeeDetails.City, [Validators.required, Validators.maxLength(50)]),
          postalCode: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),   
        })
      })
    }

  }
  updateEmployee(){
   this.employeeService.updateEmployee(this.employeeService.employeeData).subscribe(data => {
    this.successUpdate()  
   })
  }
  successUpdate(){  
    Swal.fire(
      'Success!',
      'Updated Successfully!',     
    ).then(res => this.router.navigate(['/employeelist']))   
  }
    
}
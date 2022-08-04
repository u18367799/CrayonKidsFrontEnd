import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/shared/employee';
import Swal from 'sweetalert2';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-add-employee-details',
  templateUrl: './add-employee-details.component.html',
  styleUrls: ['./add-employee-details.component.css']
})
export class AddEmployeeDetailsComponent implements OnInit {

  employeeData: Employee
  employeeList: Employee[];
  addUpdate;
  employeeForm: FormGroup;

  selected = 'Gauteng';
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.initialiseForm()
    this.employeeForm = new FormGroup({  
      Name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]),
      surname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]),
      birthDate: new FormControl(''),
      hireDate: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      contactNr: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
      streetAddress: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      // province: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      postalCode: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern("^[0-9]*$")]),  
    }
    )
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.employeeForm.controls[controlName].hasError(errorName);
  }
  
  initialiseForm() {
    this.employeeData = {
      Employee_ID: 0,
      Name: '',
      Surname: '',
      Birth_Date: new Date(),
      Hire_Date: new Date(),
      Contact_No: 0,
      Email_Address:'',
      Street_Address: '',
      Address_2: '',
      Province: '',
      City: '',
      Postal_Code: '',
    };
    this.employeeList = [];
    this.addUpdate = 'Add Employee';
  }


  onSubmit() {
    if (this.employeeData.Employee_ID === 0) {
      this.employeeService
        .addEmployee(this.employeeData)
        .subscribe((res) => {
          this.initialiseForm();    
          this.successfullAdd()     
        });
    } else {
      this.employeeService
        .updateEmployee(this.employeeData)
        .subscribe((res) => {
          this.initialiseForm();
        });
    }

  }
  successfullAdd(){  
    Swal.fire(
      'Success!',
      'Added Successfully!',
     
    ).then(res => this.router.navigate(['/employeelist']))   
  }






//   cancel(){
//     this.router.navigate(['/employeelist'])
// }
// onSubmit(){
// 	this.employeeService.addEmployee(this.employeeForm.value) 
// 	this.router.navigate(['/employeelist'])
// 	}
}

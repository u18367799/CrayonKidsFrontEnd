import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClassTypeService } from 'src/app/services/class-type.service';
import { ClassType } from 'src/app/shared/class-type';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-class-type',
  templateUrl: './add-class-type.component.html',
  styleUrls: ['./add-class-type.component.css']
})
export class AddClassTypeComponent implements OnInit {

  classTypeData: ClassType
  classTypeList: ClassType[];
  classTypeForm: FormGroup;

  
  constructor(private classTypeService: ClassTypeService, private router: Router) { }

  ngOnInit(): void {
    this.initialiseForm()
    this.classTypeForm = new FormGroup({  
      Grade: new FormControl('', [Validators.required, Validators.max(100), Validators.min(0)])     
    }
    )
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.classTypeForm.controls[controlName].hasError(errorName);
  }
  
  initialiseForm() {
    this.classTypeData = {
      Class_Type_ID: 0,
      Grade: 0
    };
    this.classTypeList = [];
  }


  onSubmit() {
    if (this.classTypeData.Class_Type_ID === 0) {
      this.classTypeService
        .addClassType(this.classTypeData)
        .subscribe((res) => {
          this.initialiseForm(); 
          this.successfullAdd()        
        });
    } else {
      this.classTypeService
        .updateClassType(this.classTypeData)
        .subscribe((res) => {
          this.initialiseForm();
        });
    }

  }
  successfullAdd(){  
    Swal.fire(
      'Success!',
      'Added Successfully!',
     
    ).then(res => this.router.navigate(['/classtypelist']))   
  }


}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassTypeService } from 'src/app/services/class-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-class-type',
  templateUrl: './update-class-type.component.html',
  styleUrls: ['./update-class-type.component.css']
})
export class UpdateClassTypeComponent implements OnInit {

  Class_Type_ID: any
  classTypeDetails;
  classTypeForm: FormGroup = new FormGroup({})
  constructor(public classTypeService: ClassTypeService, private router: Router,  private activeRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
    this.activeRoute.params.subscribe(data => {
      this.Class_Type_ID = data['id']
    });
    if(this.Class_Type_ID !== ''){
      this.classTypeService.viewClassType(this.Class_Type_ID)
      .subscribe(data => {
        this.classTypeDetails = data;
        Object.assign(this.classTypeDetails, data)
        
        this.classTypeForm = this.formBuilder.group({
    Grade: new FormControl('', [Validators.required, Validators.max(100), Validators.min(0)])  

        })
      })
    }

  }
  updateClassType(){
   this.classTypeService.updateClassType(this.classTypeService.classTypeData).subscribe(data => {
    this.successUpdate()  
   })
  }
  successUpdate(){  
    Swal.fire(
      'Success!',
      'Updated Successfully!',     
    ).then(res => this.router.navigate(['/classtypelist']))   
  }
}
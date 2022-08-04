import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentService } from 'src/app/services/parent.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-parent',
  templateUrl: './update-parent.component.html',
  styleUrls: ['./update-parent.component.css']
})
export class UpdateParentComponent implements OnInit {

  Parent_Guardian_ID: any
  parentDetails;
  parentForm: FormGroup = new FormGroup({})
  constructor(public parentService: ParentService, private router: Router,  private activeRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
    this.activeRoute.params.subscribe(data => {
      this.Parent_Guardian_ID = data['id']
    });
    if(this.Parent_Guardian_ID !== ''){
      this.parentService.viewParent(this.Parent_Guardian_ID)
      .subscribe(data => {
        this.parentDetails = data;
        Object.assign(this.parentDetails, data)
        
        this.parentForm = this.formBuilder.group({
          "Parent_Name": new FormControl(this.parentDetails.Parent_Name, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[A-Za-z]+$/)]),
          "Parent_Surname": new FormControl(this.parentDetails.Parent_Surname, [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]), 
          "Parent_Email_Address": new FormControl('', [Validators.required, Validators.email]),
          "Parent_Contact_No": new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.maxLength(10), Validators.minLength(10)]),  
        })
      })
    }

  }
  updateParent(){
   this.parentService.updateParent(this.parentService.parentData).subscribe(data => {
    this.successUpdate()  
   })
  }
  successUpdate(){  
    Swal.fire(
      'Success!',
      'Updated Successfully!',     
    ).then(res => this.router.navigate(['/parentlist']))   
  }
}

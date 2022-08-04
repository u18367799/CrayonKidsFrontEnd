import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParentService } from 'src/app/services/parent.service';
import { Parent } from 'src/app/shared/parent';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-parent-details',
  templateUrl: './add-parent-details.component.html',
  styleUrls: ['./add-parent-details.component.css']
})
export class AddParentDetailsComponent implements OnInit {

  parentData: Parent
  parentList: Parent[];
  addUpdate;
  parentForm: FormGroup;

  
  constructor(private parentService: ParentService, private router: Router) { }

  ngOnInit(): void {
    this.initialiseForm()
    this.parentForm = new FormGroup({  
      Name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]),
      surname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]),    
      email: new FormControl('', [Validators.required, Validators.email]),
      contactNr: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),      
    }
    )
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.parentForm.controls[controlName].hasError(errorName);
  }
  
  initialiseForm() {
    this.parentData = {
      Parent_Guardian_ID: 0,
      Parent_Name: '',
      Parent_Surname: '',
      Parent_Contact_No: '',
      Parent_Email_Address: '',
    };
    this.parentList = [];
    this.addUpdate = 'Add parent';
  }


  onSubmit() {
    if (this.parentData.Parent_Guardian_ID === 0) {
      this.parentService
        .addParent(this.parentData)
        .subscribe((res) => {
          this.initialiseForm(); 
          this.successfullAdd()        
        });
    } else {
      this.parentService
        .updateParent(this.parentData)
        .subscribe((res) => {
          this.initialiseForm();
        });
    }

  }
  successfullAdd(){  
    Swal.fire(
      'Success!',
      'Added Successfully!',
     
    ).then(res => this.router.navigate(['/parentlist']))   
  }



}

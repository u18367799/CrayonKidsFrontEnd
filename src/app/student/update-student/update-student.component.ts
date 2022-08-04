import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentService } from 'src/app/services/parent.service';
import { StudentService } from 'src/app/services/student.service';
import { Parent } from 'src/app/shared/parent';
import { Student } from 'src/app/shared/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  parents: Parent[]
  Student_ID: any
  studentDetails;
  studentForm: FormGroup = new FormGroup({})
  constructor(public studentService: StudentService, public parentService: ParentService, private router: Router,  private activeRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
   
    this.activeRoute.params.subscribe(data => {
      this.Student_ID = data['id']
    });
    if(this.Student_ID !== ''){
      this.studentService.viewStudent(this.Student_ID)
      .subscribe(data => {
        this.studentDetails = data;
        Object.assign(this.studentDetails, data)
        
        this.studentForm = this.formBuilder.group({
          "Student_Name": new FormControl(this.studentDetails.Student_Name, [Validators.required, Validators.maxLength(10), Validators.pattern(/^[A-Za-z]+$/)]),
          "Student_Surname": new FormControl(this.studentDetails.Student_Surname, [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]), 
          "Student_Grade": new FormControl(this.studentDetails.Student_Grade, [Validators.required, Validators.max(100), Validators.min(0)]), 
          "Parent_Guardian_ID": new FormControl(this.studentDetails.Parent_Guardian_ID)   
        })
      })
    }

  }
  updateStudent(){
   this.studentService.updateStudent(this.studentService.studentData).subscribe(data => {
    this.successUpdate()  
   })
  }
  getParents(){
    this.parentService
    .getParent()
    .then((res) => {(this.parents = res as Parent[]), console.log(this.parents)});
  }
  successUpdate(){  
    Swal.fire(
      'Success!',
      'Updated Successfully!',     
    ).then(res => this.router.navigate(['/studentlist']))   
  }

}

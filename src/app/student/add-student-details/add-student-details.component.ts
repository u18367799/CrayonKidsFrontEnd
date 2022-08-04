import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ParentService } from 'src/app/services/parent.service';
import { StudentService } from 'src/app/services/student.service';
import { Parent } from 'src/app/shared/parent';
import { Student } from 'src/app/shared/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-student-details',
  templateUrl: './add-student-details.component.html',
  styleUrls: ['./add-student-details.component.css']
})
export class AddStudentDetailsComponent implements OnInit {

  
  studentData: Student
  studentList: Student[];
  addUpdate;
  studentForm: FormGroup;
  parents: Parent[]
  selectedN: number;
  selected = 'Gauteng';
  constructor(private studentService: StudentService, public parentService: ParentService, private router: Router) { }

  ngOnInit(): void {
    this.initialiseForm()
    this.studentForm = new FormGroup({  
      Name: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]),
      surname: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[A-Za-z]+$/)]),    
      grade: new FormControl('', [Validators.required, Validators.max(100), Validators.min(0)])
      // parent: new FormControl('', [Validators.required, Validators.min(1)]),      
    }
    );
    this.getParents();
    this.selectedN =1;
  }
  getID(id){
    localStorage['ParentID'] = id
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.studentForm.controls[controlName].hasError(errorName);
  }
  getParents(){
    this.parentService
    .getParent()
    .then((res) => {(this.parents = res as Parent[]), console.log(this.parents)});
  }

  
  initialiseForm() {
    this.studentData = {
      Student_ID: 0,
      Student_Name: '',
      Student_Surname: '',
      Student_Grade: 0,
      Parent_Guardian_ID: 1
    };
    this.studentList = [];
    this.addUpdate = 'Add Student';
  }


  onSubmit() {
    if (this.studentData.Student_ID === 0) {
      this.studentService
        .addStudent(this.studentData)
        .subscribe((res) => {
          this.initialiseForm(); 
          this.successfullAdd()  
          console.log(res)      
        });
    } 
    // else {
    //   this.studentService
    //     .updateStudent(this.studentData)
    //     .subscribe((res) => {
    //       this.initialiseForm();
    //     });
    // }

  }
  successfullAdd(){  
    Swal.fire(
      'Success!',
      'Added Successfully!',
     
    ).then(res => this.router.navigate(['/studentlist']))   
  }



}

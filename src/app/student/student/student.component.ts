import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/shared/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  Student: any; 
  // studentData: Student

  public displayedColumns = ['Name', 'Surname', 'Grade', 'Parent Name', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Student>();
	constructor(private studentService: StudentService, private router: Router) {}

	 ngOnInit(): void{ 
    this.getStudents();

  }
  getStudents(){
    this.studentService
    .getStudents()
    .then((res) => {(this.dataSource.data = res as Student[]), console.log(this.dataSource.data)});
  }
  search(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value
  }
  deleteStudent(){
    this.studentService.deleteStudent(localStorage['Student_ID']).subscribe((res) => {
      location.reload()
    })
  }
  getID(id){
    localStorage['Student_ID'] = id
    this.confirmDelete(id)
  }
  setEditID(id){
    localStorage['Student_ID'] = id
    this.router.navigate(["/updatestudent/" +id]);
  }
  editStudent(id: number,p: Student) {
    this.studentService.studentData = p;
    console.log(p)
    localStorage['Student_ID'] = id
    this.router.navigate(["/updatestudent/" +id]);
    // this.router.navigate(['/updatestudent'])
    
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
        this.studentService.deleteStudent(id).subscribe((res) => {
          this.deleteStudent()
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

}

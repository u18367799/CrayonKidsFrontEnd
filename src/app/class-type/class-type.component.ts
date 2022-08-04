import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ClassTypeService } from '../services/class-type.service';
import { ClassType } from '../shared/class-type';

@Component({
  selector: 'app-class-type',
  templateUrl: './class-type.component.html',
  styleUrls: ['./class-type.component.css']
})
export class ClassTypeComponent implements OnInit {


  classTypes;
  classTypeData: ClassType;
  classTypeList: ClassType[];
  addOrUpdate: string

  public displayedColumns = ['Grade', 'update', 'delete'];
  public dataSource = new MatTableDataSource<ClassType>();
  constructor(public service: ClassTypeService, private router: Router) { }

  ngOnInit(): void {
    this.getClassTypes();
  }

  getClassTypes(){
    this.service
    .getClassTypes()
    .then((res) => {(this.dataSource.data = res as ClassType[]), console.log(this.dataSource.data)});
  }
 search(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value
  }
  deleteClassType(){
    this.service.deleteClassType(localStorage['Class_Type_ID']).subscribe((res) => {
      this.getClassTypes();
    })
  }
 
  getID(id){
    localStorage['Class_Type_ID'] = id
    this.confirmDelete(id)
  }

  editClassType(id: number,p: ClassType) {
    this.service.classTypeData = p;
    localStorage['Class_Type_ID'] = id
    this.router.navigate(["/updateclasstype/" +id]);
    
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
        this.service.deleteClassType(id).subscribe((res) => {
          this.deleteClassType()
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



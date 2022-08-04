import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ParentService } from '../services/parent.service';
import { Parent } from '../shared/parent';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  parent: any; 
  parentData: Parent

  public displayedColumns = ['Name', 'Surname', 'Contact No', 'Email Address', 'update', 'delete'];
  public dataSource = new MatTableDataSource<Parent>();
	constructor(private parentService: ParentService, private router: Router) {}

	 ngOnInit(): void{ 
    this.getParents();

  }
  getParents(){
    this.parentService
    .getParent()
    .then((res) => {(this.dataSource.data = res as Parent[]), console.log(this.dataSource.data)});
  }
  search(event: Event) {
    this.dataSource.filter = (event.target as HTMLInputElement).value
  }
  deleteParent(){
    this.parentService.deleteParent(localStorage['Parent_Guardian_ID']).subscribe((res) => {
      location.reload()
    })
  }
  getID(id){
    localStorage['Parent_Guardian_ID'] = id
    this.confirmDelete(id)
  }
  setEditID(id){
    localStorage['Parent_Guardian'] = id
    this.router.navigate(["/updateparent/" +id]);
  }

  editParent(id: number,p: Parent) {
    this.parentService.parentData = p;
    localStorage['Parent_Guardian_ID'] = id
    this.router.navigate(["/updateparent/" +id]);
    
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
        this.parentService.deleteParent(id).subscribe((res) => {
          this.deleteParent()
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
  // editEmployee(emp: Parent) {
  //   this.employeeData = emp;
  //   // this.cusButtonText = 'Update Category';
    
  // }


}

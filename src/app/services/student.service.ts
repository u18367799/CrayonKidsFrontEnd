import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from '../shared/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url = "https://localhost:44359/api";

  studentData: Student
  constructor(private http: HttpClient) { }

  getStudents() {
    return this.http.get(this.url+ '/Students/getStudents').toPromise();
  }

  addStudent(obj: Student) {
    return this.http.post(this.url + '/Students', obj);
  }

  updateStudent(obj: Student) {
    return this.http.put(this.url+ '/Students/' + localStorage['Student_ID'], obj);
  }

  deleteStudent(id: number) {
    return this.http.delete(this.url + '/Students/' + localStorage['Student_ID']);
  }
  viewStudent(id: string) {
    return this.http.get(this.url + '/Students/' + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClassType } from '../shared/class-type';

@Injectable({
  providedIn: 'root'
})
export class ClassTypeService {
  url = "https://localhost:44359/api";
  classTypeData: ClassType;
  classTypeList: ClassType[];


  constructor(private http: HttpClient) { }
  getClassTypes() {
    return this.http.get(this.url + '/Class_Type').toPromise();
  }

  addClassType(obj: ClassType) {
    return this.http.post(this.url + '/Class_Type', obj);
  }

  updateClassType(obj: ClassType) {
    return this.http.put(this.url + '/Class_Type/' + obj.Class_Type_ID, obj);
  }

  deleteClassType(id: number) {
    return this.http.delete(this.url + '/Class_Type/' + localStorage['Class_Type_ID']);
  }
  viewClassType(id: string) {
    return this.http.get(this.url + '/Class_Type/' + id);
  }

}

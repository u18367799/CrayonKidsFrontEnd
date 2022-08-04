import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parent } from '../shared/parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {

  url = "https://localhost:44359/api";

  parentData: Parent
  constructor(private http: HttpClient) { }

  getParent() {
    return this.http.get(this.url+ '/Parent_Guardian').toPromise();
  }

  addParent(obj: Parent) {
    return this.http.post(this.url + '/Parent_Guardian', obj);
  }

  updateParent(obj: Parent) {
    return this.http.put(this.url+ '/Parent_Guardian/' + localStorage['Parent_Guardian_ID'], obj);
  }

  deleteParent(id: number) {
    return this.http.delete(this.url + '/Parent_Guardian/' + localStorage['Parent_Guardian_ID']);
  }
  viewParent(id: string) {
    return this.http.get(this.url + '/Parent_Guardian/' + id);
  }

}

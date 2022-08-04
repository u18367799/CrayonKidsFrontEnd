import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Allergy } from '../shared/allergy';

@Injectable({
  providedIn: 'root'
})
export class AllergyService {
  
  constructor() { 
    if(!localStorage.getItem('allergies')){
      let allergies = [{
        "id": 1,
        "allergyDetails": "Peanuts",
        "allergyDate": "2022/05/03"
      }]
      localStorage.setItem('allergies', JSON.stringify(allergies))
    }
  }

  getAllergies(){
    let allergies: [];
    if(localStorage.getItem('allergies')){
      allergies = JSON.parse(localStorage.getItem('allergies')!);
    }

    let subject = new Subject();
    setTimeout(() => {subject.next(allergies);
    subject.complete();}, 1000)
    return subject;
  }

  getAllergy(id: Number){
    let allergies: Allergy[] = [];

    if(localStorage.getItem('allergies')){
      allergies = JSON.parse(localStorage.getItem('allergies')!)
    }

    return allergies.find(allergy => allergy.id === id)
  }

  addAllergy(allergy: Allergy){
    
    let allergies: Allergy[] = []

    if(localStorage.getItem('allergies')){
      allergies = JSON.parse(localStorage.getItem('allergies')!)
    }

    let id = allergies.length + 1
    allergy.id = id
    allergies.push(allergy)
    localStorage.setItem('allergies', JSON.stringify(allergies))
  }

  deleteAllergy(id: number){
    let allergies: Allergy[] = []

    if(localStorage.getItem('allergies')){
      allergies = JSON.parse(localStorage.getItem('allergies')!)
    }
    let allergy = allergies.find(allergy => allergy.id === id)

    if(allergy){
      allergies.splice(id - 1, 1)
      localStorage.setItem('allergies', JSON.stringify(allergies))
    }
  }
}

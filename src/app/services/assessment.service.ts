import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Assessment } from '../shared/assessment';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor() { 
    
    if(!localStorage.getItem('assessments')){
      let assessments = [{
        "id": 1,
        "details": "Abacus Counting" 
        }]
        localStorage.setItem('assessments', JSON.stringify(assessments))
     }
  }

  getAssessments(){
    let assessments:[]
    if (localStorage.getItem('assessments'))
    {
      assessments = JSON.parse(localStorage.getItem('assessments')!)
    }
    let subject = new Subject()
    setTimeout(() => {subject.next(assessments); subject.complete();},1000)
    return subject
    }



    getAssessment(id: number){
      let assessments: Assessment[] = []
      
	if(localStorage.getItem('assessments')){
	  assessments = JSON.parse(localStorage.getItem('assessments')!)
	 }
	return assessments.find(assessment => assessment.id === id)
    }

    addAssessment(assessment:Assessment){
    let assessments: Assessment[] = []
    if (localStorage.getItem('assessments'))
    {
      assessments = JSON.parse(localStorage.getItem('assessments')!)
    }
    let id = assessments.length + 1
    assessment.id = id
    assessments.push(assessment)
    localStorage.setItem('assessments', JSON.stringify(assessments))

  }
  deleteAssessment(id: number){
    let assessments: Assessment[] = []

    if(localStorage.getItem('assessments')){
      assessments = JSON.parse(localStorage.getItem('assessments')!)
    }
    let assessment = assessments.find(assessment => assessment.id === id)

    if (assessment){
      assessments.splice(id - 1, 1)
      localStorage.setItem('assessments', JSON.stringify(assessments))
    }
  }
}

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs';
import { AssessmentService } from './assessment.service';

@Injectable({
  providedIn: 'root'
})

  export class AssessmentResolverService implements Resolve<any>{

    constructor(private assessmentService: AssessmentService) { }
  
    resolve() {
      return this.assessmentService.getAssessments().pipe(map((assessments) => assessments))
    }
  }


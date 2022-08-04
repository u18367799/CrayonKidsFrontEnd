import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssessmentService } from '../services/assessment.service';
import { Assessment } from '../shared/assessment';
@Component({
  selector: 'app-assessments',
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.css']
})
export class AssessmentsComponent implements OnInit {
     
  assessments: any

  constructor(private route2: ActivatedRoute, private assessmentService : AssessmentService) { }

  ngOnInit(): void {
    this.assessments = this.assessmentService.getAssessments().subscribe(assessments => {this.assessments = assessments})
   //this.assessments = this.route2.snapshot.data['assessments']
  }
  deleteAssessment(id:number){
    this.assessmentService.deleteAssessment(id)
    location.reload()
  }
}

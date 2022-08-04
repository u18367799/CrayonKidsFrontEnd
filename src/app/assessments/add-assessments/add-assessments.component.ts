import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AssessmentService } from 'src/app/services/assessment.service';

@Component({
  selector: 'app-add-assessments',
  templateUrl: './add-assessments.component.html',
  styleUrls: ['./add-assessments.component.css']
})
export class AddAssessmentsComponent implements OnInit {
  assessmentForm = new FormGroup({
    details:new FormControl(''),
  })


  constructor(private assessmentService: AssessmentService, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.assessmentService.addAssessment(this.assessmentForm.value) 
    this.router.navigate(['/assessmentList'])
    }
}

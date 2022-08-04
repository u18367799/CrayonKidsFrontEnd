import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllergyService } from 'src/app/services/allergy.service';

@Component({
  selector: 'app-add-allergy',
  templateUrl: './add-allergy.component.html',
  styleUrls: ['./add-allergy.component.css']
})
export class AddAllergyComponent implements OnInit {

  allergyForm = new FormGroup({
    allergyDetails: new FormControl(''),
    allergyDate: new FormControl(''),
  })

  constructor(private allergyService: AllergyService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //this.allergy = this.allergyService.getAllergy(+this.activatedRoute.snapshot.params['id'])
  }

  cancel(){
    this.router.navigate(['/allergylist'])
  }

  onSubmit(){
    this.allergyService.addAllergy(this.allergyForm.value)
    console.log(this.allergyService.addAllergy(this.allergyForm.value))
    this.router.navigate(['/allergylist'])
  }
}

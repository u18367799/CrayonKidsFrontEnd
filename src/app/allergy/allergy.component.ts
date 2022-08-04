import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllergyService } from '../services/allergy.service';

@Component({
  selector: 'app-allergy',
  templateUrl: './allergy.component.html',
  styleUrls: ['./allergy.component.css']
})
export class AllergyComponent implements OnInit {

  allergies: any

  constructor(private allergyService: AllergyService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.allergies = this.allergyService.getAllergies().subscribe(allergies => {this.allergies = allergies})
   
  }

  deleteAllergy(id: number){
    this.allergyService.deleteAllergy(id)
    location.reload()
  }

}

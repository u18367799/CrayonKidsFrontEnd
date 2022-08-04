import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { map } from 'rxjs';
import { AllergyService } from './allergy.service';

@Injectable({
  providedIn: 'root'
})
export class AllergyResolverService implements Resolve<any> {

  constructor(private alleergyService: AllergyService) { }

  resolve() {
    return this.alleergyService.getAllergies().pipe(map((allergies) => allergies))
  }
}

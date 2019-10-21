import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountryService } from 'src/app/shared/country.service';
import { Country } from '../../country';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  private country: Country;
  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit() {
    this.country = this.countryService.getter();
  }

  createOrUpdate(){
    if(this.country._id == undefined){
      this.countryService.createCountry(this.country).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/list']);
          console.log("Submitted");
        },
        error => {
          console.log(error);
        }
      )
    } else {
      this.countryService.updateCountry(this.country).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/list']);
          console.log("Updated");
        },
        error => {
          console.log(error);
        }
      )
    }
  }

}

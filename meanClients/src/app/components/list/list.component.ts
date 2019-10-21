import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { Country } from '../../country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private countries: Country[];

  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit() {
    this.readCountries();
  }

  //get all list
  readCountries() {
    this.countryService.readCountries().subscribe(
      data => {
        this.countries = data['msg'];
        console.log(this.countries);
      },
      error => {
        console.log(error);
      }
    )
  }

  //update method by _id
  doUpdate(country) {
    this.countryService.setter(country);
    this.router.navigate(['/createUpdate']);
  }

  //delete list item by _id
  doDelete(country) {
    this.countryService.deleteCountry(country._id).subscribe(
      data => {
        // this.countries.splice(this.countries.indexOf(country),1)
        if (confirm("Are you sure to Delete")) {
          this.countries.splice(this.countries.indexOf(country), 1)
        }
      },
      error => {
        console.log(error);
      }
    )
  }


}

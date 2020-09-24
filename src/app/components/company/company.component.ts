import { Component, OnInit } from '@angular/core';
import { CompanyDto } from '../../dto/company.dto';
import { CompanyService } from '../../providers/company.service';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {



  public companies: CompanyDto[];
  company: CompanyDto = new CompanyDto()

  constructor(private CompanyService: CompanyService) { }

  ngOnInit(): void { this.getCompanyDetails(); }

  getCompanyDetails() {
    this.CompanyService.getCompanyDetails()
      .then(data => { this.companies = data },
        (err) => {
          console.log("error");

        });
  }


  deleteCompany(code: string) {


    //function to remove company 
    this.companies = this.companies.filter(function (company) {
      if (company.coCode !== code) {
        return true;
      }
      else {
        return false;
      }
    })


    this.CompanyService.deleteCompany(code)
      .then(data => { console.log(`deleted ${Object.entries(data)} successfully`) },
        (err) => {
          console.log(`error`);
        });

  }

}

import { Component, OnInit } from '@angular/core';
import { CompanyDto } from '../../../dto/company.dto';
import { CompanyService } from '../../../providers/company.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-add-or-update',
  templateUrl: './add-or-update.component.html',
  styleUrls: ['./add-or-update.component.css'],
  providers: [MessageService]
})
export class AddOrUpdateComponent implements OnInit {

  public company: CompanyDto = new CompanyDto();

  warning: boolean = false;
  updatable: boolean = false;
  // addSuccessMessage: boolean = false;
  // updateSuccessMessage: boolean = false;
  constructor(private CompanyService: CompanyService, private route: ActivatedRoute, private datePipe: DatePipe, private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.getSingleCompany();
  }

  getSingleCompany() {


    const id = this.route.snapshot.paramMap.get('coCode');
    console.log(`the id to be updated is ${id}`)
    if (id !== null) {
      this.updatable = true;
      this.CompanyService.getSingleCompany(id)
        .then(data => {
          console.log(data)
          data.modiCloseDate = new Date(this.datePipe.transform(data.modiCloseDate, 'yyyy-MM-dd'));
          if (data.yrSDt) {

            data.yrSDt = new Date(this.datePipe.transform(data.yrSDt, 'yyyy-MM-dd'));
          }
          if (data.yrEDt) {
            data.yrEDt = new Date(this.datePipe.transform(data.yrEDt, 'yyyy-MM-dd'));

          }
          this.company = data;
        },
          (err) => {
            console.log(`error`);
          })
    }
    else return;

  }

  addNewCompany() {
    if (this.company.coCode == null || this.company.coName == null || this.company.coShName == null || this.company.modiCloseDate == null || this.company.moduleType == null || this.company.coCode == "" || this.company.coName == "" || this.company.coShName == "" || this.company.modiCloseDate == null || this.company.moduleType == "") {
      console.log(`enter the required fields`);
      this.warning = true;
    }

    else {
      if (this.company.yrSDt) { this.company.yrSDt = new Date(this.datePipe.transform(this.company.yrSDt, 'yyyy-MM-dd')); }
      if (this.company.yrEDt) { this.company.yrEDt = new Date(this.datePipe.transform(this.company.yrEDt, 'yyyy-MM-dd')); }

      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Company added' });


      this.company.modiCloseDate = new Date(this.datePipe.transform(this.company.modiCloseDate, 'yyyy-MM-dd'));
      // this.addSuccessMessage = true;
      // setTimeout(() => {
      //   this.addSuccessMessage = false;
      // }, 2000)

      this.warning = false;
      this.CompanyService.addNewCompany(this.company)
        .then(data => { console.log(Object.entries(data)); },
          (err) => {
            console.log(`error`);
          });
    }
  }


  updateCompany() {
    console.log(`the company to be updated is `)
    console.log(this.company.coCode);
    if (this.company.coCode == null || this.company.coName == null || this.company.coShName == null || this.company.modiCloseDate == null || this.company.moduleType == null || this.company.coCode == "" || this.company.coName == "" || this.company.coShName == "" || this.company.modiCloseDate == null || this.company.moduleType == "") {
      console.log(`enter the required fields`);
      this.warning = true;
    }
    else {

      this.warning = false;
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Company updated' });

      if (this.company.yrSDt) { this.company.yrSDt = new Date(this.datePipe.transform(this.company.yrSDt, 'yyyy-MM-dd')); }
      if (this.company.yrEDt) { this.company.yrEDt = new Date(this.datePipe.transform(this.company.yrEDt, 'yyyy-MM-dd')); }

      this.company.modiCloseDate = new Date(this.datePipe.transform(this.company.modiCloseDate, 'yyyy-MM-dd'));
      // this.updateSuccessMessage = true;
      // setTimeout(() => {
      //   this.updateSuccessMessage = false;
      // }, 2000)


      this.CompanyService.updateCompany(this.company.coCode, this.company)
        .then(data => {
          console.log(`the upadted company is`)
          console.log(Object.entries(data));
        },
          (err) => {
            console.log(`error`);
          })
    }
  }




}

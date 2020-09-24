import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CompanyDto } from '../dto/company.dto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }


private company_url=`${environment.base_url}/ico`;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };



 async getCompanyDetails():  Promise<CompanyDto[]> {
    return this.http.get<CompanyDto[]>(this.company_url).toPromise();
  }



  async deleteCompany(code:string):Promise<CompanyDto>{
    return this.http.delete<CompanyDto>(`${this.company_url}/${code}`).toPromise();
  }


  // async getData(): Promise<IccountryDto[]> {
  //   return this.http.get<IccountryDto[]>(`${environment.apiUrl}/${'country'}`).toPromise();
  // }

  async addNewCompany(newCompany):Promise<CompanyDto>{
   return this.http.post<CompanyDto>(this.company_url,newCompany,this.httpOptions).toPromise(); 
  }

  getSingleCompany(code):Promise<CompanyDto>{


    return this.http.get<CompanyDto>(`${this.company_url}/${code}`).toPromise();

  }

  updateCompany(code,updatedCompany):Promise<CompanyDto>{
    return this.http.put<CompanyDto>(`${this.company_url}/${code}`,updatedCompany,this.httpOptions).toPromise();
  }

}

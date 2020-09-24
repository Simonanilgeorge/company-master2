import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CompanyComponent } from './components/company/company.component';
import {AddOrUpdateComponent} from './components/company/add-or-update/add-or-update.component';

const routes: Routes = [
  {path:'',pathMatch:'full',component:CompanyComponent},
  {path:'addcompany',component:AddOrUpdateComponent},
  {path:'updatecompany/:coCode',component:AddOrUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents=[CompanyComponent,AddOrUpdateComponent];
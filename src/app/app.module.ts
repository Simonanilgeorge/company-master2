import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }   from './app.component';

import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AccordionModule} from 'primeng/accordion';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {TabViewModule} from 'primeng/tabview';

import {ToolbarModule} from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';

// import { CompanyComponent } from './components/company/company.component';
// import { AddOrUpdateComponent } from './components/company/add-or-update/add-or-update.component';
import { DatePipe } from '@angular/common';
import { AppRoutingModule,routingComponents} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // CompanyComponent,
    // AddOrUpdateComponent,
    

 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    RippleModule,
  
    DialogModule,
    ButtonModule,
    FormsModule,
		CheckboxModule,
		RadioButtonModule,
		InputTextareaModule,
    DropdownModule,
    AccordionModule,
    CalendarModule,
    TableModule,
    ToolbarModule,
    HttpClientModule,
    AppRoutingModule,
    ToastModule
    
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

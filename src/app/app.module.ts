import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

//custom made pipe
import { SearchFilterPipe } from './pipes/searchFilter';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

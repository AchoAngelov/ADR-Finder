import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AdrService } from './adr.service';
import { AddAdrComponent } from './add-adr/add-adr.component';
import { AdrRoutingModule } from './adr-routing.module';
import { AdrListComponent } from './adr-list/adr-list.component';



@NgModule({
  declarations: [
    AdrListComponent,
    AddAdrComponent
  ],
  imports: [
    CommonModule,
    AdrRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    AdrService
  ],
})
export class AdrModule { }

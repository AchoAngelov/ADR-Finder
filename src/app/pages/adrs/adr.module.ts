import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdrService } from './adr.service';
import { AdrInfoComponent } from './adr-info/adr-info.component';



@NgModule({
  declarations: [AdrInfoComponent],
  imports: [
    CommonModule
  ],
  providers: [
    AdrService
  ],
})
export class AdrModule { }

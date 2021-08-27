import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from './user/user.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AdrListComponent } from './pages/adrs/adr-list/adr-list.component';
import { CategoryModule } from './pages/categories/category.module';
import { AdrModule } from './pages/adrs/adr.module';
import { CategoryService } from './pages/categories/category.service';
import { AdrService } from './pages/adrs/adr.service';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    AdrListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoryModule,
    AdrModule,
    UserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    CategoryService,
    AdrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

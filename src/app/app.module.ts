import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { AdrListComponent } from './pages/adrs/adr-list/adr-list.component';
import { CategoryModule } from './pages/categories/category.module';
import { AdrModule } from './pages/adrs/adr.module';
import { CategoryService } from './pages/categories/category.service';
import { AdrService } from './pages/adrs/adr.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    CategoryListComponent,
    AdrListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CategoryModule,
    AdrModule
  ],
  providers: [
    CategoryService,
    AdrService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

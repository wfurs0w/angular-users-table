import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DevExtremeModule } from 'devextreme-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { AboutComponent } from './pages/about/about.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TablePageComponent,
    AboutComponent,
    UsersTableComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DevExtremeModule,
    NgbModule
  ],
  exports: [
    TablePageComponent,
    UsersTableComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

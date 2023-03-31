import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TablePageComponent } from './pages/table-page/table-page.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'table', component: TablePageComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

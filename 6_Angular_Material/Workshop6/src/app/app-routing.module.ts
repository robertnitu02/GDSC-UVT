import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AboutPageComponent} from "./about-page/about-page.component";

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: AppComponent, pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent, pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

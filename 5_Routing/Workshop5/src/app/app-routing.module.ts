import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ContactIdPageComponent } from './contact-id-page/contact-id-page.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, pathMatch: 'full' },
  {
    path: 'about',
    children: [
      { path: '', component: AboutPageComponent, pathMatch: 'full' },
      { path: 'contact', component: ContactPageComponent, pathMatch: 'full' },
      {
        path: 'contact/:id',
        component: ContactIdPageComponent,
        pathMatch: 'full',
      },
    ],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

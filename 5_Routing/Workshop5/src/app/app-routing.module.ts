import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { ContactIdPageComponent } from './contact-id-page/contact-id-page.component';
import { VerifyPageComponent } from './verify-page/verify-page.component';
import { TestGuardGuard } from './test-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    pathMatch: 'full',
    canActivate: [TestGuardGuard],
  },
  {
    path: 'about',
    children: [
      {
        path: '',
        component: AboutPageComponent,
        pathMatch: 'full',
        canActivate: [TestGuardGuard],
      },
      {
        path: 'contact',
        component: ContactPageComponent,
        pathMatch: 'full',
        canActivate: [TestGuardGuard],
      },
      {
        path: 'contact/:id',
        component: ContactIdPageComponent,
        pathMatch: 'full',
        canActivate: [TestGuardGuard],
      },
    ],
  },
  { path: 'verify', component: VerifyPageComponent },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

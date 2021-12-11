import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemContentComponent } from './item-content/item-content/item-content.component';
import { ScrollThingDirective } from './scroll-thing.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemContentComponent,
    ScrollThingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

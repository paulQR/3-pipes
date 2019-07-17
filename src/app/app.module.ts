import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { LOCALE_ID } from '@angular/core';
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs);

import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, DomseguroPipe ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

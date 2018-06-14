import { AttendantComponent } from './components/attendantcomponent';
import { CustomerComponent } from './components/customercomponent';
import { RequeststateComponent } from './components/requeststatecomponent';
import { RequestTypeComponent } from './components/requesttypecomponent';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RequestTypeComponent,
    RequeststateComponent,
    CustomerComponent,
    AttendantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

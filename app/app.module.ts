import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

//My components
import {HomeComponent} from './components/home/home.component';
import {ProfileComponent} from './components/profile/profile.component';
//End my components

//My routing
import {routing, appRoutingProviders} from './app.routing';
//End my routing

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, ProfileComponent ],
  bootstrap: [ AppComponent ],
  providers: [appRoutingProviders]
})
export class AppModule { }

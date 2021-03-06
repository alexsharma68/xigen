import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { Router } from '@angular/router';
import {HttpModule } from '@angular/http';
import { AppComponent }            from './app.component';
import { HomeComponent }            from './home/home.component';
import { AppRoutingModule }        from './app-routing.module';
import {HomeService} from './common/home.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpModule,
	FormsModule
  ],
  declarations: [
    AppComponent,
	HomeComponent
  ],
	providers: [
    HomeService,HttpModule 
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    //console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

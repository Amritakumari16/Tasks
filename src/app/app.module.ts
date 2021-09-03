import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginLayoutComponent } from './components/login-layout/login-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from "./components/material/material.module";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [AppService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

//the code has reference to different libraries, which are imported. Angular-cli has used these default libraries for the import – angular/core, platform-browser
//declarations − In declarations, the reference to the components is stored. The Appcomponent is the default component that is created whenever a new project is initiated.
//imports − This will have the modules imported. At present, BrowserModule is part of the imports which is imported from @angular/platform-browser.
//providers − This will have reference to the services created. 
//bootstrap − This has reference to the default component created, i.e., AppComponent.
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutes } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { AddPostComponent } from './addpost/addpost.component';
import { ViewPostComponent } from './ViewPost/viewpost.component';
import { CommonService } from '../providers/CommonServiceProvider';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AddPostComponent,
    ViewPostComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }

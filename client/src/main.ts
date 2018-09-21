// main.ts is the file from where we start our project development. It starts with importing the basic module which we need.
// Right now if you see angular/core, angular/platform-browser-dynamic, app.module and environment is imported by default during angular-cli installation and project setup.
//The platformBrowserDynamic().bootstrapModule(AppModule) has the parent module reference AppModule.
//Hence, when it executes in the browser, the file that is called is index.html. 
//Index.html internally refers to main.ts which calls the parent module, i.e., AppModule when the following code executes platformBrowserDynamic().bootstrapModule(AppModule);
//When AppModule is called, it calls app.module.ts which further calls the AppComponent based on the boostrap as follows −bootstrap: [AppComponent]
//In app.component.ts, there is a selector: app-root which is used in the index.html file. This will display the contents present in app.component.html.

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


  
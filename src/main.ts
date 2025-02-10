import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
//import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; //my correct path

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Provide router
    provideHttpClient(withFetch())   // Enable fetch API
  ],
}).catch((err) => console.error(err));

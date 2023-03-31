/// <reference types="@angular/localize" />

import { HttpErrorResponse } from '@angular/common/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: HttpErrorResponse) => console.error(err));

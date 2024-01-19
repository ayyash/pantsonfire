import { APP_ID } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { AppRouterProviders } from './app/routing.module';
import { CoreProviders } from './app/utils/core.providers';

export const appProviders = [
  // pass the routes from existin RouteModule
  { provide: APP_ID, useValue: 'pof' },
  ...CoreProviders,
  ...AppRouterProviders,
  provideClientHydration()

];


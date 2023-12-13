import { HttpContext, HttpContextToken, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, shareReplay } from 'rxjs';
import { LoaderState } from '../lib/loader/loader.state';
import { ConfigService } from '../utils/config.service';
import { catchAppError, debug } from './rxjs.operators';

// if standalone use this instead of http.ts

// create a context token

const LOADING_SOURCE = new HttpContextToken<string>(() => '');

export const applyContext = (src: string) => {
   return { context: new HttpContext().set(LOADING_SOURCE, src) };
};


export const CricketInterceptorFn: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {

   const loaderService = inject(LoaderState);

   if (req.url.indexOf('localdata') > -1) {
      // pass through
      return next(req);
   }
   const url = ConfigService.Config.API.apiRoot + encodeURIComponent(req.url);

   const adjustedReq = req.clone({ url: url });
   loaderService.show(req.context.get(LOADING_SOURCE));

   if (req.body) {
      _debug(req.body, `Request ${req.method} ${req.urlWithParams}`, 'p');
   }

   return next(adjustedReq)
      .pipe(
         shareReplay(),
         finalize(() => {
            loaderService.hide(req.context.get(LOADING_SOURCE));
         }),
         debug(`${req.method} ${req.urlWithParams}`, 'p'),
         catchAppError(`${req.method} ${req.urlWithParams}`)
      );
};

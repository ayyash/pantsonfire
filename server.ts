
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideServerRendering } from '@angular/platform-server';
import { CommonEngine, CommonEngineRenderOptions } from '@angular/ssr';
import 'zone.js';
import { appProviders } from './src/app.config';
import { AppComponent } from './src/app/app.component';
import { environment } from './src/environments/environment';




const _app = () => bootstrapApplication(AppComponent, {
  providers: [
    provideServerRendering(),
    ...appProviders
  ]
});

// create engine
const engine = new CommonEngine({ bootstrap: _app });

// express engine
export function crExpressEgine(
  filePath: string,
  options: object,
  callback: (err?: Error | null, html?: string) => void,
) {
  try {
    // we'll grab the options from external call in express
    const renderOptions = { ...options } as CommonEngineRenderOptions;

    // the url is the only option we should no longer set in Angular, so we'll set in Express route

    // this may be overrwitten, but I don't wish to, it will be the first argument of the express "render"
    renderOptions.documentFilePath = filePath;

    // the options contain settings.view value which is set by app.set('views', 'client'); in Express server
    renderOptions.publicPath = (options as any).settings?.views;

    renderOptions.providers = [...(renderOptions.providers ?? []),
    {
      provide: 'SERVER_URL',
      useValue: renderOptions['serverUrl']
    }];

    // an old feature that was never documented, now it is, inlineCriticalCss

    engine
      .render(renderOptions)
      .then((html) => callback(null, html))
      .catch(callback);
  } catch (err) {
    callback(err);
  }
};

// export AppEngine
if (environment.production) {
  enableProdMode();
}



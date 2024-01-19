import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Config } from '../config';
import { IConfig } from './config.model';


export const configFactory = (config: ConfigService) => () =>
    {
      _seqlog('configFactory');
      return config.loadAppConfig();}

@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    constructor(
        private http: HttpClient,
    ) {
      _seqlog('ConfigService');
    }

    private _getUrl = Config.API.config.local;

    // keep track of config
    private config = new BehaviorSubject<IConfig>(Config as IConfig);
    config$: Observable<IConfig> = this.config.asObservable();

    private static _config: IConfig;

    static get Config(): IConfig {
        return this._config || Config;
    }

    private NewInstance(config: any, withError: boolean): IConfig {
        // cast all keys as are
        const _config = { ...Config, ...<IConfig>config };
        _config.Storage = { ..._config.Storage };
        _config.isServed = true;
        // _config.API.apiRoot = _config.API.apiRoot
        //     .replace(':projectid', Config.Sanity.ProjectId)
        //     .replace(':dataset', Config.Sanity.Dataset);
        _config.withErrors = withError; // so now we can distinguish where the config really came from

        // populate static element
        ConfigService._config = _config;

        this.config.next(_config);
        return _config;
    }

    loadAppConfig(): Observable<boolean> {
        _seqlog('LoadAppConfig');


        return this.http.get(this._getUrl).pipe(
            map((response) => {
                this.NewInstance(response, false);
                // also state that it has been isServed

                _seqlog('config next');

                // here next
                return true;
            }),
            catchError((error) => {
                // if in error, return set fall back from environment
                // make it served, if you want to distinguish error, create another flag
                this.NewInstance(Config, true);
                _debug(error, 'Error in resolve', 'e');
                return of(true);
            })
        );
    }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataCache } from '../data/data.decorator';
import { StorageService } from '../data/storage.service';
import { Content, IContent, } from '../models/content.model';
import { IListOptions } from '../models/list.model';


@Injectable({ providedIn: 'root' })
export class ContentService {

    constructor(private _http: HttpClient,
        public storageService: StorageService) {

    }

    @DataCache({ key: 'list', expiresin: 1 })
    GetContents(options: IListOptions = {}): Observable<IContent[]> {
        const _url = Content.PrepList(options);

        return this._http.get(_url).pipe(
            map(response => {
                return Content.NewInstances(<any>response);
            })
        );

    }

    GetContent(id: string): Observable<IContent> {
        // get all contents first, map, then find match
        return this.GetContents().pipe(
            map(list => {
                return list.find(content => content.slug === id);
            }
            ));
    }

}

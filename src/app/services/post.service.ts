import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataCache } from '../data/data.decorator';
import { StorageService } from '../data/storage.service';
import { IList, IListOptions } from '../models/list.model';
import { IPost, Post, } from '../models/post.model';


@Injectable({providedIn: 'root'})
export class PostService {


    constructor(private _http: HttpClient, public storageService: StorageService) {

    }

    @DataCache({key: 'posts', expiresin: 1, withArgs: true})
    GetPosts(options: IListOptions = {}): Observable<IList<IPost>> {

        const _url = Post.PrepList(options);

        return this._http.get(_url).pipe(
            map(response => {
                return Post.NewList(<any>response);
            })
        );
    }

    // mostly for SEO
    @DataCache({key: 'post', expiresin: 1, withArgs: true})
    GetPost(slug: string): Observable<IPost> {

        const _url = Post.PrepSingle(slug);
        // first get the getposts it might be there

        return this._http.get(_url).pipe(
            map(response => {
                return Post.NewInstance((<any>response).result);
            })
        );
    }


}

import { Injectable } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';
import { Config } from '../config';
import { IPost } from '../models/post.model';
import { Res } from '../utils/resources';
import { Platform } from './platform.service';


@Injectable({
    providedIn: 'root'
})
export class SeoService {

    private _canonicalLink: HTMLLinkElement;


    constructor(
        private title: Title,
        private meta: Meta,
        private platform: Platform
    ) {
        this.AddTags();
    }

    AddTags() {

        // add tags

        this.meta.addTags(Config.Seo.tags, false);

        const _canonical = this.platform.doc.querySelector('link[rel="canonical"]');
        this._canonicalLink = (_canonical as HTMLLinkElement) || this.createCanonicalLink();

    }

    get url(): string {
        let url = this.platform.doc.location.pathname;
        if (url.indexOf(';') > -1) {
            url = url.substring(0, url.indexOf(';'));
        }
        return url;
    }

    private createCanonicalLink(): HTMLLinkElement {

        const _canonicalLink = this.platform.doc.createElement('link');
        _canonicalLink.setAttribute('rel', 'canonical');
        this.platform.doc.head.appendChild(_canonicalLink);
        return _canonicalLink;

    }
    private setUrl() {
        let url = Config.Seo.baseUrl + this.platform.doc.location.pathname;
        if (url.indexOf(';') > -1) {
            url = url.substring(0, url.indexOf(';'));
        }
        this._canonicalLink.setAttribute('href', url);
        this.meta.updateTag({ property: 'og:url', content: url });
    }


    protected setTitle(title: string) {
        const _title = `${title} - ${Res.Get('SITE_NAME')}`;

        this.title.setTitle(_title);
        this.meta.updateTag({ name: 'title', property: 'og:title', content: _title });
        this.meta.updateTag({ property: 'twitter:title', content: _title });

    }
    public setDescription(description: string) {
        this.meta.updateTag({ name: 'description', property: 'og:description', content: description });
    }
    public setImage(imageUrl?: string) {
        // prepare image, either passed or
        const _imageUrl = imageUrl || (Config.Seo.defaultImage);

        this.meta.updateTag({ name: 'image', property: 'og:image', content: _imageUrl });
        this.meta.updateTag({ property: 'twitter:image', content: _imageUrl });

    }

    setPage(key: string) {
        // set generic page title (brought from data)
        const pageKey = Res.Get('PAGE_TITLES') || {};
        const _title = pageKey[key] || Res.Get('DEFAULT_PAGE_TITLE');
        this.setTitle(_title);
    }

    setPost(post: IPost, desc: string) {
        this.setTitle(post.title);
        this.setDescription(desc);
        this.setImage(post.image);
        this.setUrl();
    }

    setHome() {
        this.setDescription(Res.Get('HOME_DESCRIPTION'));
        this.setImage();
        this.setUrl();
    }

}

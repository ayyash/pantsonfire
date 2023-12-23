import { Injectable } from '@angular/core';

import { Meta, Title } from '@angular/platform-browser';
import { Res } from '../utils/resources';
import { Platform } from './platform.service';


@Injectable({
   providedIn: 'root'
})
export class SeoService {

   constructor(
      private title: Title,
      private meta: Meta,
      private platform: Platform
   ) {
   }


   get url(): string {
      let url = this.platform.doc.location.pathname;
      if (url.indexOf(';') > -1) {
         url = url.substring(0, url.indexOf(';'));
      }
      return url;
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
      const _imageUrl = imageUrl;

      this.meta.updateTag({ name: 'image', property: 'og:image', content: _imageUrl });
      this.meta.updateTag({ property: 'twitter:image', content: _imageUrl });

   }

   setPage(key: string) {
      // set generic page title (brought from data)
      const pageKey = Res.Get('PAGE_TITLES') || {};
      const _title = pageKey[key] || Res.Get('DEFAULT_PAGE_TITLE');
      this.setTitle(_title);
   }


}

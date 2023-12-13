import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Config } from '../../config';
import { LazyDirective } from '../../lib/directives/lazy.directive';
import { ImagePipe } from '../../lib/tohtml/image.pipe';
import { ToHtmlPipe } from '../../lib/tohtml/tohtml.pipe';
import { IPost } from '../../models/post.model';
@Component({
    selector: 'pof-public-card',
    templateUrl: './card.partial.html'
    , changeDetection: ChangeDetectionStrategy.OnPush
	 , standalone: true
	 , imports: [CommonModule, RouterModule, ToHtmlPipe, ImagePipe, LazyDirective]
	 })
export class PublicCardPartialComponent implements OnInit {
    @Input() post: IPost;
    defaultImage: string = Config.Basic.defaultImage;
    constructor() {
        //
    }
    ngOnInit(): void {
        //
    }
}

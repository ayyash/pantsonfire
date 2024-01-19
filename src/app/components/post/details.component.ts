import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ToHtmlPipe } from '../../lib/tohtml/tohtml.pipe';
import { IPost } from '../../models/post.model';
import { PostService } from '../../services/post.service';
import { SeoService } from '../../utils/seo.service';
import { PostDetailsPartialComponent } from './details.partial';
@Component({

    templateUrl: './details.html'
    , changeDetection: ChangeDetectionStrategy.OnPush
    , standalone: true
    , providers: [ToHtmlPipe]
    , imports: [CommonModule, RouterModule, PostDetailsPartialComponent]
})
export class PostDetailsComponent implements OnInit {

    @Input() slug: string;
    post$: Observable<IPost>;

    constructor(private postService: PostService,
        private toHtml: ToHtmlPipe,
        private seoService: SeoService) {
        //
    }
    ngOnInit(): void {

        this.post$ = this.postService.GetPost(this.slug).pipe(
            tap(post => {
                this.seoService.setPost(post, this.toHtml.transform(post.content));
            })
        );
    }
}

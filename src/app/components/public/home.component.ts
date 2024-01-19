import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';
import { Config } from '../../config';
import { DialogService } from '../../lib/dialog/service';
import { ResPipe } from '../../lib/pipes/res.pipe';
import { IContent } from '../../models/content.model';
import { IListOptions } from '../../models/list.model';
import { IPost } from '../../models/post.model';
import { ParamState } from '../../services/param.state';
import { PostService } from '../../services/post.service';
import { PostListState } from '../../services/post.state';
import { hasMore } from '../../utils/common';
import { SeoService } from '../../utils/seo.service';
import { ContentPartialComponent } from '../common/content.partial';
import { PagerPartialComponent } from '../common/pager.partial';
import { PublicCardPartialComponent } from './card.partial';
import { PublicContentDialogComponent } from './content.dialog';

@Component({

    templateUrl: './home.html',
    standalone: true,
    imports: [ResPipe, CommonModule, ContentPartialComponent, PublicCardPartialComponent, PagerPartialComponent]
})
export class PublicHomeComponent implements OnInit {

    extraParams: ParamState;
    extraParams$: Observable<IListOptions>;

    list$: Observable<IPost[]>;
    content$: Observable<IContent[]>;
    constructor( private postService: PostService,
        private postListState: PostListState,
        private dialogService: DialogService,
        private seoService: SeoService,
        private paramState: ParamState) {
        //
        this.extraParams = new ParamState();
    }
    ngOnInit(): void {

        this.seoService.setHome();

        this.list$ = this.paramState.stateItem$.pipe(
            switchMap(options => this.postService.GetPosts(options)),
            tap(list => {
                const _hasMore = hasMore(list.total, this.paramState.currentItem.size, this.paramState.currentItem.page);

                this.extraParams.SetState({total: list.total, hasMore: _hasMore })
            }),
            switchMap(list => this.postListState.appendList(list.matches)),
        );

        this.paramState.SetState({page: 1, size: Config.Basic.defaultSize});
        this.extraParams$ = this.extraParams.stateItem$;
    }
    getPage(): void {
        // just get the next page and append to list
        this.paramState.UpdateState({page: this.paramState.currentItem.page + 1});
    }

    openDialog(): void {
        this.dialogService.open(PublicContentDialogComponent, {
            title: '',
            css: 'modal-bottom-sheet animate frombottom',
            data: 'what-about-october-7'
        })
    }

   trackByFn(index: number, item: IPost) {
    return item.id;
 }
}

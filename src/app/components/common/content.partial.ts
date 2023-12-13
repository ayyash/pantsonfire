import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
// import * as prismicH from '@prismicio/helpers';
import { Observable } from 'rxjs';
import { ToHtmlPipe } from '../../lib/tohtml/tohtml.pipe';
import { IContent } from '../../models/content.model';
import { ContentService } from '../../services/content.service';


@Component({
    selector: 'pof-content',
    templateUrl: './content.partial.html'
    , changeDetection: ChangeDetectionStrategy.OnPush
	 , standalone: true
	 , imports: [CommonModule, RouterModule, ToHtmlPipe]
	 })
export class ContentPartialComponent implements OnInit {

    @Input() id: string;

    content$: Observable<IContent>;

    constructor(private contentService: ContentService) {
        //
    }
    ngOnInit(): void {
        this.content$ = this.contentService.GetContent(this.id);
    }

}

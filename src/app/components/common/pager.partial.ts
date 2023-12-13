import { CommonModule } from '@angular/common';
import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { LoaderState } from '../../lib/loader/loader.state';

 @Component({
   selector: 'pof-pager',
   template: `
     <div class="pager" [class.loading]="loading$ | async">
         <a class="more" *ngIf="isLoadMore" (click)="page($event)" title="Show more">🔻</a>
     </div>
   `,
   styleUrls: ['./pager.less'],
   encapsulation: ViewEncapsulation.None,
   standalone: true,
   imports: [CommonModule]
 })
 export class PagerPartialComponent implements OnInit {
   @Input() isLoadMore = false;
   @Input() source?: string;
   @Output() onPage: EventEmitter<{event: MouseEvent, source: string}> = new EventEmitter();


   loading$: Observable<boolean>;

   constructor(private loaderState: LoaderState) {
   }
   ngOnInit(): void {

     this.loading$ = this.loaderState.stateItem$.pipe(
       filter(state => state.context === this.source),
       map(state => state ? state.show : false)
     );

   }
   page(event: MouseEvent): void {
    // pass back the source
     this.onPage.emit({event, source: this.source});
     // emit a show event, no just show a loading effect
   }


 }

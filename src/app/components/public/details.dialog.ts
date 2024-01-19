import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DialogPartialComponent } from '../../lib/dialog/partial';
import { PostDetailsPartialComponent } from '../post/details.partial';
@Component({
    templateUrl: './details.dialog.html'
    , changeDetection: ChangeDetectionStrategy.OnPush
	 , standalone: true
	 , imports: [CommonModule, RouterModule, PostDetailsPartialComponent]
	 })
export class PublicDetailsDialogComponent implements OnInit {
    dialog!: DialogPartialComponent;
    data!: any;

    constructor() {
        //
    }
    ngOnInit(): void {
        //
    }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DialogPartialComponent } from '../../lib/dialog/partial';
import { ContentPartialComponent } from '../common/content.partial';
@Component({

  templateUrl: './content.dialog.html'
  , changeDetection: ChangeDetectionStrategy.OnPush
  , standalone: true
  , imports: [ContentPartialComponent]
})
export class PublicContentDialogComponent implements OnInit {

  dialog!: DialogPartialComponent;
  data!: string;
  constructor(
    ) {
    //
  }
  ngOnInit(): void {


  }

}

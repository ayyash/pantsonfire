import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
    selector: 'pof-icon',
    template:  `<span class="triangle {{ css }}"></span>
    `
    , changeDetection: ChangeDetectionStrategy.OnPush
    , standalone: true
    , styleUrls: ['./icon.less']
    , encapsulation: ViewEncapsulation.None
})
export class IconPartialComponent {

    @Input() css: string;

}

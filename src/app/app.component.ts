import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from './lib/loader/loader.partial';

@Component({
    selector: 'app-root',
    template: '<http-loader></http-loader><router-outlet></router-outlet>',
    standalone: true,
    imports: [LoaderComponent, RouterModule]
})
export class AppComponent {

}

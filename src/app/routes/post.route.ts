import { Routes } from '@angular/router';
import { PostDetailsComponent } from '../components/post/details.component';
// **gulpimport**

export const PostRoutes: Routes = [
  {
    path: ':slug',
    component: PostDetailsComponent
}

// **gulproute**
];

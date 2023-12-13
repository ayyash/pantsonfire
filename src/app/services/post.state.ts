import { Injectable } from '@angular/core';
import { IPost } from '../models/post.model';
import { ListStateService } from '../utils/state.abstract';

@Injectable({ providedIn: 'root' })
export class PostListState extends ListStateService<IPost> {
    constructor() {
        super();
    }
}

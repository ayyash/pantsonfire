import { Injectable } from '@angular/core';
import { Config } from '../../config';
import { urlBuilder } from '../image-url';

export type TypeImage = 'Tiny'|'Small'|'Medium'|'Large'|'Original';

@Injectable({ providedIn: 'root' })
export class ImageService {

    private builder: any;

    constructor() {
        this.builder = urlBuilder({
            projectId: Config.Sanity.ProjectId,
            dataset: Config.Sanity.Dataset
        });
    }

    public ImageUrlFor(image: any, type: TypeImage): string {
        // based on type get url

        let width = 50;
        switch (type) {
            case 'Tiny':
                width = 100;
                break;
            case 'Small':
                width = 200;
                break;
            case 'Medium':
                width = 300;
                break;
            case 'Large':
                width = 500;
                break;
            case 'Original':
                width = 1300; // guessing
                break;
        }

        return this.builder.image(image).format('webp').auto('format').fit('max').width(width).url().toString();
    }


}

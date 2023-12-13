import { Pipe, PipeTransform } from '@angular/core';
import { SanityImageSource } from '../image-url/types';
import { ImageService, TypeImage } from './image.service';

@Pipe({ name: 'sanityimage', standalone: true })
export class ImagePipe implements PipeTransform {
    constructor(private imageService: ImageService) { }

    transform(value: SanityImageSource, width?: TypeImage): string {
        return this.imageService.ImageUrlFor(value, width || 'Original');
    }
}


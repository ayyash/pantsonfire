import { Pipe, PipeTransform } from '@angular/core';
import { toHTML } from '@portabletext/to-html';
import { SerializeDecorators, SerializerBlock, SerializerLink } from './blocktohtml.model';

const serializers = {
    block: SerializerBlock,
    marks: {
        red: SerializeDecorators,
        small: SerializeDecorators,
        link: SerializerLink
    }
};
@Pipe({ name: 'tohtml', standalone: true })
export class ToHtmlPipe implements PipeTransform {
    constructor() { }

    transform(value: any): string {
        return toHTML(value, { components: serializers });
    }
}


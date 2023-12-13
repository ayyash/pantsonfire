// classes directive, mostly upon intersection
import {
    AfterViewInit,
    Directive,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    Renderer2,
    SimpleChanges
} from '@angular/core';

interface IOptions {
    threshold?: number;
    fallBack?: string;
    initial?: string;
    nullCss?: string;
}

@Directive({
    selector: '[crLazy]',
    exportAs: 'crLazy',
    standalone: true,
})
export class LazyDirective implements AfterViewInit, OnChanges, OnDestroy {

    @Input() crLazy: string = '';

    @Input() options: IOptions = { threshold: 0, fallBack: null };

    private io: IntersectionObserver;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2
    ) { }

    private setImage(src: string) {
        if (this.el.nativeElement.tagName === 'IMG') {
            this.renderer.setAttribute(this.el.nativeElement, 'src', src);
        } else {
            // change background image (add the style)
            this.renderer.setAttribute(this.el.nativeElement, 'style', `background-image: url(${src})`);
        }
    }
    private lazyLoad(entry: IntersectionObserverEntry) {

        // when intersecting,
        if (entry.isIntersecting) {
            // if IMG, change src
            const img = new Image();

            img.addEventListener('load', () => {
                // set attributes here ...
                this.setImage(img.src);
                // success, remove extra css
                this.renderer.removeClass(entry.target, this.options.nullCss);
                // disconnect
                this.io.unobserve(entry.target);
            });
            if (this.options.fallBack) {
                img.addEventListener('error', () => {
                    this.setImage(this.options.fallBack);
                    // disconnect
                    this.io.unobserve(entry.target);
                });
            }

            img.src = this.crLazy;

        }
    }

    // show default before loading
    ngAfterViewInit() {

        if (!this.crLazy && this.options.fallBack) {
            this.crLazy = this.options.fallBack;
        }


        if (this.options.initial) {
            this.setImage(this.options.initial);
        }
        if (this.options.nullCss) {
            this.renderer.addClass(this.el.nativeElement, this.options.nullCss);
        }

        this.io = new IntersectionObserver((entries, observer) => {
            const _entry = entries.find((entry) => entry.isIntersecting);

            if (_entry) {
                this.lazyLoad(_entry);
            }
        },
            {
                threshold: this.options.threshold
            });


        this.io.observe(this.el.nativeElement);
    }


    ngOnChanges(c: SimpleChanges) {
        // _attn(c, 'onchanges');
        if (c.crLazy.firstChange) {
            // act normally
            return;
        }
        if (c.crLazy.currentValue !== c.crLazy.previousValue) {
            // observe element
            this.io.observe(this.el.nativeElement);
        }
    }

    ngOnDestroy(): void {
        this.io?.disconnect();
        this.io = null;
    }
}


import { GtmDirective } from '../lib/directives/gtm.directive';
import { RenderDirective } from '../lib/directives/render.directive';
import { LoaderComponent } from '../lib/loader/loader.partial';
import { ResPipe } from '../lib/pipes/res.pipe';

export const SHARED_COMPONENTS = [
  // add common standalone components
  LoaderComponent,
  RenderDirective,
  GtmDirective,
  ResPipe
] as const;

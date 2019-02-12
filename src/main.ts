import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { UiGridModule } from './app/ui-grid.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(UiGridModule)
  .catch(err => console.error(err));

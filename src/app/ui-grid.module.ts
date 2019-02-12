import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UiGridBaseComponent } from './components/ui-grid-base/ui-grid-base.component';
import { DemoComponent } from './components/demo/demo.component';

@NgModule({
  declarations: [
    UiGridBaseComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class UiGridModule { }

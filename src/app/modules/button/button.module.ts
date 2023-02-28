import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent} from './button.component';
import {MatButtonModule} from "@angular/material/button";
import {IconButtonComponent} from "./icon-button/icon-button.component";


@NgModule({
  declarations: [
    ButtonComponent,
    IconButtonComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [
    ButtonComponent,
    IconButtonComponent
  ]
})
export class ButtonModule {
}

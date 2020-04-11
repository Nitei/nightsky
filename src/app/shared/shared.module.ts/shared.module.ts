import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';
import { OnlyNumberDirective } from '../directives/only-number/only-number.directive';



@NgModule({
  declarations: [
    ButtonComponent,
    OnlyNumberDirective
  ],
  exports: [
    ButtonComponent,
    OnlyNumberDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

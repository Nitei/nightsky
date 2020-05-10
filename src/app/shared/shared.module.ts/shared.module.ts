import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../components/button/button.component';
import { OnlyNumberDirective } from '../directives/only-number/only-number.directive';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ButtonComponent,
    OnlyNumberDirective
  ],
  exports: [
    ButtonComponent,
    OnlyNumberDirective,
    TranslateModule
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [TranslateService]
})
export class SharedModule { }

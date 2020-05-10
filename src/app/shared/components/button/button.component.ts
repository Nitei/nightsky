import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ns-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ]
} )
export class ButtonComponent {
  @Input() class: string = ''; // 'w_normal bg_red c_white'
  @Input() label: string = ''; // Texto en el botón
  @Input() translatable: boolean = true;

  @Output() clicked: EventEmitter<void> = new EventEmitter();
}

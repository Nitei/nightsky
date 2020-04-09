import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonModel } from '../../models/button.model';

@Component({
  selector: 'ns-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() button: ButtonModel;
  @Output() clicked: EventEmitter<void> = new EventEmitter();
}

import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ButtonModel } from '../../models/button.model';

@Component({
  selector: 'ns-button',
  templateUrl: './button.component.html',
  styleUrls: [ './button.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() button: ButtonModel;
  @Output() clicked: EventEmitter<void> = new EventEmitter();
}

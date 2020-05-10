import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModel } from '../../../shared/models/button.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ns-games',
  templateUrl: './games.component.html',
  styleUrls: [ './games.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamesComponent implements OnInit {

  constructor(
    private router: Router,
    public translate: TranslateService
  ) { }

  ngOnInit() {
  }

}

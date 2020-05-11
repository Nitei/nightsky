import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ns-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
  }

  switchLanguaje() {
    if ( this.translate.currentLang === 'es' ) {
      return this.translate.use( 'en' );
    }
    if ( this.translate.currentLang === 'en' ) {
      return this.translate.use( 'es' );
    }
    console.log( this.translate.currentLang)
  }

  coincideWithRoute(route: string): boolean {
    const result = this.router.url.includes( route );
    return result;
  }

}

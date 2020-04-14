import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ns-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'nightsky';
  a;

  constructor() {
    this.a = {
      a: () => { console.log( 'hola' ) }
    }
    // console.log( this.a.a instanceof Function);
    // this.a = [];
    // ( () => {
    //   console.time('encontrado')
    //   for (let index = 0; index < 9000000; index++) {
    //     this.a.push( { a: index, b: index } )
    //     // if ( index === 4500000) {
    //       // console.timeLog()
    //     //   break
    //     // }
    //   }
    //   console.timeEnd('encontrado')
    // })()
  }

  
}

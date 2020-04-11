import { Injectable } from '@angular/core';

@Injectable( {
  providedIn: 'root'
} )
export class UtilsService {

  constructor() {}
  
  capitalizeText( text: string ) {
    let lowercased = text.toLowerCase();
    return lowercased.replace( lowercased[ 0 ], lowercased[ 0 ].toUpperCase() );   
  }

  checkIsNumber( ev: string | number ) {
    return ev >= 0 && ev > 10 ? ev : 0;
  }

}
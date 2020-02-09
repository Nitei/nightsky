import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component( {
  selector: 'ns-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: [ './calculadora.component.scss' ]
} )
export class CalculadoraComponent implements OnInit {

  calculadora: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.initForm();
  }

  generateNumber( numDigit: number = 1 ) {
    const
      number = Math.random() * (numDigit * 10),
      cuttedNumber = Number(number.toFixed( 0 ));    
    return cuttedNumber;
  }

  initForm() {
    this.calculadora = this.fb.group( {
      first: this.fb.control( this.generateNumber() ),
      second: this.fb.control( this.generateNumber() ),
      result: this.fb.control(''),
    } )
  };

}

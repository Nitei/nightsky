import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraComponent } from './calculadora.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../../shared/shared.module.ts/shared.module';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe( 'CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  // let direct: OnlyNumberDirective;
  let fixture: ComponentFixture<CalculadoraComponent>;
  // let fixtu: ComponentFixture<OnlyNumberDirective>;

  beforeEach( async( () => {
    TestBed.configureTestingModule( {
      imports: [ ReactiveFormsModule, SharedModule ],
      providers: [ FormBuilder],
      declarations: [ CalculadoraComponent ]
    } )
      .compileComponents();
  } ) );

  beforeEach( () => {
    fixture = TestBed.createComponent( CalculadoraComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );

  it( 'calculate should be good', async () => { // resultInp
    fixture.detectChanges();
    let inp: DebugElement = fixture.debugElement.query( By.css( '#resultInp' ) );
    let input: HTMLInputElement = inp.nativeElement;
    input.value = '9';
    input.dispatchEvent( new Event( 'input' ) );
    fixture.autoDetectChanges( true );
    fixture.detectChanges();
    console.log( 'test', input.value )
    console.log( 'test', input )
    expect( input.value ).toBeTruthy();

  } );
} );

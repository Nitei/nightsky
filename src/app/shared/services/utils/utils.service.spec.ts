import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { UtilsService } from './utils.service';
xdescribe( 'AppComponent', () => {
  let service: UtilsService;
  beforeEach( async( () => {
    TestBed.configureTestingModule( {} ).compileComponents();
    service = TestBed.inject( UtilsService );
  } ) );

  it( 'service.checkIsNumber() parse all to number', () => {
    expect( service ).toBeTruthy();
    expect( service.checkIsNumber(null) ).toEqual( 0 );
    expect( service.checkIsNumber(undefined) ).toEqual( 0 );
    expect( service.checkIsNumber(12) ).toEqual( 0 );
  } );

  it( 'should render title', () => {
  } );
} );

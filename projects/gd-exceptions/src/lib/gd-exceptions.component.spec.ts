import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GDExceptionsComponent } from './gd-exceptions.component';

describe('GDTabComponent', () => {
  let component: GDExceptionsComponent;
  let fixture: ComponentFixture<GDExceptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GDExceptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GDExceptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

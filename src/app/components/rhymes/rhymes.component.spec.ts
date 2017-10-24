import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhymesComponent } from './rhymes.component';

describe('RhymesComponent', () => {
  let component: RhymesComponent;
  let fixture: ComponentFixture<RhymesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhymesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhymesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

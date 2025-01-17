import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidyComponent } from './adidy.component';

describe('AdidyComponent', () => {
  let component: AdidyComponent;
  let fixture: ComponentFixture<AdidyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdidyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdidyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpandrayComponent } from './mpandray.component';

describe('MpandrayComponent', () => {
  let component: MpandrayComponent;
  let fixture: ComponentFixture<MpandrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpandrayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpandrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

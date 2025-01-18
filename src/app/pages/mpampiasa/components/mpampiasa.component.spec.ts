import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MpampiasaComponent } from './mpampiasa.component';

describe('MpampiasaComponent', () => {
  let component: MpampiasaComponent;
  let fixture: ComponentFixture<MpampiasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MpampiasaComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MpampiasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

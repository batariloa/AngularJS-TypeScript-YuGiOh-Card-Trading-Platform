import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojePorudzbineComponent } from './moje-porudzbine.component';

describe('MojePorudzbineComponent', () => {
  let component: MojePorudzbineComponent;
  let fixture: ComponentFixture<MojePorudzbineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojePorudzbineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojePorudzbineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

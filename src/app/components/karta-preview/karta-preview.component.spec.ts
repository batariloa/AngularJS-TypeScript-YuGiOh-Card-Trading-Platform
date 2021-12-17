import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartaPreviewComponent } from './karta-preview.component';

describe('KartaPreviewComponent', () => {
  let component: KartaPreviewComponent;
  let fixture: ComponentFixture<KartaPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KartaPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KartaPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

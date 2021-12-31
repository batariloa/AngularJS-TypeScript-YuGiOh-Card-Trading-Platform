import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransakcijePreviewComponent } from './transakcije-preview.component';

describe('TransakcijePreviewComponent', () => {
  let component: TransakcijePreviewComponent;
  let fixture: ComponentFixture<TransakcijePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransakcijePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransakcijePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

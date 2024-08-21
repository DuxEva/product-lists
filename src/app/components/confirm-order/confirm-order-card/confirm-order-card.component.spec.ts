import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOrderCardComponent } from './confirm-order-card.component';

describe('ConfirmOrderCardComponent', () => {
  let component: ConfirmOrderCardComponent;
  let fixture: ComponentFixture<ConfirmOrderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmOrderCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmOrderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

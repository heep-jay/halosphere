import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollsafenavComponent } from './rollsafenav.component';

describe('RollsafenavComponent', () => {
  let component: RollsafenavComponent;
  let fixture: ComponentFixture<RollsafenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollsafenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollsafenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollfooterComponent } from './rollfooter.component';

describe('RollfooterComponent', () => {
  let component: RollfooterComponent;
  let fixture: ComponentFixture<RollfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RollfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RollfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

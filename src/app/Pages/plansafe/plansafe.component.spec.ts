import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlansafeComponent } from './plansafe.component';

describe('PlansafeComponent', () => {
  let component: PlansafeComponent;
  let fixture: ComponentFixture<PlansafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlansafeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlansafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

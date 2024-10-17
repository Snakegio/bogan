import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaprodComponent } from './schedaprod.component';

describe('SchedaprodComponent', () => {
  let component: SchedaprodComponent;
  let fixture: ComponentFixture<SchedaprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedaprodComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SchedaprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

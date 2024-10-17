import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PProdottoComponent } from './p-prodotto.component';

describe('PProdottoComponent', () => {
  let component: PProdottoComponent;
  let fixture: ComponentFixture<PProdottoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PProdottoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PProdottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

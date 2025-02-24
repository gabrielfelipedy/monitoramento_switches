import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaranjalSubsecaoComponent } from './laranjal-subsecao.component';

describe('LaranjalSubsecaoComponent', () => {
  let component: LaranjalSubsecaoComponent;
  let fixture: ComponentFixture<LaranjalSubsecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaranjalSubsecaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaranjalSubsecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

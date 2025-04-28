import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacapaSubsecaoComponent } from './macapa-subsecao.component';

describe('MacapaSubsecaoComponent', () => {
  let component: MacapaSubsecaoComponent;
  let fixture: ComponentFixture<MacapaSubsecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MacapaSubsecaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacapaSubsecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

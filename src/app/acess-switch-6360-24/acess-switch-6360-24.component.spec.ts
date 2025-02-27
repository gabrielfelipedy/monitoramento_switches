import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessSwitch636024Component } from './acess-switch-6360-24.component';

describe('AcessSwitchComponent', () => {
  let component: AcessSwitch636024Component;
  let fixture: ComponentFixture<AcessSwitch636024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessSwitch636024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessSwitch636024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

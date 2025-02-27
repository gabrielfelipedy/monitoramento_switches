import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch636024Component } from './switch-6360-24.component';

describe('AcessSwitchComponent', () => {
  let component: Switch636024Component;
  let fixture: ComponentFixture<Switch636024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switch636024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch636024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

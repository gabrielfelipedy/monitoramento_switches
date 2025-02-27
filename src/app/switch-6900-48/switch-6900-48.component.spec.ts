import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch690048Component } from './switch-6900-48.component';

describe('Switch690048Component', () => {
  let component: Switch690048Component;
  let fixture: ComponentFixture<Switch690048Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switch690048Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch690048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch690024Component } from './switch-6900-24.component';

describe('Switch690024Component', () => {
  let component: Switch690024Component;
  let fixture: ComponentFixture<Switch690024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switch690024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch690024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

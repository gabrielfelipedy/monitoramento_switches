import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch686028Component } from './switch-6860-28.component';

describe('Switch686028Component', () => {
  let component: Switch686028Component;
  let fixture: ComponentFixture<Switch686028Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switch686028Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch686028Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch9900Component } from './switch-9900.component';

describe('Switch9900Component', () => {
  let component: Switch9900Component;
  let fixture: ComponentFixture<Switch9900Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Switch9900Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Switch9900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

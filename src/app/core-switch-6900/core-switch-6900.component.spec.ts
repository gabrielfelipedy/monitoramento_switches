import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSwitch6900Component } from './core-switch-6900.component';

describe('CoreSwitch6900Component', () => {
  let component: CoreSwitch6900Component;
  let fixture: ComponentFixture<CoreSwitch6900Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreSwitch6900Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreSwitch6900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

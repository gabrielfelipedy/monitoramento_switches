import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreSwitch9900Component } from './core-switch-9900.component';

describe('CoreSwitch9900Component', () => {
  let component: CoreSwitch9900Component;
  let fixture: ComponentFixture<CoreSwitch9900Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreSwitch9900Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreSwitch9900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

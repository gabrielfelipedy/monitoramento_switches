import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessSwitchComponent } from './acess-switch.component';

describe('AcessSwitchComponent', () => {
  let component: AcessSwitchComponent;
  let fixture: ComponentFixture<AcessSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessSwitchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

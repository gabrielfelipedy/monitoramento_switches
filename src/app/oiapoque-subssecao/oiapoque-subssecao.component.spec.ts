import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OiapoqueSubssecaoComponent } from './oiapoque-subssecao.component';

describe('OiapoqueSubssecaoComponent', () => {
  let component: OiapoqueSubssecaoComponent;
  let fixture: ComponentFixture<OiapoqueSubssecaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OiapoqueSubssecaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OiapoqueSubssecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

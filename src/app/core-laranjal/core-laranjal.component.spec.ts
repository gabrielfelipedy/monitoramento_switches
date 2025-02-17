import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreLaranjalComponent } from './core-laranjal.component';

describe('CoreLaranjalComponent', () => {
  let component: CoreLaranjalComponent;
  let fixture: ComponentFixture<CoreLaranjalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreLaranjalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreLaranjalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

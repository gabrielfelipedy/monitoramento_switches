import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acesso1LaranjalComponent } from './acesso1-laranjal.component';

describe('Acesso1LaranjalComponent', () => {
  let component: Acesso1LaranjalComponent;
  let fixture: ComponentFixture<Acesso1LaranjalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acesso1LaranjalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acesso1LaranjalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

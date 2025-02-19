import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acesso3LaranjalComponent } from './acesso3-laranjal.component';

describe('Acesso3LaranjalComponent', () => {
  let component: Acesso3LaranjalComponent;
  let fixture: ComponentFixture<Acesso3LaranjalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acesso3LaranjalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acesso3LaranjalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

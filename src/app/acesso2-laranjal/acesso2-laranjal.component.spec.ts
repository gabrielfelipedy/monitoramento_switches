import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Acesso2LaranjalComponent } from './acesso2-laranjal.component';

describe('Acesso2LaranjalComponent', () => {
  let component: Acesso2LaranjalComponent;
  let fixture: ComponentFixture<Acesso2LaranjalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Acesso2LaranjalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Acesso2LaranjalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasVotadoComponent } from './mas-votado.component';

describe('MasVotadoComponent', () => {
  let component: MasVotadoComponent;
  let fixture: ComponentFixture<MasVotadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasVotadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasVotadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

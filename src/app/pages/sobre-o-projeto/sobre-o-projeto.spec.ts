import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreOProjeto } from './sobre-o-projeto';

describe('SobreOProjeto', () => {
  let component: SobreOProjeto;
  let fixture: ComponentFixture<SobreOProjeto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreOProjeto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreOProjeto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

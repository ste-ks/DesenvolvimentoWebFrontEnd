import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ola } from './ola';

describe('Ola', () => {
  let component: Ola;
  let fixture: ComponentFixture<Ola>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ola],
    }).compileComponents();

    fixture = TestBed.createComponent(Ola);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaOvenComponent } from './pizza-oven.component';

describe('PizzaOvenComponent', () => {
  let component: PizzaOvenComponent;
  let fixture: ComponentFixture<PizzaOvenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaOvenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaOvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

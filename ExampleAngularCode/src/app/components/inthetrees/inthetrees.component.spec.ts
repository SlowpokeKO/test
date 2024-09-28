import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InthetreesComponent } from './inthetrees.component';

describe('InthetreesComponent', () => {
  let component: InthetreesComponent;
  let fixture: ComponentFixture<InthetreesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InthetreesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InthetreesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

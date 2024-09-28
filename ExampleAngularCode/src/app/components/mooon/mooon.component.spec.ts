import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MooonComponent } from './mooon.component';

describe('MooonComponent', () => {
  let component: MooonComponent;
  let fixture: ComponentFixture<MooonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MooonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MooonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

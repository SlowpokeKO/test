import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackMouseComponent } from './track-mouse.component';

describe('TrackMouseComponent', () => {
  let component: TrackMouseComponent;
  let fixture: ComponentFixture<TrackMouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackMouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackMouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

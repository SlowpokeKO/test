import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunRiverComponent } from './sun-river.component';

describe('SunRiverComponent', () => {
  let component: SunRiverComponent;
  let fixture: ComponentFixture<SunRiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SunRiverComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SunRiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

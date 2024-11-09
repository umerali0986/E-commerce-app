import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopsPageComponent } from './laptops-page.component';

describe('LaptopsPageComponent', () => {
  let component: LaptopsPageComponent;
  let fixture: ComponentFixture<LaptopsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaptopsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaptopsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

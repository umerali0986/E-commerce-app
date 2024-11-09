import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadsPageComponent } from './ipads-page.component';

describe('IpadsPageComponent', () => {
  let component: IpadsPageComponent;
  let fixture: ComponentFixture<IpadsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IpadsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

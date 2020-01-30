import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show find a vehicle filter', () => {
    expect(fixture.nativeElement.querySelector('[data-test="vehicle filter"]')).toBeTruthy();
  });
  it('should show carmake list', () => {
    expect(fixture.nativeElement.querySelector('[data-test="carmake"]')).toBeTruthy();
  });
});

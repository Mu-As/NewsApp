import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusiNewsComponent } from './busi-news.component';

describe('BusiNewsComponent', () => {
  let component: BusiNewsComponent;
  let fixture: ComponentFixture<BusiNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusiNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusiNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

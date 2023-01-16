import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindResultComponent } from './find-result.component';

describe('FindResultComponent', () => {
  let component: FindResultComponent;
  let fixture: ComponentFixture<FindResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

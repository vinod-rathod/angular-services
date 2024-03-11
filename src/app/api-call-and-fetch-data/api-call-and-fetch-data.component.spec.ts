import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCallAndFetchDataComponent } from './api-call-and-fetch-data.component';

describe('ApiCallAndFetchDataComponent', () => {
  let component: ApiCallAndFetchDataComponent;
  let fixture: ComponentFixture<ApiCallAndFetchDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApiCallAndFetchDataComponent]
    });
    fixture = TestBed.createComponent(ApiCallAndFetchDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingPageComponent } from './searching-page.component';

describe('SearchingPageComponent', () => {
  let component: SearchingPageComponent;
  let fixture: ComponentFixture<SearchingPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchingPageComponent]
    });
    fixture = TestBed.createComponent(SearchingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
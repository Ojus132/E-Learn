import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseElementComponent } from './course-element.component';

describe('CourseElementComponent', () => {
  let component: CourseElementComponent;
  let fixture: ComponentFixture<CourseElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseElementComponent]
    });
    fixture = TestBed.createComponent(CourseElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

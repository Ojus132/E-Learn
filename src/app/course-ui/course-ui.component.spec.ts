import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseUIComponent } from './course-ui.component';

describe('CourseUIComponent', () => {
  let component: CourseUIComponent;
  let fixture: ComponentFixture<CourseUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseUIComponent]
    });
    fixture = TestBed.createComponent(CourseUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

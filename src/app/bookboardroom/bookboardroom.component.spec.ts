import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookboardroomComponent } from './bookboardroom.component';

describe('BookboardroomComponent', () => {
  let component: BookboardroomComponent;
  let fixture: ComponentFixture<BookboardroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookboardroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookboardroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

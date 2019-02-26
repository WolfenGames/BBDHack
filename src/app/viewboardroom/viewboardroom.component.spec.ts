import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewboardroomComponent } from './viewboardroom.component';

describe('ViewboardroomComponent', () => {
  let component: ViewboardroomComponent;
  let fixture: ComponentFixture<ViewboardroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewboardroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewboardroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

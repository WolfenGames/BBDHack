import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboardroomsComponent } from './listboardrooms.component';

describe('ListboardroomsComponent', () => {
  let component: ListboardroomsComponent;
  let fixture: ComponentFixture<ListboardroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListboardroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListboardroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonItemsComponent } from './person-items.component';

describe('PersonItemsComponent', () => {
  let component: PersonItemsComponent;
  let fixture: ComponentFixture<PersonItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

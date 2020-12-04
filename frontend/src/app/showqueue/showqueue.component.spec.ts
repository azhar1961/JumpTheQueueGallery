import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowqueueComponent } from './showqueue.component';

describe('ShowqueueComponent', () => {
  let component: ShowqueueComponent;
  let fixture: ComponentFixture<ShowqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowqueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

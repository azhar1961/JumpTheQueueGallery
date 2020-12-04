import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinqueueComponent } from './joinqueue.component';

describe('JoinqueueComponent', () => {
  let component: JoinqueueComponent;
  let fixture: ComponentFixture<JoinqueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinqueueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinqueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

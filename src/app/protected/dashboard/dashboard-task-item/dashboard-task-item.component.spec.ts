import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTaskItemComponent } from './dashboard-task-item.component';

describe('DashboardTaskItemComponent', () => {
  let component: DashboardTaskItemComponent;
  let fixture: ComponentFixture<DashboardTaskItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTaskItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTaskItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

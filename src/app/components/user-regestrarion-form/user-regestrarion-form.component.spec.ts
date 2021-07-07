import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegestrarionFormComponent } from './user-regestrarion-form.component';

describe('UserRegestrarionFormComponent', () => {
  let component: UserRegestrarionFormComponent;
  let fixture: ComponentFixture<UserRegestrarionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegestrarionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegestrarionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

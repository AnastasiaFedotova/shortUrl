import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksTagPageComponent } from './links-tag-page.component';

describe('LinksTagPageComponent', () => {
  let component: LinksTagPageComponent;
  let fixture: ComponentFixture<LinksTagPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksTagPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksTagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCompComponent } from './post-comp.component';

describe('PostCompComponent', () => {
  let component: PostCompComponent;
  let fixture: ComponentFixture<PostCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostCompComponent]
    });
    fixture = TestBed.createComponent(PostCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

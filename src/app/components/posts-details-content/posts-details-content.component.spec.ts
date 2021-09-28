import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsDetailsContentComponent } from './posts-details-content.component';

describe('PostsDetailsContentComponent', () => {
  let component: PostsDetailsContentComponent;
  let fixture: ComponentFixture<PostsDetailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsDetailsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

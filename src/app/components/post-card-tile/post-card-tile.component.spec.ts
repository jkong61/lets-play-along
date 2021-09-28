import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardTileComponent } from './post-card-tile.component';

describe('PostCardTileComponent', () => {
  let component: PostCardTileComponent;
  let fixture: ComponentFixture<PostCardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

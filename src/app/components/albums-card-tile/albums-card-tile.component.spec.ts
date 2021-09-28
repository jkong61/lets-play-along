import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsCardTileComponent } from './albums-card-tile.component';

describe('AlbumsCardTileComponent', () => {
  let component: AlbumsCardTileComponent;
  let fixture: ComponentFixture<AlbumsCardTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsCardTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsCardTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

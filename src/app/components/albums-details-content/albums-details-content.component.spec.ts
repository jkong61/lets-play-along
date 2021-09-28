import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsDetailsContentComponent } from './albums-details-content.component';

describe('AlbumsDetailsContentComponent', () => {
  let component: AlbumsDetailsContentComponent;
  let fixture: ComponentFixture<AlbumsDetailsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsDetailsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

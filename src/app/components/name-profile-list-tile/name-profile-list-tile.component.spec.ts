import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameProfileListTileComponent } from './name-profile-list-tile.component';

describe('NameProfileListTileComponent', () => {
  let component: NameProfileListTileComponent;
  let fixture: ComponentFixture<NameProfileListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameProfileListTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameProfileListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

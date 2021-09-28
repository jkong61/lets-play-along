import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSearchBarComponent } from './profile-search-bar.component';

describe('ProfileSearchBarComponent', () => {
  let component: ProfileSearchBarComponent;
  let fixture: ComponentFixture<ProfileSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

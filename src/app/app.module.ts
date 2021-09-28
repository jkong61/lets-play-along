import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NameProfileListTileComponent } from './components/name-profile-list-tile/name-profile-list-tile.component';
import { ProfileDetailsComponent } from './components/profile-details/profile-details.component';
import { ProfileSearchBarComponent } from './components/profile-search-bar/profile-search-bar.component';
import { PostCardTileComponent } from './components/post-card-tile/post-card-tile.component';
import { PostsDetailsContentComponent } from './components/posts-details-content/posts-details-content.component';
import { AlbumsDetailsContentComponent } from './components/albums-details-content/albums-details-content.component';
import { AlbumsCardTileComponent } from './components/albums-card-tile/albums-card-tile.component';
import { BASE_URL, BASE_URL_VALUE } from './configs/constants.config';
import { ShortenPipe } from './pipes/custom-splice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NameProfileListTileComponent,
    ProfileDetailsComponent,
    ProfileSearchBarComponent,
    PostCardTileComponent,
    PostsDetailsContentComponent,
    AlbumsDetailsContentComponent,
    AlbumsCardTileComponent,
    ShortenPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // AppRoutingModule
  ],
  providers: [{
    provide: BASE_URL,
    useValue: BASE_URL_VALUE
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

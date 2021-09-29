import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Ablum } from 'src/app/models/album';
import { Post } from 'src/app/models/post';
import { PhotoService } from 'src/app/services/photo.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile-search-bar',
  templateUrl: './profile-search-bar.component.html',
  styleUrls: ['./profile-search-bar.component.css']
})
export class ProfileSearchBarComponent implements OnInit {

  @Input() album: boolean = false;
  @Input() post: boolean = false;
  @Output() newEvent = new EventEmitter<string>()

  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private albumService: PhotoService) {
      this.searchForm = this.fb.group({
        query: ['']
      });
    }

  ngOnInit(): void {
  }

  onClickSubmit() : void {
    const query = this.searchForm.get('query')?.value;
    if (!!query) {
      let observable: Observable<Post[] | Ablum[]> | undefined;
      if (this.post) {
        observable = this.postService.getPosts(query);
      } else if (this.album) {
        observable = this.albumService.getAlbums(query);
      }
      observable?.subscribe(
        value => {
          if (value.length > 0) {
            this.searchForm.reset();
          }
          this.newEvent.emit();
        },
        error => console.log(error)
      );
    }
  }

  formatTitle() : string {
    return `Search ${ this.album ? 'Albums' : ( this.post ? 'Posts' : 'item')}`
  }
}

import { Component, computed, inject, signal } from '@angular/core';
import { GiftlistComponent } from "../../components/giftlist/giftlist.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search',
  imports: [GiftlistComponent],
  templateUrl: './search.component.html',
})
export default class SearchComponent { 
  gifService = inject(GifService)
  gifs = signal<Gif[]>([])

  onSearch(query: string){
    this.gifService.loadSearchGift(query).subscribe(resp => {
      this.gifs.set(resp)
    })
  }
}

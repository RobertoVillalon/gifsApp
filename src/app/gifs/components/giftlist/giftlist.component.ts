import { Component, input } from '@angular/core';
import { GiftlistItemComponent } from "./giftlist-item/giftlist-item.component";
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'giftlist',
  imports: [GiftlistItemComponent],
  templateUrl: './giftlist.component.html'
})

export class GiftlistComponent { 
  gifs = input.required<Gif[]>();
}

import { Component, input } from '@angular/core';

@Component({
  selector: 'giftlist-item',
  imports: [],
  templateUrl: './giftlist-item.component.html'
})

export class GiftlistItemComponent { 
  imageUrl = input.required<string>();
}

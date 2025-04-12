import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifService } from '../../services/gifs.service';
import { GiftlistComponent } from "../../components/giftlist/giftlist.component";

@Component({
  selector: 'app-gif-history',
  imports: [GiftlistComponent],
  templateUrl: './gif-history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryComponent {

  gifService = inject(GifService)

  query = toSignal(
    inject(ActivatedRoute).params.pipe(map(params => params['query'] ?? 'No Query')
  ))

  gifsByKey = computed(() =>  this.gifService.getHistoryGifs(this.query()))
 }

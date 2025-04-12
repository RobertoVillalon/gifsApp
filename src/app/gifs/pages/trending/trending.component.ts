import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/gifs.service';
import { ScrollStateService } from '../../../shared/scroll-state.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingComponent implements AfterViewInit{
  
  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState()
  }

  gifService = inject(GifService)
  scrollStateService = inject(ScrollStateService)
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv')

  onScroll($event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;

    if(!scrollDiv) return

    const scrollTop = scrollDiv.scrollTop;
    const clientHeigth = scrollDiv.clientHeight
    const scrollHeigth = scrollDiv.scrollHeight;

    const isABottom = scrollTop + clientHeigth + 300 >= scrollHeigth;

    this.scrollStateService.trendingScrollState.set(scrollTop)

    if(isABottom){
      this.gifService.loadTrendingGifs()
    }
  }

  
 }

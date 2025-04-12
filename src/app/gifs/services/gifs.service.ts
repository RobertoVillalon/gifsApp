import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { environment } from '@environments/environment';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({providedIn: 'root'})
export class GifService {
    private http = inject(HttpClient)
    trendingGifs = signal<Gif[]>([]);
    searchGift = signal<Gif[]>([]);
    searchHistory = signal<Record<string, Gif[]>>({})
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()))
    private trendingGifsLoading = signal(false);
    private trendingPage = signal(0)
    
    trendingGifsGroup = computed<Gif[][]>(() => {
        const groups: Gif[][] = []

        for (let i = 0; i < this.trendingGifs().length; i+=3) {
            groups.push(this.trendingGifs().slice(i, i + 3))
        }

        return groups;
    })

    constructor(){
        this.loadTrendingGifs()
        this.loadSearch()
    }

    loadTrendingGifs(){

        if(this.trendingGifsLoading()) return;

        this.trendingGifsLoading.set(true)

        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20,
                offset: this.trendingPage() * 20
            }
        }).subscribe((response) => {
            const gifs = GifMapper.mapGhiphyItemToGifArray(response.data)
            this.trendingGifs.update((currentGifs) => [...currentGifs, ...gifs])
            this.trendingPage.update((current) => current + 1)
            this.trendingGifsLoading.set(false)
        })
    }

    loadSearchGift(query: string){
        return this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
            params: {
                q: query,
                api_key: environment.giphyApiKey,
                limit: 20
            }
        }).pipe(map(({data}) => data), map((items) => 
            GifMapper.mapGhiphyItemToGifArray(items)), tap(items => {
                this.searchHistory.update(history => ({...history, [query.toLowerCase()]: items}))
                this.saveSearch()
        }))
    }

    getHistoryGifs(query: string){
        return this.searchHistory()[query] ?? []
    }

    saveSearch(){
        localStorage.setItem('search', JSON.stringify(this.searchHistory()))
    }

    loadSearch(){
        let searchHistory = localStorage.getItem('search') ?? []
        if(typeof searchHistory == 'string')
            this.searchHistory.set(JSON.parse(searchHistory))
    }

}
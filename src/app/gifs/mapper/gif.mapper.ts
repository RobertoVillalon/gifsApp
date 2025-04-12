import { Gif } from "../interfaces/gif.interface";
import { Giphyitem } from "../interfaces/giphy.interfaces";

export class GifMapper{
    static mapGhiphyItemToGif(giphyItem: Giphyitem): Gif {
        return {
            id: giphyItem.id,
            title: giphyItem.title,
            url: giphyItem.images.original.url
        };
    }

    static mapGhiphyItemToGifArray(items: Giphyitem[]): Gif[] {
        return items.map(this.mapGhiphyItemToGif)
    }
}
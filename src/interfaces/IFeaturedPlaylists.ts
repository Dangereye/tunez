// Interfaces
import { IPlaylistItem } from './PlayListItem';

export interface IFeaturedPlaylists {
  message: string;
  playlists: {
    href: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
    items: IPlaylistItem[];
  };
}

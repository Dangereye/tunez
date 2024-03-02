// Services
import { base_url, GETRequestOptions } from './options';

export async function getFeaturedPlaylists(token: string) {
  if (token) {
    const options = GETRequestOptions(token);

    const res = await fetch(`${base_url}/browse/featured-playlists`, options);

    const data = await res.json();

    return data;
  }

  return;
}

export async function getPlaylist(
  token: string,
  playlistId: string | undefined
) {
  if (token && playlistId) {
    const options = GETRequestOptions(token);

    const res = await fetch(`${base_url}/playlists/${playlistId}`, options);

    const data = await res.json();

    return data;
  }

  return;
}

export async function getPlaylistCoverImage(
  token: string,
  playlistId: string | undefined
) {
  if (token && playlistId) {
    const options = GETRequestOptions(token);

    const res = await fetch(
      `${base_url}/playlists/${playlistId}/images`,
      options
    );

    const data = await res.json();

    return data;
  }

  return;
}

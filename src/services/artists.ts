// Services
import { base_url, GETRequestOptions } from './options';

export async function getArtist(token: string, artistId: string) {
  if (token && artistId) {
    const options = GETRequestOptions(token);

    const res = await fetch(`${base_url}/artists/${artistId}`, options);

    const data = await res.json();

    return data;
  }

  return;
}

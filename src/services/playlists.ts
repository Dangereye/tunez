export async function getFeaturedPlaylists(token: string) {
  if (token) {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await fetch(
      'https://api.spotify.com/v1/browse/featured-playlists',
      options
    );

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
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      options
    );

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
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    const res = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/images`,
      options
    );

    const data = await res.json();

    return data;
  }

  return;
}

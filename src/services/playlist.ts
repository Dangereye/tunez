export async function getPlaylist(
  token: string,
  playlistId: string | undefined
) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  if (playlistId) {
    const res = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      options
    );

    const data = await res.json();

    return data;
  }
}

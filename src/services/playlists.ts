export async function getFeaturedPlaylists(token: string) {
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

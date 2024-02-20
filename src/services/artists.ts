export async function getArtist(token: string, artistId: string) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}`,
    options
  );

  const data = await res.json();

  return data;
}

export const base_url = 'https://api.spotify.com/v1';

export function GETRequestOptions(token: string) {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  return options;
}

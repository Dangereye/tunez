const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },

  body: `grant_type=client_credentials&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`,
};
export async function getToken() {
  const res = await fetch('https://accounts.spotify.com/api/token', options);

  const data = await res.json();

  if (!res.ok) return { statusText: 'error', status: res.status, ...data };

  return { statusText: 'success', status: res.status, ...data };
}

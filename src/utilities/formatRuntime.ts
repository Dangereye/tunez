export function formatRuntime(ms: number | undefined) {
  if (ms) {
    let s = Math.floor(ms / 1000);
    let m = Math.floor(s / 60);
    s = s % 60;
    let h = Math.floor(m / 60);
    m = m % 60;
    h = h % 60;

    const hrs = h > 0 ? `${h}:` : '';
    const mins = h > 0 && m > 0 && m < 10 ? `0${m}:` : m > 0 ? `${m}:` : '';
    const secs = s > 0 && s < 10 ? `0${s}` : s > 0 ? `${s}` : '00';

    return `${hrs}${mins}${secs}`;
  }

  return `00:00`;
}

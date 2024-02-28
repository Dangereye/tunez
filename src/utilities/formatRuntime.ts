export function formatRuntime(millis: number | undefined) {
  if (millis) {
    const date = new Date(millis);
    const hrs = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const mins =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const secs =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${hrs}:${mins}:${secs}`;
  }
  return millis;
}

export function formatNumber(num: number | undefined) {
  if (num) {
    return num.toLocaleString();
  } else return num;
}

export function formatDate(date: string | undefined) {
  if (date) {
    const newDate = new Date(date);

    return `${newDate.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })}`;
  }

  return;
}

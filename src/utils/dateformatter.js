export function formatDate(dateStr) {
  const options = { day: 'numeric', month: 'short' };
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', options);
}

export const getFormattedDate = (date) => {
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}

export function getStructuredDate(date) {
  let twoDigitsDate = date.getDate().toString();
  let twoDigitsMonth = (date.getMonth() + 1).toString();

  if (twoDigitsDate.length === 1) twoDigitsDate = `0${twoDigitsDate}`;

  if (twoDigitsMonth.length === 1)
    twoDigitsMonth = "0" + String(twoDigitsMonth);

  return `${date.getFullYear()}-${twoDigitsMonth}-${twoDigitsDate}`;
}

/* to 2012/11/04 */
export const toDate = (t) => {
  return new Date(t).toLocaleDateString()
}

/* to 2022/2/28 16:00  */
export const toDateAndTime = (t) => {
  return new Date(t).toLocaleString('roc', {
    timeZone: 'UTC',
    hour12: false,
    dateStyle: 'long',
    timeStyle: 'short',
  })
}

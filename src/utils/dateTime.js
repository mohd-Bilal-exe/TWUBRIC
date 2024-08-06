export function formatTime(timestamp) {
  const date = new Date(timestamp);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strMinutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + strMinutes + ampm;
}
export function formatDate(timestamp) {
  // Convert the Unix timestamp (seconds) to milliseconds
  const date = new Date(timestamp * 1000);

  // Format the date to "Month Day, Year"
  const options = { year: "numeric", month: "short", day: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return formattedDate;
}

export function getCurrentDateAsString(): string {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
  const day = ("0" + currentDate.getDate()).slice(-2);

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function getFriendlyDateString(date: string): string {
  const dateArray = date.split("-");
  const month = Number(dateArray[1]);
  const day = Number(dateArray[2]);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayOfWeek = days[new Date(date).getDay()];
  const monthName = months[month - 1];

  return `${dayOfWeek}, ${monthName} ${day}`;
}

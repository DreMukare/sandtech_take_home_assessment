export function numberOfDaysInMonth(year: number, month: number): number {
  if (month === 2) {
    return year % 4 === 0 ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}

export function lastDayInMonth(day: number, month: number, year: number) {
  const daysInMonth = numberOfDaysInMonth(year, month);

  return day === daysInMonth;
}

export function getSevenDaysFromDay(day: number, month: number, year: number) {
  if (day > 31 || month > 12) {
    throw new Error("Invalid date");
  }

  let currentDay = day;
  let currentMonth = month;
  let currentYear = year;

  const daysInMonth = numberOfDaysInMonth(year, month);
  const result = [];

  // TODO: Refactor this so that I account for the next month when calculating the next seven days
  for (let i = 0; i < 7; i++) {
    if (currentDay > daysInMonth) {
      currentDay = 1;
      currentMonth++;
      if (currentMonth > 12) {
        currentMonth = 1;
        currentYear++;
      }
    }
    result.push({ day: currentDay, month: currentMonth, year: currentYear });
    currentDay++;
  }

  return result.map((date) =>
    constructDateString(date.day, date.month, date.year)
  );
}

export function constructDateString(day: number, month: number, year: number) {
  const dayString = day < 10 ? `0${day}` : `${day}`;
  const monthString = month < 10 ? `0${month}` : `${month}`;

  return `${year}-${monthString}-${dayString}`;
}

export function getDayMonthAndYearFromDate(date: string) {
  const day = Number(date.split("-")[2]);
  const month = Number(date.split("-")[1]);
  const year = Number(date.split("-")[0]);

  return {
    day,
    month,
    year,
  };
}

function numberOfDaysInMonth(year: number, month: number) {
  if (month === 2) {
    return year % 4 === 0 ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}

export function getSevenDaysFromDay(day: number, month: number, year: number) {
  const daysInMonth = numberOfDaysInMonth(year, month);
  const sevenDays = [];

  for (let i = 0; i < 7; i++) {
    if (day + i <= daysInMonth) {
      sevenDays.push(day + i);
    } else {
      sevenDays.push(day + i - daysInMonth);
    }
  }

  return constructDateString(sevenDays[sevenDays.length - 1], month, year);
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

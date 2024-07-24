function testDayValues(day: number) {
  if (day > 31 || day < 1) {
    throw new Error(
      "Invalid day value: Cannot be greater than 31 or less than 1"
    );
  }
}
function testMonthValues(month: number) {
  if (month > 12 || month < 1) {
    throw new Error(
      "Invalid month value: Cannot be greater than 12 or less than 1"
    );
  }
}

export function numberOfDaysInMonth(year: number, month: number): number {
  testMonthValues(month);

  if (month === 2) {
    return year % 4 === 0 ? 29 : 28;
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}

export function lastDayInMonth(day: number, month: number, year: number) {
  testDayValues(day);
  testMonthValues(month);

  const daysInMonth = numberOfDaysInMonth(year, month);

  return day === daysInMonth;
}

export function getSevenDaysFromDay(day: number, month: number, year: number) {
  testDayValues(day);
  testMonthValues(month);

  let currentDay = day;
  let currentMonth = month;
  let currentYear = year;

  const daysInMonth = numberOfDaysInMonth(year, month);
  const result = [];

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
  testDayValues(day);
  testMonthValues(month);

  const dayString = day < 10 ? `0${day}` : `${day}`;
  const monthString = month < 10 ? `0${month}` : `${month}`;

  return `${year}-${monthString}-${dayString}`;
}

export function getDayMonthAndYearFromDate(date: string) {
  const day = Number(date.split("-")[2]);
  const month = Number(date.split("-")[1]);
  const year = Number(date.split("-")[0]);

  testDayValues(day);
  testMonthValues(month);

  return {
    day,
    month,
    year,
  };
}
export function getCurrentDateAsString(): string {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-indexed
  const day = ("0" + currentDate.getDate()).slice(-2);

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}

export function validateDate(date: string): boolean {
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;

  if (dateRegex.test(date)) {
    const day = Number(date.split("-")[2]);
    const month = Number(date.split("-")[1]);
    const year = Number(date.split("-")[0]);
    const daysInMonth = numberOfDaysInMonth(year, month);

    if (day > daysInMonth || day < 1) return false;

    if (month > 12 || month < 1) return false;

    return true;
  }

  return false;
}

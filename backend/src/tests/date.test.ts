import {
  constructDateString,
  getCurrentDateAsString,
  getSevenDaysFromDay,
  lastDayInMonth,
  numberOfDaysInMonth,
  validateDate,
} from "../utils/helperFuncs/date";

describe("Tests for date.ts utility functions", () => {
  describe("When given a year and month value numberOfDaysInMonth", () => {
    const month = 1;
    const month2 = 2;
    const month3 = 4;
    const year = 2024;
    const year1 = 2023;

    test("should return the correct number of days in that month", () => {
      expect(numberOfDaysInMonth(year, month)).toBe(31);
      expect(numberOfDaysInMonth(year, month2)).toBe(29);
      expect(numberOfDaysInMonth(year1, month2)).toBe(28);
      expect(numberOfDaysInMonth(year, month3)).toBe(30);
    });

    test("should throw an error for invalid month values", () => {
      expect(() => numberOfDaysInMonth(year, 0)).toThrow(Error);
      expect(() => numberOfDaysInMonth(year, 13)).toThrow(Error);
    });
  });

  describe("When given a day, month, and year lastDayInMonth", () => {
    test("should return true if the day is the last day of the month", () => {
      expect(lastDayInMonth(31, 1, 2022)).toBe(true);
      expect(lastDayInMonth(29, 2, 2024)).toBe(true);
      expect(lastDayInMonth(28, 2, 2023)).toBe(true);
      expect(lastDayInMonth(30, 4, 2022)).toBe(true);
      expect(lastDayInMonth(29, 4, 2022)).toBe(false);
      expect(lastDayInMonth(31, 4, 2022)).toBe(false);
    });

    test("should throw an error for invalid day values", () => {
      expect(() => lastDayInMonth(32, 1, 2022)).toThrow(Error);
      expect(() => lastDayInMonth(0, 1, 2022)).toThrow(Error);
    });

    test("should throw an error for invalid month values", () => {
      expect(() => lastDayInMonth(31, 0, 2022)).toThrow(Error);
      expect(() => lastDayInMonth(31, 13, 2022)).toThrow(Error);
    });
  });

  describe("When given a day, month, and year getSevenDaysFromDay", () => {
    test("should return an array of seven days from the given day", () => {
      const day = 23;
      const month = 7;
      const year = 2024;
      expect(getSevenDaysFromDay(day, month, year)).toEqual([
        "2024-07-23",
        "2024-07-24",
        "2024-07-25",
        "2024-07-26",
        "2024-07-27",
        "2024-07-28",
        "2024-07-29",
      ]);
    });

    test("should throw an error for invalid day values", () => {
      expect(() => getSevenDaysFromDay(32, 1, 2022)).toThrow(Error);
      expect(() => getSevenDaysFromDay(0, 1, 2022)).toThrow(Error);
    });

    test("should throw an error for invalid month values", () => {
      expect(() => getSevenDaysFromDay(31, 0, 2022)).toThrow(Error);
      expect(() => getSevenDaysFromDay(31, 13, 2022)).toThrow(Error);
    });
  });

  describe("When given a day, month, and year constructDateString", () => {
    test("should return a string in the format yyyy-mm-dd", () => {
      const day = 23;
      const month = 7;
      const year = 2024;
      expect(constructDateString(day, month, year)).toBe("2024-07-23");
    });

    test("should throw an error for invalid day values", () => {
      expect(() => constructDateString(32, 1, 2022)).toThrow(Error);
      expect(() => constructDateString(0, 1, 2022)).toThrow(Error);
    });

    test("should throw an error for invalid month values", () => {
      expect(() => constructDateString(31, 0, 2022)).toThrow(Error);
      expect(() => constructDateString(31, 13, 2022)).toThrow(Error);
    });
  });

  describe("when given date as a string validateDate", () => {
    test("should return true if date is valid", () => {
      expect(validateDate("2024-07-24")).toEqual(true);
      expect(validateDate(getCurrentDateAsString())).toEqual(true);
    });

    test("should return false if date is invalid", () => {
      const invalidDate = "2024-07-32";
      const invalidFormat = "2024/07/24";

      expect(validateDate(invalidDate)).toEqual(false);
      expect(validateDate(invalidFormat)).toEqual(false);
      expect(validateDate("2024-0")).toEqual(false);
      expect(validateDate("2024-0-1")).toEqual(false);
    });

    // TODO: Fix this test
    // test("should throw an error if month or day out of range", () => {
    //   const outOfRangeDay = "2024-07-00";
    //   const outOfRangeMonth = "2024-00-32";

    //   expect(validateDate(outOfRangeDay)).toBe(false);
    //   expect(validateDate(outOfRangeMonth)).toBe(false);
    // });
  });
});

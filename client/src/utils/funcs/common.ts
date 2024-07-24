export function storeObjInLocalStorage(key: string, obj: any) {
  const currentData = localStorage.getItem(key);

  if (currentData) {
    const parsedData = JSON.parse(currentData);
    localStorage.setItem(key, JSON.stringify({ ...parsedData, ...obj }));
  } else {
    localStorage.setItem(key, JSON.stringify(obj));
  }
}

export function checkForSpecificDateInCache(key: string, date: string) {
  const cachedData = localStorage.getItem(key);

  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    const specificDateData = parsedData.find((data: any) => data.date === date);
    return specificDateData;
  } else {
    return null;
  }
}

const fetchData = async (url: string) => {
  const response = await fetch(url);
  const parsedResponse = await response.json();
  return parsedResponse;
};

export default fetchData;

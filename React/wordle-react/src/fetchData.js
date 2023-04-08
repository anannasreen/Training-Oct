const fetchData = async () => {
  const response = await fetch("./words.json");
  const parsedResponse = await response.json();
  return parsedResponse;
};

export default fetchData;

export async function fetchParks() {
  const apiKey = process.env.API_KEY;

  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=WA&limit=50&api_key=${apiKey}`
  );

  const result = await response.json();
  return result.data;
}

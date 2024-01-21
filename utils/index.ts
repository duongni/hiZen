const apiKey = process.env.API_KEY;

export async function fetchParks() {
  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?stateCode=WA&limit=50&api_key=${apiKey}`
  );

  const result = await response.json();
  return result.data;
}
export async function fetchCamps() {
  const response = await fetch(
    `https://developer.nps.gov/api/v1/campgrounds?stateCode=WA&limit=50&api_key=${apiKey}`
  );

  const result = await response.json();
  return result.data;
}

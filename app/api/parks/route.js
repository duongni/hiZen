export async function GET() {
  try {
    const apiKey = process.env.API_KEY;
    const res = await fetch(
      `https://developer.nps.gov/api/v1/parks?limit=100&api_key=${apiKey}`
    );

    if (!res.ok) {
      // If the response status is not ok (e.g., 404 or 500), throw an error
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return Response.json({ data });
  } catch (error) {
    // Handle the error, log it, or return a default value
    console.error("Error fetching data:", error.message);

    // You might want to return a default response or throw the error again based on your use case
    // return Response.json({ error: 'Failed to fetch data' });
    throw error;
  }
}

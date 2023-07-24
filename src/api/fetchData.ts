export default async function fetchData(uri: string): Promise<unknown> {
  try {
    const request = await fetch(uri);

    if (request.ok) {
      const response = await request.json();
      return response;
    } else throw Error("error fetching data 😕😕");
  } catch (error) {
    throw error;
  }
};
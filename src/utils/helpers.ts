
const baseURL = "https://674895ea5801f515359188c9.mockapi.io/api/lalasia"

export const fetcher = async (endpoint: string) => {
  const response = await fetch(`${baseURL}/${endpoint}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

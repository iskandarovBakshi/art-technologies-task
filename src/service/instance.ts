const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function get(path: string, config?: RequestInit) {
  const response = await fetch(`${baseUrl}${path}`, {
    method: "GET",
    ...config,
  });
  const text = await response.text();
  const data = text && JSON.parse(text);
  let error = null;
  if (!response.ok) {
    error = {
      message: (data && data.detail) || response.statusText,
      status: data.status,
    };
  }
  return {
    response: data,
    error,
  };
}

export default async function useHttpController(url, headers, body) {
  try {
    const res = await fetch(url, {
      headers: headers,
      body: body,
    });
    if (res) {
      const response = await res.json();
      return response;
    }
  } catch (err) {
    return { error: true, message: err.message };
  }
}

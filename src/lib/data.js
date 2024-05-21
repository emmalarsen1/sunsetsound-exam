const endPoint = "http://localhost:8080/";

export async function getData(param) {
  const res = await fetch(endPoint + param);
  return await res.json();
}

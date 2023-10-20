export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let y = weakMap.get(endpoint) || 0;

  y += 1;

  weakMap.set(endpoint, y);

  if (y >= 5) throw Error('Endpoint load is high');

  return y;
}

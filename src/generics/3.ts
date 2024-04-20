function merge<T = any, U = any>(objA: T, objB: U): T & U {
  return Object.assign({}, objA, objB);
}

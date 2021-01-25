const getElementLabel = <T, K extends keyof T>(names: T, key: K): T[K] =>
  names[key];

export default getElementLabel;

const createId = ():string =>
  `id${window.crypto
    .getRandomValues(new Uint32Array(1))[0]
    .toString(16)}-${(+new Date()).toString(16)}`;

export default createId;

module.exports = (...args) => {
  const smth = [];

  let res = 0;
  if (typeof args === 'function') {
    for (let i = 1; i < smth.length; i++) {
      if (res === 0) {
        res = args(smth[0], smth[i]);
      } else {
        res = args(res, smth[i]);
      }
    }
  } else {
    args.forEach((el) => {
      smth.push(el);
    });
  }
  return function (...args) {};
};

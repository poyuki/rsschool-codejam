module.exports = (array) => {
  const res = [];
  array.forEach((el, index, arr) => {
    let reduce = 0;
    for (let i = 0; i < arr.length; i++) {
      if (array[i] !== el) reduce += array[i];
    }
    res.push(reduce);
  });
  return res;
};

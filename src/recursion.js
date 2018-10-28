const recursion = (tree) => {
  const res = [];
  res.push(tree.value);

  if (tree.left) {
    const left = recursion(tree.left);
  }
  if (tree.right) {
    const right = recursion(tree.right);
  }

  return res;
};

module.exports = recursion;

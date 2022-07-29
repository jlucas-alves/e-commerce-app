const { categories, products } = require("../db");

exports.Query = {
  products: () => {
    return products;
  },
  product: (parent, args, context) => {
    const productId = args.id;
    return products.find((product) => product.id === productId);
  },
  categories: () => {
    return categories;
  },
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};

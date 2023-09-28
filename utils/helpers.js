module.exports = {
    format_date: (date) => {
        return date.toLocaleDateString();
      },

    get_category_one: async (array) => {
      const products = await array.filter((product) => product.category_id === 8);
      console.log(products);
      return products;
    }
}
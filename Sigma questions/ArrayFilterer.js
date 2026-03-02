/**
 * *Product dataset
 * *Each object represents a single product entity.
 *
 * @typedef {Object} Product
 * @property {number} id - Unique identifier of the product
 * @property {string} name - Product name
 * @property {string} category - Product category
 * @property {number} price - Product price
 */

const products = [
  { id: 1, name: "Focus Mobile", category: "Electronic", price: 120 },
  { id: 2, name: "Light T.V.", category: "Electronic", price: 99 },
  { id: 3, name: "T-shirt", category: "Fashion", price: 40 },
  { id: 4, name: "Jeans", category: "Fashion", price: 45 },
  { id: 5, name: "Wooden Table", category: "Furniture", price: 70 },
  { id: 6, name: "Lime Juice Bottles", category: "Beverage", price: 50 },
];

/**
 * *Filters products based on dynamic filter criteria.
 *
 * @param {Product[]} products - Array of product objects
 * @param {Object} filters - Filtering conditions (optional keys: id, name, category, price)
 * @returns {Product[]} Filtered array of matching products
 * @throws {Error} If filters object is not provided
 *
 * * Design Notes:
 * *- Uses Array.prototype.filter() for immutable operations
 * *- Supports partial filtering (only provided keys are evaluated)
 * *- Category comparison is case-insensitive
 * *- Strict equality is used for exact matches
 */
function filterProducts(products, filters) {
  if (filters === undefined) {
    throw new Error("Filters object is required.");
  }

  return products.filter((product) => {
    // ?Match by ID (exact match)
    if (filters.id !== undefined && product.id !== filters.id) {
      return false;
    }

    // ?Match by Name (exact match)
    if (filters.name !== undefined && product.name !== filters.name) {
      return false;
    }

    // ?Match by Category (case-insensitive comparison)
    if (
      filters.category !== undefined &&
      product.category.toLowerCase() !== filters.category.toLowerCase()
    ) {
      return false;
    }

    // ?Match by Price (exact numeric match)
    if (filters.price !== undefined && product.price !== filters.price) {
      return false;
    }

    // ?Product passes all provided filter conditions
    return true;
  });
}

// *Example Usage
console.log(filterProducts(products, { category: "fashion" }));

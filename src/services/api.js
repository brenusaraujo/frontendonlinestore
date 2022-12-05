export async function getCategories() {
  const data = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await data.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const dataCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await dataCategory.json();
  return response;
}

// https://api.mercadolibre.com/sites/MLB/search? q=$QUERY
// https://api.mercadolibre.com/sites/MLB/search? category=$CATEGORY_ID
// https://api.mercadolibre.com/sites/MLB/search? category=$CATEGORY_ID&q=$QUERY

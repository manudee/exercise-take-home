// Note: the generic type parameters P and C are used to represent the types of the product and category, respectively
export interface ProductService<P> {
  // Get all products of TestMart
  // API endpoint to get data: https://dummyjson.com/products
  getAllProducts(): Promise<P[]>;

  // Get all products of TestMart using parameters
  // API endpoint to get data: https://dummyjson.com/products?limit={limit}&skip={skip}&select={comma separated fields of product}
  // getAllProducts(limit: number, skip: number, ...fields: string[]): P[];

  // Get a single product
  // API endpoint to get data: https://dummyjson.com/products/{productId}
  getProduct(productId: number): Promise<P>;

  // Search for products in TestMart
  // API endpoint to get data: https://dummyjson.com/products/search?q={query}
  // searchProducts(query: string): P[];

  // Get all products categories in TestMart
  // API endpoint to get data: https://dummyjson.com/products/categories
  // getCategories(): C[];

  // Get all products of a category
  // API endpoint to get data: https://dummyjson.com/products/category/{categoryName}
  // getProductsByCategory(categoryName: string): P[];
}


class RegularProduct<P> implements ProductService<P> {
  
  async getProduct(productId: number): Promise<P> {
    
    try {
      const response = await fetch("https://dummyjson.com/products/" + productId);
      const data = await response.json();
      return data as P;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

  async getAllProducts(): Promise<P[]>{
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      return data.products as P[];
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }

  } 
}

export default RegularProduct;
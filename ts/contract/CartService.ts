export interface Cart {
    id: number;
    total: number;
    products: Product[];
    discountedTotal: number;
    userId: number;
    totalProducts: number;
    totalQuantity:number;

}

export interface Product {
  id: number;
  title: string;
  rating: number;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedPrice:number;
  images: string[];

}

export interface CartService<T> {



  // Get all carts of TestMart
  // API endpoint to get data: https://dummyjson.com/carts
  // getAllCarts(): T[];

  // getCartWithHighestTotal(): T;
  // getCartWithLowestTotal(): T;

  // // Get a single cart
  // // API endpoint to get data: https://dummyjson.com/carts/{cartId}
  // getCart(cartId: number): T;

  // Get carts of a user
  // API endpoint to get data: https://dummyjson.com/carts/user/{userId}
  getUserCarts(userId: number): Promise<T[]>;
}


class RegularCart<T> implements CartService<T> {
  
  async getUserCarts(userId: number): Promise<T[]> {
    
    try {
      const response = await fetch("https://dummyjson.com/carts/user/" + userId);
      const data = await response.json();
      return data.carts as T[];
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }

    // return fetch("https://dummyjson.com/carts/user/" + userId)
    // .then(response => response.json())
    // .then(data => {
    //   console.log(data)
    //   return data;
    // })

    // try {
    //   const response = await fetch("https://dummyjson.com/carts/user/" + userId);
    //   const data = await response.json();
    //   return data.carts;
    // } catch (error) {
    //   console.error('Error fetching data:', error);
    //   throw error;
    // }
  }
}


export default RegularCart;


  


 
  

  
  
  
  



import { CartService,Cart, Product} from '../contract/CartService'
import RegularCart from '../contract/CartService'
import RegularProduct from '../contract/ProductService'

import { ProductService } from '../contract/ProductService'
import { UserService } from '../contract/UserService'

// Note: Convert this class to concrete class and add implementation (missing body) to all functions. You will remove the word
// `Abstract` from everywhere. This class is only kept `abstract` for the sake of interview exercise.
class TestMartAppFeatures {
  

  /**
   * Prints the titles of all products that have a rating less than or equal to the provided criteria.
   * @param rating The rating threshold.
   */
    async getProductTitlesByWorseRating(rating: number): Promise<void> {
      
      const productObj = new RegularProduct<Product>();

      try {
        const allProducts = await productObj.getAllProducts();
        console.log(" ######### Product Titles By Worse Rating Start #######")

        for(let product of allProducts){
          if(product.rating <= rating){
            console.log(product.title);
          }
        }
        console.log(" $$$$$$$$$ Product Titles By Worse Rating End $$$$$$$$")
        console.log(" ")

      } catch(error){
          console.error('Error:', error);

       }
      
    }
      


  /**
   * Returns the cart with the highest total value.
   * @returns The cart with the highest total value.
   */
   async getCartWithHighestTotal(): Promise<Cart> {
      
      const regularCart = new RegularCart<Cart>();
      try {
        const userCarts = await regularCart.getAllCarts();
        // return userCarts;
        const cartWithHighestTotal:Cart = userCarts.reduce((maxObj:Cart,obj:Cart)=> {
            return obj.total > maxObj.total ? obj : maxObj;
          }, userCarts[0])
      
          return cartWithHighestTotal;
      } catch(error){
        console.error('Error:', error);

      }
    //return this when api has an issue and no highest total cart found
    const default_cart = {"id":1,"products":[],"total":1,"discountedTotal":1,"userId":1,"totalProducts":1,"totalQuantity":1}
    return default_cart;
}
  

  /**
   * Returns the cart with the lowest total value.
   * @returns The cart with the lowest total value.
   */
    async getCartWithLowestTotal():Promise<Cart> {

      const regularCart = new RegularCart<Cart>();
      try {
        const userCarts = await regularCart.getAllCarts();
        // return userCarts;
        const cartWithLowestTotal:Cart = userCarts.reduce((minObj:Cart,obj:Cart)=> {
            return obj.total < minObj.total ? obj : minObj;
          }, userCarts[0])
      
          return cartWithLowestTotal;
      } catch(error){
        console.error('Error:', error);

      }
    //return this when api has an issue and no lowest total cart found
    const default_cart = {"id":1,"products":[],"total":1,"discountedTotal":1,"userId":1,"totalProducts":1,"totalQuantity":1}
    return default_cart;

  //     fetch('https://dummyjson.com/carts')
  //   .then(response => response.json())
  //   .then(data => {
  //     // JSON Response data processing
  //     const allCarts = data.carts;
  
  //     const cartWithLowestTotal:Cart = allCarts.reduce((minObj:Cart,obj:Cart)=> {
  //         return obj.total < minObj.total ? obj: minObj;
  //     }, allCarts[0])
  
      
  //     console.log(cartWithLowestTotal);
  //     return cartWithLowestTotal;
  
  // }).catch(error => {
  //   console.error("Get All Carts API request failed:", error);
  //   throw error;
  // });
  return {"id":1,"products":[],"total":1,"discountedTotal":1,"userId":1,"totalProducts":1,"totalQuantity":1}
}

  /**
   * Enriches the product information in a user's cart by adding product images.
   * The current product information in a cart has limited fields.
   * This method adds the `images` field for each product in a given user's cart.
   * Note: This method only applies to the first element from the `carts[]` JSON response.
   * @param userId The ID of the user whose cart's product information will be enriched.
   * @returns A list of products with enriched information in the user's cart.
   */
    async addProductImagesToUserCart(userId: number): Promise<any> {

      
        const regularCart = new RegularCart<Cart>();
        try {
          
          const userCarts = await regularCart.getUserCarts(userId);
          const user_products = userCarts[0].products


          const product_ids = [];
          for(let product of user_products){
            product_ids.push(product.id)
          }
          const regularProduct = new RegularProduct<Product>();

          for(let id of product_ids){
            const product_response = regularProduct.getProduct(id)
            const imagesForProduct = (await product_response).images

            for(let productVal of user_products){
              if(id == productVal.id){
                productVal.images = imagesForProduct
              }
            }
            
    

          }
          return user_products;


        } catch(error){
          console.error('Error:', error);
  
        }

        

    
    }
      
  
  }
    


const TestMart = new TestMartAppFeatures();

//Worst Rating
TestMart.getProductTitlesByWorseRating(4.5);


//Cart with highest total
TestMart.getCartWithHighestTotal().then(function(HighestValue){
  console.log(" ")
  console.log(" ######### Cart with the Highest total Start #######")
  console.log(HighestValue)
  console.log(" $$$$$$$$$$ Cart with the Highest total End $$$$$$$$$$")
  console.log(" ")

})



//Cart with lowest total
TestMart.getCartWithLowestTotal().then(function(LowestValue){
  console.log(" ")
  console.log(" ######### Cart with the lowest total #######")
  console.log(LowestValue);
  console.log(" $$$$$$$$$$ Cart with the lowest total End $$$$$$$$$$")
  console.log(" ")
})




//Adding Product images to the user
TestMart.addProductImagesToUserCart(1).then(function(productImagesToTheuser){
  console.log(" ")
  console.log(" ######### Adding Product Images to the user Start #######")
  console.log(productImagesToTheuser);
  console.log(" $$$$$$$$$$ Adding Product Images to the user End $$$$$$$$$$")
  console.log(" ")

})




export default TestMartAppFeatures;
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CartService_1 = __importDefault(require("../contract/CartService"));
// Note: Convert this class to concrete class and add implementation (missing body) to all functions. You will remove the word
// `Abstract` from everywhere. This class is only kept `abstract` for the sake of interview exercise.
class TestMartAppFeatures {
    /**
     * Prints the titles of all products that have a rating less than or equal to the provided criteria.
     * @param rating The rating threshold.
     */
    getProductTitlesByWorseRating(rating) {
        console.log("Get product titles by worse ratings");
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then(data => {
            const products = data.products;
            for (let product of products) {
                if (product.rating <= rating) {
                    console.log(product.title);
                }
            }
        }).catch(error => {
            console.log("Get all carts api request failed", error);
            throw error;
        });
    }
    /**
     * Returns the cart with the highest total value.
     * @returns The cart with the highest total value.
     */
    getCartWithHighestTotal() {
        // const regularCart = new RegularCart<number[]>();
        // try {
        //   const userCarts = await regularCart.getUserCarts(1);
        //   console.log(userCarts)
        //   return userCarts;
        // } catch(error){
        //   console.error('Error:', error);
        // }
        fetch('https://dummyjson.com/carts')
            .then(response => response.json())
            .then(data => {
            //JSON Response data processing
            const allCarts = data.carts;
            const cartWithHighestTotal = allCarts.reduce((maxObj, obj) => {
                return obj.total > maxObj.total ? obj : maxObj;
            }, allCarts[0]);
            console.log(cartWithHighestTotal);
            return cartWithHighestTotal;
        }).catch(error => {
            console.log("Get all carts api request failed", error);
            throw error;
        });
        return { "id": 1, "products": [], "total": 1, "discountedTotal": 1, "userId": 1, "totalProducts": 1, "totalQuantity": 1 };
    }
    /**
     * Returns the cart with the lowest total value.
     * @returns The cart with the lowest total value.
     */
    getCartWithLowestTotal() {
        fetch('https://dummyjson.com/carts')
            .then(response => response.json())
            .then(data => {
            // JSON Response data processing
            const allCarts = data.carts;
            const cartWithLowestTotal = allCarts.reduce((minObj, obj) => {
                return obj.total < minObj.total ? obj : minObj;
            }, allCarts[0]);
            console.log(cartWithLowestTotal);
            return cartWithLowestTotal;
        }).catch(error => {
            console.error("Get All Carts API request failed:", error);
            throw error;
        });
        return { "id": 1, "products": [], "total": 1, "discountedTotal": 1, "userId": 1, "totalProducts": 1, "totalQuantity": 1 };
    }
    /**
     * Enriches the product information in a user's cart by adding product images.
     * The current product information in a cart has limited fields.
     * This method adds the `images` field for each product in a given user's cart.
     * Note: This method only applies to the first element from the `carts[]` JSON response.
     * @param userId The ID of the user whose cart's product information will be enriched.
     * @returns A list of products with enriched information in the user's cart.
     */
    addProductImagesToUserCart(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            const regularCart = new CartService_1.default();
            try {
                const userId = 1;
                const userCarts = yield regularCart.getUserCarts(userId);
                console.log(userCarts);
            }
            catch (error) {
                console.error('Error:', error);
            }
        });
    }
}
const TestMart = new TestMartAppFeatures();
// const HighestValue = TestMart.getCartWithHighestTotal()
// console.log(HighestValue)
// const LowestValue = TestMart.getCartWithLowestTotal()
// console.log(LowestValue)
// const worstRating = TestMart.getProductTitlesByWorseRating(4.5)
//TBD
const addImagesForTheUser = TestMart.addProductImagesToUserCart(1);
console.log(addImagesForTheUser);

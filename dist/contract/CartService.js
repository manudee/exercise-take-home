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
Object.defineProperty(exports, "__esModule", { value: true });
class RegularCart {
    getUserCarts(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch("https://dummyjson.com/carts/user/" + userId);
                const data = yield response.json();
                return data.carts;
            }
            catch (error) {
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
        });
    }
}
exports.default = RegularCart;

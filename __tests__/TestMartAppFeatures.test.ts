import TestMartAppFeatures from '../ts/app/AbstractTestMartAppFeatures'; 
import RegularProduct from '../ts/contract/ProductService'; // Import actual implementation
import RegularCart from '../ts/contract/CartService'; // Import actual implementation

jest.mock('../ts/contract/CartService');
jest.mock('../ts/contract/ProductService');

describe('TestMartAppFeatures with API calls', () => {
  let testMart: TestMartAppFeatures;

  beforeEach(() => {
    testMart = new TestMartAppFeatures();
  });

  it('should get product titles by worse rating for < 4.5', async () => {
    (RegularProduct.prototype.getAllProducts as jest.Mock).mockResolvedValue([
        {"id":45,"title":"Malai Maxi Dress","description":"Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff","price":50,"discountPercentage":5.07,"rating":4,"stock":96,"brand":"IELGY","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/45/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/45/1.jpg","https://i.dummyjson.com/data/products/45/2.webp","https://i.dummyjson.com/data/products/45/3.jpg","https://i.dummyjson.com/data/products/45/4.jpg","https://i.dummyjson.com/data/products/45/thumbnail.jpg"]},
        {"id":46,"title":"women's shoes","description":"Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber","price":40,"discountPercentage":16.96,"rating":5,"stock":72,"brand":"IELGY fashion","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/46/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/46/1.webp","https://i.dummyjson.com/data/products/46/2.jpg","https://i.dummyjson.com/data/products/46/3.jpg","https://i.dummyjson.com/data/products/46/4.jpg","https://i.dummyjson.com/data/products/46/thumbnail.jpg"]},
      ]);
  
  
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  
      await testMart.getProductTitlesByWorseRating(4.5);
  
      expect(consoleSpy).toHaveBeenCalledWith('Malai Maxi Dress');
      expect(consoleSpy).not.toHaveBeenCalledWith("women's shoes");
  
      consoleSpy.mockRestore();
  });


  it('should get product titles by worse rating for <= 4.5', async () => {
    (RegularProduct.prototype.getAllProducts as jest.Mock).mockResolvedValue([
        {"id":45,"title":"Malai Maxi Dress","description":"Ready to wear, Unique design according to modern standard fashion, Best fitting ,Imported stuff","price":50,"discountPercentage":5.07,"rating":4,"stock":96,"brand":"IELGY","category":"womens-dresses","thumbnail":"https://i.dummyjson.com/data/products/45/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/45/1.jpg","https://i.dummyjson.com/data/products/45/2.webp","https://i.dummyjson.com/data/products/45/3.jpg","https://i.dummyjson.com/data/products/45/4.jpg","https://i.dummyjson.com/data/products/45/thumbnail.jpg"]},
        {"id":46,"title":"women's shoes","description":"Close: Lace, Style with bottom: Increased inside, Sole Material: Rubber","price":40,"discountPercentage":16.96,"rating":4.5,"stock":72,"brand":"IELGY fashion","category":"womens-shoes","thumbnail":"https://i.dummyjson.com/data/products/46/thumbnail.jpg","images":["https://i.dummyjson.com/data/products/46/1.webp","https://i.dummyjson.com/data/products/46/2.jpg","https://i.dummyjson.com/data/products/46/3.jpg","https://i.dummyjson.com/data/products/46/4.jpg","https://i.dummyjson.com/data/products/46/thumbnail.jpg"]},
      ]);
  
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  
      await testMart.getProductTitlesByWorseRating(4.5);
  
      expect(consoleSpy).toHaveBeenCalledWith('Malai Maxi Dress');
      expect(consoleSpy).toHaveBeenCalledWith("women's shoes");
  
      consoleSpy.mockRestore();
  });


  it('should get cart with highest total', async () => {
    // Mocking the response of getAllCarts
    (RegularCart.prototype.getAllCarts as jest.Mock).mockResolvedValue([
        {"id":1,"products":[{"id":59,"title":"Spring and summershoes","price":20,"quantity":3,"total":60,"discountPercentage":8.71,"discountedPrice":55},{"id":88,"title":"TC Reusable Silicone Magic Washing Gloves","price":29,"quantity":2,"total":58,"discountPercentage":3.19,"discountedPrice":56},{"id":18,"title":"Oil Free Moisturizer 100ml","price":40,"quantity":2,"total":80,"discountPercentage":13.1,"discountedPrice":70},{"id":95,"title":"Wholesale cargo lashing Belt","price":930,"quantity":1,"total":930,"discountPercentage":17.67,"discountedPrice":766},{"id":39,"title":"Women Sweaters Wool","price":600,"quantity":2,"total":1200,"discountPercentage":17.2,"discountedPrice":994}],"total":2328,"discountedTotal":1941,"userId":97,"totalProducts":5,"totalQuantity":10},
        {"id":2,"products":[{"id":60,"title":"Spring and summershoes1","price":200,"quantity":30,"total":600,"discountPercentage":9,"discountedPrice":60},{"id":88,"title":"TC Reusable Silicone Magic Washing Gloves","price":29,"quantity":2,"total":58,"discountPercentage":3.19,"discountedPrice":56},{"id":18,"title":"Oil Free Moisturizer 100ml","price":40,"quantity":2,"total":80,"discountPercentage":13.1,"discountedPrice":70},{"id":95,"title":"Wholesale cargo lashing Belt","price":930,"quantity":1,"total":930,"discountPercentage":17.67,"discountedPrice":766},{"id":39,"title":"Women Sweaters Wool","price":600,"quantity":2,"total":1200,"discountPercentage":17.2,"discountedPrice":994}],"total":3000,"discountedTotal":1941,"userId":97,"totalProducts":5,"totalQuantity":10},
    ]);


    const highestCart = await testMart.getCartWithHighestTotal();

    expect(highestCart.id).toBe(2);
  });

  it('should get cart with lowest total', async () => {
    // Mocking the response of getAllCarts
    (RegularCart.prototype.getAllCarts as jest.Mock).mockResolvedValue([
        {"id":1,"products":[{"id":59,"title":"Spring and summershoes","price":20,"quantity":3,"total":60,"discountPercentage":8.71,"discountedPrice":55},{"id":88,"title":"TC Reusable Silicone Magic Washing Gloves","price":29,"quantity":2,"total":58,"discountPercentage":3.19,"discountedPrice":56},{"id":18,"title":"Oil Free Moisturizer 100ml","price":40,"quantity":2,"total":80,"discountPercentage":13.1,"discountedPrice":70},{"id":95,"title":"Wholesale cargo lashing Belt","price":930,"quantity":1,"total":930,"discountPercentage":17.67,"discountedPrice":766},{"id":39,"title":"Women Sweaters Wool","price":600,"quantity":2,"total":1200,"discountPercentage":17.2,"discountedPrice":994}],"total":2328,"discountedTotal":1941,"userId":97,"totalProducts":5,"totalQuantity":10},
        {"id":2,"products":[{"id":60,"title":"Spring and summershoes1","price":200,"quantity":30,"total":600,"discountPercentage":9,"discountedPrice":60},{"id":88,"title":"TC Reusable Silicone Magic Washing Gloves","price":29,"quantity":2,"total":58,"discountPercentage":3.19,"discountedPrice":56},{"id":18,"title":"Oil Free Moisturizer 100ml","price":40,"quantity":2,"total":80,"discountPercentage":13.1,"discountedPrice":70},{"id":95,"title":"Wholesale cargo lashing Belt","price":930,"quantity":1,"total":930,"discountPercentage":17.67,"discountedPrice":766},{"id":39,"title":"Women Sweaters Wool","price":600,"quantity":2,"total":1200,"discountPercentage":17.2,"discountedPrice":994}],"total":3000,"discountedTotal":1941,"userId":97,"totalProducts":5,"totalQuantity":10},
    ]);

    const lowestCart = await testMart.getCartWithLowestTotal();

    expect(lowestCart.id).toBe(1);
  });

  it('should add product images to user cart', async () => {
    // Mocking the response of getUserCarts
    (RegularCart.prototype.getUserCarts as jest.Mock).mockResolvedValue([
      {
        id: 1,
        products: [{ id: 1 }, { id: 2 }],
      },
    ]);

    // Mocking the response of getProduct
    (RegularProduct.prototype.getProduct as jest.Mock).mockResolvedValue([{
      id: 1,
      images: ['image1', 'image2'],
    }, 
    {id: 2,
     images: ['image3', 'image4'],
  }]);

    const enrichedProducts = await testMart.addProductImagesToUserCart(1);
    console.log(enrichedProducts)
    expect(enrichedProducts).toEqual([
      { id: 1, images: ['image1', 'image2'] },
      { id: 2, images: ['image3', 'image4'] },
    ]);
  });
  
})
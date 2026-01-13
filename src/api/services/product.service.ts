import HttpClient from "@/api/http-client";
import { Product } from "@/types";

export default class ProductService extends HttpClient {
  private basePath = "/products";

  async getAll(): Promise<Product[]> {
    const response = await this.get(this.basePath);

    const products: Product[] = response.data.map((i: any) => ({
      id: i.id,
      name: i.title,
      image: i.image,
      category: i.category,
    }));

    return products;
  }
}

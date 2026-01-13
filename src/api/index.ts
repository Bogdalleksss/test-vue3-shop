import ProductService from "@/api/services/product.service";

export const productApi = new ProductService(process.env.VUE_APP_API_URL || "");

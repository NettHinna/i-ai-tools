"use server"

import { db } from "@/lib/db"
import { products, productImages } from "@/lib/db/schema"
import { eq } from "drizzle-orm"

export async function getProducts() {
  try {
    const allProducts = await db.query.products.findMany({
      with: {
        images: true,
      },
    })

    return { products: allProducts, error: null }
  } catch (error) {
    console.error("Error fetching products:", error)
    return { products: [], error: "Failed to fetch products" }
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const product = await db.query.products.findFirst({
      where: eq(products.slug, slug),
      with: {
        features: true,
        specifications: true,
        applications: true,
        images: true,
      },
    })

    if (!product) {
      return { product: null, error: "Product not found" }
    }

    return { product, error: null }
  } catch (error) {
    console.error("Error fetching product:", error)
    return { product: null, error: "Failed to fetch product" }
  }
}

export async function getRelatedProducts(currentProductId: number, limit = 3) {
  try {
    const currentProduct = await db.query.products.findFirst({
      where: eq(products.id, currentProductId),
    })

    if (!currentProduct) {
      return { products: [], error: "Current product not found" }
    }

    const relatedProducts = await db.query.products.findMany({
      where: eq(products.category, currentProduct.category),
      with: {
        images: {
          where: eq(productImages.isPrimary, true),
        },
      },
      limit,
    })

    // Filter out the current product
    const filteredProducts = relatedProducts.filter((product) => product.id !== currentProductId)

    return { products: filteredProducts, error: null }
  } catch (error) {
    console.error("Error fetching related products:", error)
    return { products: [], error: "Failed to fetch related products" }
  }
}

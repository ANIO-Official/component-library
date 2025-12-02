import type { ProductDisplayProps } from "../../types";

export default function ProductDisplay({
  product,
  showDescription,
  showStockStatus,
  onAddToCart,
  children,
}: ProductDisplayProps) {
  return (
    <>
      <img src={product.imageUrl} alt={product.imageAlt} />
      <br />
      <h2>{product.name}</h2>
      <br />
      <p className="product-description" hidden={!showDescription}>
        {product.description}
      </p>
      <br />
      <p hidden={!showStockStatus}>
        {product.inStock ? "In Stock!" : "Out of stock"}
      </p>
      <br />
      <button
        onClick={() =>
          onAddToCart !== undefined ? onAddToCart(product.id, product.name) : false
        }
      >
        Add to Cart
      </button>
      <br />
      {children}
    </>
  );
}

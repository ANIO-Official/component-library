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
      <img className="mt-3" src={product.imageUrl} alt={product.imageAlt} style={{height: '150px', width: '150px', borderRadius: '50%'}}/>
      <p className="fs-4 mt-4">{product.name}</p>
      <p className="product-description" hidden={!showDescription}>
        {product.description}
      </p>
      <p hidden={!showStockStatus}>
        {product.inStock ? <p className="text-success">In Stock!</p> : <p className="text-danger">Out of stock</p>}
      </p>
      <button className="mb-3"
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

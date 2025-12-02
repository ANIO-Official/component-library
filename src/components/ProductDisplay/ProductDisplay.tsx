import type { ProductDisplayProps } from "../../types";

export default function ProductDisplay({ product, showDescription, showStockStatus, onAddToCart, children }: ProductDisplayProps) {

    return (
        <>
            <img src={product.imageUrl} alt={product.imageAlt} />
            <br />
            <h2>{product.name}</h2><br />
            <span onClick={()=>!showDescription? showDescription:!showDescription}>Show Product Details</span>
            <br/>
            <p className="product-description" hidden={showDescription}>{product.description}</p>
            <br/>
            <button onClick={()=>!showStockStatus? showStockStatus:!showStockStatus}>Check if In Stock?</button>
            <br/>
            <p hidden={showStockStatus}>{product.inStock? "In Stock!": "Out of stock"}</p>
            <br/>
            <button onClick={()=>onAddToCart}>Add to Cart</button>
            <br/>
            {children}
        </>

    )
}
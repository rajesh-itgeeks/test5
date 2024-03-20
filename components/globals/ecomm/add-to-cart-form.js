import { useContext, useState } from "react";
import { CartContext } from "../../../context/cart-context";
import { trackAddToCart } from "../../../lib/analytics-tracking";
import Button from "../../Button";
import s from "./add-to-cart-form.module.scss";

function AddToCartForm({ product, variantId, variants, cookies, priceOnly }) {
  const { addProductToCart, newCartID } = useContext(CartContext);
  const initialVariant =
    variants.find((variant) => variant.id === variantId) || variants[0];
  const [selectedVariant, setSelectedVariant] = useState(initialVariant);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false); // Add loading state

  const handleAddToCart = () => {
    setLoading(true); // Set loading state to true when button is clicked

    // Track the add to cart event

    trackAddToCart(product, selectedVariant, quantity, newCartID, cookies);

    addProductToCart(selectedVariant.id, quantity, product).then(() => {
      setLoading(false); // Set loading state to false when item is added
    });
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <div className={s.productForm}>
        {priceOnly ? (
          <div className={s.costContain}>
            <span className={`product-hero-cost ${s.priceTag}`}>
              {formatter.format(selectedVariant?.price?.amount)}
            </span>
          </div>
        ) : (
          <div>
            <div className={s.variantContain}>
              {variants.map((variant) => (
                <Button
                  className={`${s.variantBtn} ${
                    variant.id === selectedVariant.id ? s.activeVariant : null
                  }`}
                  title={variant.title}
                  key={variant.id}
                  onClick={() => handleVariantChange(variant)}
                  bordered
                  noHref
                  transparentColor
                />
              ))}
              {selectedVariant?.availableForSale ? (
                <>
                  <div className={s.quantityContain}>
                    <button
                      aria-label={"Decrement Quantity"}
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                    <input
                      type="text"
                      min="1"
                      value={quantity}
                      onChange={handleQuantityChange}
                      readOnly
                    />
                    <button
                      aria-label={"Increment Quantity"}
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                  <Button
                    title={loading ? "Adding to Cart..." : "Add to Cart"} // Conditionally render button text based on loading state
                    className={s.atcBtn + " addtocartcan"}
                    id={"addtocartcan"}
                    onClick={handleAddToCart}
                    bordered
                    noHref
                    transparentColor
                    disabled={loading}
                  />
                </>
              ) : (
                <div className={s.soldOut}>
                  <div>
                    <p>
                      SOLD OUT - Sign up to get notified when{" "}
                      {selectedVariant?.title} {product?.title} is back in
                      stock.
                    </p>
                  </div>
                </div>
              )}
            </div>
            {/* <div className={s.quantityAtcContain}>
          <div className={s.quantityContain}>
            <button
              aria-label={"Decrement Quantity"}
              onClick={decrementQuantity}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              readOnly
            />
            <button
              aria-label={"Increment Quantity"}
              onClick={incrementQuantity}
            >
              +
            </button>
          </div>

          <Button
            title={loading ? "Adding to Cart..." : "Add to Cart"} // Conditionally render button text based on loading state
            className={s.atcBtn}
            onClick={handleAddToCart}
            bordered
            noHref
            transparentColor
            disabled={loading}
          />
        </div> */}
          </div>
        )}
      </div>
    </>
  );
}

export default AddToCartForm;

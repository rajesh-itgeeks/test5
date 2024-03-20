import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../../context/cart-context";
import CloseBtnX from "../../svgs/close-x";
import s from "./cart.module.scss";
// import Link from "next/link";
import Button from "../../Button";
import SpinningAsterisk from "../../svgs/spinning-asterisk";

function Cart() {
  const {
    cart,
    isOpen,
    closeCart,
    checkout,
    updateProductQuantityInCart,
    removeProductFromCart,
  } = useContext(CartContext);

  const containerRef = useRef();
  // Add isLoading state
  const [isLoading, setIsLoading] = useState(false);

  const [amazonProduct, setAmazonProduct] = useState({
    asn: "B0CHGY7HL5",
    associateTag: "",
  });

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIsLoading(false);
      }
    };

    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        closeCart();
      }
    }

    if (isOpen) {
      // Add event listener when cart is open
      document.addEventListener("click", handleClickOutside);
    } else {
      // Remove event listener when cart is closed
      document.removeEventListener("click", handleClickOutside);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup function to remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isOpen, closeCart, setIsLoading]);

  const handleQuantityChange = (lineItemId, event) => {
    updateProductQuantityInCart(lineItemId, event.target.value);
  };

  const handleRemove = (lineItemId) => {
    removeProductFromCart(lineItemId);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleCheckout = () => {
    setIsLoading(true); // Start loading

    setTimeout(() => {
      checkout();
    }, 500); // 0.5 second delay
  };

  const handleCheckoutAmazon = async () => {
    if (!cart) return;

    let string = "";
    let productsASIN = JSON.parse(localStorage.getItem("productsASIN"));
    const { lineItems } = cart;

    lineItems.forEach((item, index) => {
      string += `${index === 0 ? "?" : "&"}ASIN.${index + 1}=${
        productsASIN[item.variant.id]
      }&Quantity.${index + 1}=${item.quantity}`;
    });

    // console.log({ lineItems, string });

    const amazonUrl = `https://www.amazon.com/gp/aws/cart/add.html${string}&AssociateTag=luckyfckenerg-20`;

    window.open(amazonUrl, "_blank");
  };

  return (
    <>
      <div className={`${s.cartMain} ${isOpen ? s.open : ""}`}>
        <div className={s.container} ref={containerRef}>
          <div className={s.cartTitle}>
            <h3 className={s.title}>
              Your <em>Cart</em>
            </h3>

            <button aria-label="Close Cart" onClick={closeCart}>
              <CloseBtnX />
            </button>
          </div>

          <div className={s.cartItemsContain}>
            {cart && cart.lineItems && cart.lineItems.length > 0 ? (
              cart.lineItems
                .filter((item) => item && item?.variant)
                .map((item) => {
                  return (
                    <div className={s.itemCell} key={item?.id}>
                      <div className={s.imgContain}>
                        <Image
                          src={item?.variant?.image?.src}
                          alt={item?.title}
                          fill
                          priority={true}
                        />
                      </div>

                      <div className={s.titleContain}>
                        <h3 className={`product-title-cart ${s.productTitle}`}>
                          <em>{item?.title}</em>
                          <span>{item?.title}</span>
                        </h3>
                        <p className={`value-detail  ${s.variantTitle}`}>
                          {item?.variant?.title}
                        </p>
                      </div>

                      <div className={s.quantityContain}>
                        <button
                          aria-label={"Decrement Quantity"}
                          onClick={() =>
                            handleQuantityChange(item?.id, {
                              target: { value: item?.quantity - 1 },
                            })
                          }
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={item?.quantity}
                          onChange={(event) =>
                            handleQuantityChange(item?.id, event)
                          }
                        />
                        <button
                          aria-label={"Increment Quantity"}
                          onClick={() =>
                            handleQuantityChange(item?.id, {
                              target: { value: item?.quantity + 1 },
                            })
                          }
                        >
                          +
                        </button>
                      </div>

                      <div className={`product-title-cart ${s.costContain}`}>
                        {formatter.format(
                          item?.quantity * item?.variant.priceV2.amount
                        )}
                      </div>

                      <button
                        className={s.closeBtn}
                        aria-label={"Remove Cart Item"}
                        onClick={() => handleRemove(item?.id)}
                      >
                        <CloseBtnX />
                      </button>
                    </div>
                  );
                })
            ) : (
              <div className={s.cartEmpty}>
                <div className={`leadin ${s.leadin}`}>
                  Your Cart Is Empty{" "}
                  <div className={`value-detail ${s.detailText}`}>
                    Let's fix that.
                  </div>
                </div>

                <Button
                  title={"View Our Products"}
                  href="/products"
                  bordered
                  onClick={closeCart}
                />

               <SpinningAsterisk />
              </div>
            )}
          </div>

          {cart && cart.lineItems && cart.lineItems.length > 0 ? (
            <div className={s.checkoutContain}>
              <div className={s.checkoutSummary}>
                <div className={s.checkoutSummaryTitle}>
                  <h3 className={`product-title-cart ${s.subtotalTitle}`}>
                    <em>Subtotal</em>
                    <span>Subtotal</span>
                  </h3>
                  <p className={`product-details ${s.shippingInfo}`}>
                    Taxes and shipping costs calculated at checkout.
                  </p>
                </div>

                <div className={s.checkoutSummaryTotal}>
                  <div className={`product-title-cart ${s.totalAmount}`}>
                    {formatter.format(
                      cart?.subtotalPriceV2?.amount
                        ? cart?.subtotalPriceV2?.amount
                        : 0
                    )}
                  </div>
                </div>
              </div>

              {/* <button
                aria-label={"Checkout Cart"}
                className={`btn ${s.checkoutBtn}`}
                onClick={
                  cart?.subtotalPriceV2?.amount > 0 && !isLoading
                    ? handleCheckout
                    : null
                }
                disabled={
                  cart?.subtotalPriceV2?.amount > 0 && !isLoading ? false : true
                }
              >
                {isLoading ? "Preparing..." : "Checkout"}
              </button> */}
              <button
                aria-label={"Checkout Cart"}
                className={`btn ${s.checkoutBtn} checkoutAtAmazon`}
                onClick={
                  cart?.subtotalPriceV2?.amount > 0 && !isLoading
                    ? handleCheckoutAmazon
                    : null
                }
                id={"checkoutAtAmazon"}
                disabled={
                  cart?.subtotalPriceV2?.amount > 0 && !isLoading ? false : true
                }
              >
                {isLoading ? "Preparing..." : "Checkout at Amazon"}
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Cart;

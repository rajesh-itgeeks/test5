import { createContext, useState, useEffect, useRef } from "react";
import ShopifyClient from "shopify-buy";

import { ShopifyProvider, CartProvider } from "@shopify/hydrogen-react";

const storeData = {
  storefrontAccessToken: "51b50374bd968d055e8ef9a2628ea067",
  domain: "luckyfck.myshopify.com",
};

const client = ShopifyClient.buildClient(storeData);

export const CartContext = createContext();

export const CartProviderContext = ({ children }) => {
  const [cart, setCart] = useState({ lineItems: [] });
  const [newCart, setNewCart] = useState(null); // NEW: keep track of the new cart
  const [newCartID, setNewCartID] = useState(null); // NEW: keep track of the new cart
  const [isLoading, setIsLoading] = useState(true); // add a loading state
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    /*    const initializeCart = async () => {
      setIsLoading(true);

      // Check for an existing cart in local storage
      let existingCartID = localStorage.getItem("shopifyCartId");
      let newCart;

      // if (existingCartID) {
      //   console.log("run this");
      //   newCart = await client.checkout.fetch(existingCartID);
      // } else {
      //   // If no cart exists, create a new one
      //   console.log("skeet");
      //   newCart = await client.checkout.create();
      //   localStorage.setItem("shopifyCartId", newCart.id);
      //   console.log("yeet");
      // }

      try {
        // Try to fetch the existing cart
        newCart = await client.checkout.fetch(existingCartID);

        // If fetch returns null, create a new cart
        if (!newCart) {
          console.log("Fetched cart is null, creating a new cart");
          newCart = await client.checkout.create();
          localStorage.setItem("shopifyCartId", newCart.id);
        }
      } catch (error) {
        console.error("Error fetching or creatng cart", error);

        // If fetching or creating fails, try to create a new cart
        newCart = await client.checkout.create();
        localStorage.setItem("shopifyCartId", newCart.id);
      }

      setCart(newCart);
      setNewCart(newCart); // NEW: update newCart in state
      setIsLoading(false); // set loading to false after cart is set
    };
    */

    const initializeCart = async () => {
      setIsLoading(true);

      // Check for an existing cart ID in local storage
      let existingCartID = localStorage.getItem("shopifyCartId");
      let newCart;

      const mutation = `
            mutation {
              cartCreate(input: {}) {
                cart {
                  id
                }
              }
            }
          `;
      const response = await fetch(
        "https://luckyfck.myshopify.com/api/2023-07/graphql.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token":
              storeData.storefrontAccessToken,
          },
          body: JSON.stringify({ query: mutation }),
        }
      );
      const result = await response.json();
      setNewCartID(result.data.cartCreate.cart.id);

      try {
        if (existingCartID) {
          // Try to fetch the existing cart
          newCart = await client.checkout.fetch(existingCartID);
        }

        if (!newCart) {
          console.log("Fetched cart is null, creating a new cart");
          // If no existing cart or fetch failed, create a new cart

          newCart = await client.checkout.create();

          // Store the new cart ID in local storage
          localStorage.setItem("shopifyCartId", newCart.id);
        }
      } catch (error) {
        console.error("Error fetching or creating cart", error);

        // If fetching or creating fails, try to create a new cart (add proper error handling)
        newCart = await client.checkout.create();
        localStorage.setItem("shopifyCartId", newCart.id);
      }

      setCart(newCart);
      setIsLoading(false);
    };

    initializeCart();
  }, []);

  const clearCart = async () => {
    const newCart = await client.checkout.create();
    localStorage.setItem("shopifyCartId", newCart.id);
    setCart(newCart);
    setNewCart(newCart);
  };

  const addProductToCart = async (variantId, quantity, product) => {
    // Fetch the most recent cart state from local storage
    let existingCartID = localStorage.getItem("shopifyCartId");
    let productsASIN = JSON.parse(localStorage.getItem("productsASIN"));

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];

    try {
      const newCart = await client.checkout.addLineItems(
        existingCartID,
        lineItemsToAdd
      );
      setCart(newCart);
      setIsOpen(true); // Open the cart when a new item is added

      if (productsASIN) {
        localStorage.setItem(
          "productsASIN",
          JSON.stringify({
            ...productsASIN,
            [variantId]: product.asin?.value || "",
          })
        );
      } else {
        localStorage.setItem(
          "productsASIN",
          JSON.stringify({ [variantId]: product.asin?.value || "" })
        );
      }
    } catch (error) {
      if (error.message.includes("Checkout is already completed")) {
        clearCart(); // Clear the cart if this specific error occurs
      }
      console.error("Error adding product to cart:", error);
    }
  };

  const checkout = () => {
    window.location.href = cart.webUrl;
  };

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const updateProductQuantityInCart = async (lineItemId, quantity) => {
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];
    const newCart = await client.checkout.updateLineItems(
      cart.id,
      lineItemsToUpdate
    );
    setCart(newCart);
  };

  const removeProductFromCart = async (lineItemId) => {
    const newCart = await client.checkout.removeLineItems(cart.id, [
      lineItemId,
    ]);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        newCartID,
        addProductToCart,
        checkout,
        openCart,
        closeCart,
        updateProductQuantityInCart,
        removeProductFromCart,
        clearCart,
      }}
    >
      <ShopifyProvider
        storeDomain="https://luckyfck.myshopify.com"
        storefrontToken={storeData.storefrontAccessToken}
        storefrontApiVersion="2023-07"
        countryIsoCode="US"
        languageIsoCode="EN"
      >
        <CartProvider>{children}</CartProvider>
      </ShopifyProvider>
    </CartContext.Provider>
  );
};

import {
  sendShopifyAnalytics,
  getClientBrowserParameters,
  AnalyticsEventName,
  useShopifyCookies,
  CartProvider,
  useCart,
} from "@shopify/hydrogen-react";

/*****************************************************************
 * Track Product View - Event 'view_item'
 *****************************************************************/

export function trackProductView(product) {
  const categories = product?.product?.collections?.nodes?.map((node) => node.handle) || [];

  const dynamicCategoryFields = categories.reduce((acc, category, index) => {
    // For the first category, use 'item_category'. For subsequent ones, use 'item_categoryX'
    const key = index === 0 ? "item_category" : `item_category${index + 1}`;
    acc[key] = category;
    return acc;
  }, {});

  const eventData = {
    event: "view_item",
    ecommerce: {
      currency: "USD",
      value: product?.product?.priceRange?.minVariantPrice?.amount,
      items: [
        {
          item_id: product?.product?.handle,
          item_name: product.product.title,
          affiliation: product?.product?.vendor, // Adjust this as per your store's name
          item_brand: product?.product?.vendor, // Adjust this to the brand of the product
          ...dynamicCategoryFields,
          item_variant: product.product.variants?.nodes[0]?.title || "",
          price: product?.product?.priceRange?.minVariantPrice?.amount,
          quantity: 1, // Typically 1 for product views
          // index: 1,  // Position of the product in a list or collection
          // item_list_id: 'related_products',  // Adjust based on your data
          // item_list_name: 'Related Products',  // Adjust based on your data
          // location_id: 'LOCATION_ID',  // If available
        },
      ],
    },
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null }); // Clear any previous ecommerce object to ensure clean data.
  window.dataLayer.push(eventData);
}

/*****************************************************************
 * Track Add to Cart  - Event 'add_to_cart'
 *****************************************************************/
export async function trackAddToCart(product, selectedVariantItem, quantity, newCartID, cookies) {
  /////////////////////////////////////////////////////
  // GA4 Tracking
  /////////////////////////////////////////////////////
  // Extract any required data from the product object.
  const categories = product?.product?.collections?.nodes?.map((node) => node.handle) || [];
  const dynamicCategoryFields = categories.reduce((acc, category, index) => {
    const key = index === 0 ? "item_category" : `item_category${index + 1}`;
    acc[key] = category;
    return acc;
  }, {});

  // Prepare the data to push to the dataLayer
  const eventData = {
    event: "add_to_cart",
    ecommerce: {
      currency: "USD", // Assuming USD, adjust as needed
      value: product?.priceRange?.minVariantPrice?.amount, // Example, adjust based on your data structure
      items: [
        {
          item_id: selectedVariantItem?.sku,
          item_name: product?.title,
          affiliation: product?.vendor, // Adjust this based on your store's name
          item_brand: product?.vendor, // Adjust this based on your brand or product's brand
          ...dynamicCategoryFields,
          item_variant: selectedVariantItem?.title, // Example, adjust based on your data structure
          price: selectedVariantItem?.price?.amount,
          quantity: quantity,
          asin: product.asin?.value || "",
        },
      ],
    },
  };

  // Push the data to the dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ ecommerce: null }); // Clear any previous ecommerce object.
  window.dataLayer.push(eventData);

  /////////////////////////////////////////////////////
  // Shopify Analytics Tracking
  /////////////////////////////////////////////////////

  console.log("====================================");
  console.log("cookies", cookies);
  console.log("====================================");

  const shopifyYCookieValue = cookies["_shopify_y"];
  const shopifySCookieValue = cookies["_shopify_s"];

  // Set shop data
  const analyticsShopData = {
    shopId: "gid://shopify/Shop/74496835869",
    currency: "USD",
    acceptedLanguage: "en",
  };

  // const hasUserConsent = yourFunctionToDetermineIfUserHasConsent();
  const hasUserConsent = true;

  const analytics = {
    hasUserConsent,
    ...analyticsShopData,
    cartId: newCartID,
    pageType: "product",
    resourceId: product?.id,
    totalValue: quantity * selectedVariantItem?.price?.amount,
    products: [
      {
        productGid: product?.id,
        variantGid: selectedVariantItem?.id,
        name: product?.title,
        variantName: selectedVariantItem?.title,
        brand: product?.vendor,
        category: product?.productType,
        price: selectedVariantItem?.price?.amount,
        sku: selectedVariantItem?.sku,
        quantity: quantity,
      },
    ],
  };

  // Define the mutation query
  const ADD_TO_CART_MUTATION = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
        }
        userErrors {
          code
          field
          message
        }
      }
    }
  `;

  // Define the variables for the mutation
  const variables = {
    cartId: newCartID,
    lines: [
      {
        merchandiseId: selectedVariantItem?.id,
        quantity: quantity,
      },
    ],
  };

  const storeData = {
    storefrontAccessToken: "51b50374bd968d055e8ef9a2628ea067",
    domain: "luckyfck.myshopify.com",
  };

  // Make the fetch request to trigger the mutation
  try {
    const response = await fetch("https://luckyfck.myshopify.com/api/2023-07/graphql.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storeData.storefrontAccessToken,
        // Include any additional headers needed
        "Shopify-Storefront-Y": shopifyYCookieValue, // Include the custom header
        "Shopify-Storefront-S": shopifySCookieValue, // Include the custom header
      },
      body: JSON.stringify({
        query: ADD_TO_CART_MUTATION,
        variables: variables,
      }),
    });

    const result = await response.json();

    // Handle the response as needed, e.g., update the cart state or display a success message
    console.log("Adding item to cart:", result);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    // Handle the error as needed, e.g., display an error message
  }

  function sendAddToCart(analyticsPageData) {
    const payload = {
      ...getClientBrowserParameters(),
      ...analyticsPageData,
    };

    sendShopifyAnalytics(
      {
        eventName: AnalyticsEventName.ADD_TO_CART,
        payload,
      },
      "luckyfck.myshopify.com"
    );
  }

  // useShopifyCookies({ hasUserConsent: true });

  sendAddToCart(analytics);
}

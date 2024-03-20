import { createStorefrontClient } from "@shopify/hydrogen-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/footer";
import Ingredients from "../../components/globals/ingredients/ingredients";
import ReviewSection from "../../components/home/review-section";
import Layout from "../../components/layout";
import ProductIngredients from "../../components/product-single/product-ingredients";
import ProductSingleHero from "../../components/product-single/product-single-hero";
import ProductsRelated from "../../components/product-single/products-related";
import { trackProductView } from "../../lib/analytics-tracking";
import {
  getGlobalData,
  getMetaObjectData,
  getProductSingleData,
  getRelatedProducts,
} from "../../lib/api";
import NtfModal from "../../components/globals/ntfModal/ntfModal";

const shopClient = createStorefrontClient({
  storeDomain: "https://luckyfck.myshopify.com/",
  publicStorefrontToken: "51b50374bd968d055e8ef9a2628ea067",
  storefrontApiVersion: "2023-07",
});

function ProductSingle({
  globalData,
  productData,
  metaObjectdata,
  relatedProducts,
  cookiesFromServer,
}) {
  const [cookies, setCookies] = useState(cookiesFromServer);
  const [modelOpen, setModelOpen] = useState(false);

  const hideProduct = productData?.product?.hide_product?.value === "true";
  const router = useRouter();
  const shouldShowPage = router.query.showPage === "true";

  //This is a dummy data, we'll need data from API to show ingredients data
  //  const dummyIngredientsData = {
  //   after_taste: 1,
  //   sugar: 4,
  //   calories: 20,
  //   super_ingredients: 100
  // }
  const dummyIngredientsData = {
    after_taste: 0,
    sugar: 0,
    calories: 5,
    super_ingredients: 5,
  };
  useEffect(() => {
    trackProductView(productData);
  }, [productData]);

  useEffect(() => {
    // Imagine a function that gets updated cookies
    setCookies(cookiesFromServer);

    console.log("====================================");
    console.log(cookies);
    console.log("====================================");
  }, []);

  if (hideProduct && !shouldShowPage) {
    return <div>This page is not accessible.</div>; // You can return null or a specific message or component.
  }

  console.log("====================================");
  console.log(cookies);
  console.log("====================================");

  return (
    <div>
      <NtfModal
        imgSrc={productData?.product?.images?.nodes?.[1]?.url}
        title={productData?.product?.title}
        subTitle={"Nutritional Facts"}
        onClose={() => setModelOpen(false)}
        isOpen={modelOpen} />
      <div style={{ maxWidth: "100vw", overflow: "hidden", height: modelOpen ? "100vh" : "auto" }}>
        <Layout global={globalData} seo={productData}>
          <ProductSingleHero
            onNtClick={() => setModelOpen(true)}
            relatedProducts={relatedProducts}
            data={productData}
            cookies={cookies}
          />
          <Ingredients data={dummyIngredientsData} />
          {/* <ProductIntro data={productData} /> */}
          <ProductIngredients data={metaObjectdata} />
          {/* <ProductReviews data={productData} /> */}
          <ReviewSection data={productData} />
          <ProductsRelated
            data={relatedProducts}
            currentProductID={productData?.product?.id}
          />
          <Footer global={globalData} hideMarquee />
        </Layout>
      </div>
    </div>
  );
}

// export async function getStaticPaths() {
//   const productPathData = await getProductPaths();
//   const productPaths = productPathData.products.edges.map((item, index) => `/products/${item.node.handle}`) || [];

//   return {
//     paths: productPaths,
//     fallback: false,
//   };
// }

// export async function getStaticProps({ params: { productHandle } }) {
//   const globalData = await getGlobalData();
//   const productData = await getProductSingleData(productHandle);
//   const metaObjectdata = await getMetaObjectData("ingredients");
//   const relatedProducts = await getRelatedProducts(productData?.product?.collections?.nodes[0]?.handle);

//   return {
//     props: { globalData, productData, metaObjectdata, relatedProducts },
//     revalidate: 10, // 10 seconds, will need to increase this after launch
//   };
// }

export async function getServerSideProps({ params: { productHandle }, req }) {
  // const globalData = await getGlobalData();
  // const productData = await getProductSingleData(productHandle);

  // if (!productData?.product) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // const metaObjectdata = await getMetaObjectData("ingredients");
  // const relatedProducts = (await getRelatedProducts(productData?.product?.collections?.nodes[0]?.handle)) || [];

  // return {
  //   props: {
  //     globalData,
  //     productData,
  //     metaObjectdata,
  //     relatedProducts,
  //     analytics: {
  //       pageType: AnalyticsPageType.productData?.product, // Define this constant
  //       resourceId: productData?.product.id,
  //       products: [
  //         {
  //           productGid: productData?.product.id,
  //           variantGid: variant.id,
  //           name: productData?.product.title,
  //           variantName: variant.title,
  //           brand: productData?.product.vendor,
  //           price: variant.price.amount,
  //         },
  //       ],
  //     },
  //   },
  // };

  // Extract the cookie values from the request object
  const cookies = req.cookies;
  const shopifyYCookieValue = cookies["_shopify_y"];
  const shopifySCookieValue = cookies["_shopify_s"];

  try {
    const response = await fetch(shopClient.getStorefrontApiUrl(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Shopify-Storefront-Y": shopifyYCookieValue, // Include the custom header
        "Shopify-Storefront-S": shopifySCookieValue, // Include the custom header
        ...shopClient.getPublicTokenHeaders(),
      },
      body: JSON.stringify({
        query: `query productSingle($handle: String!) {
          product(handle: $handle) {
            title
            description
            id
            handle
            availableForSale
            vendor
            productType
            collections(first: 10) {
              nodes {
                handle
              }
            }
            productMainColor: metafield(namespace: "custom", key: "product_main_color") {
              value
            }
            productOverviewText: metafield(namespace: "custom", key: "product_overview_text") {
              value
            }
            productIntroText: metafield(namespace: "custom", key: "product_intro_text") {
              value
            }
            productMarqueeText: metafield(namespace: "custom", key: "product_marquee_text") {
              value
            }
            productMarqueeImages: metafield(namespace: "custom", key: "marquee_images") {
              references(first: 10) {
                nodes {
                  ... on MediaImage {
                    image {
                      url
                    }
                  }
                }
              }
            }
            image3d: metafield(namespace: "custom", key: "product_3d_mapping_image") {
              reference {
                ... on MediaImage {
                  image {
                    url
                  }
                }
              }
            }
            object3d: metafield(namespace: "custom", key: "product_3d_object") {
              reference {
                ... on GenericFile {
                  url
                }
              }
            }
            adjust3d: metafield(namespace: "custom", key: "3d_mapping_adjustment") {
              value
            }
            hide_product: metafield(namespace: "custom", key: "hide_product") {
              value
            }  
            asin: metafield(namespace: "custom", key: "product_asin") {
              value
            }
            images(first: 10) {
              nodes {
                url
              }
            }
            seo {
              title
              description
            }
            featuredImage {
              id
              url
            }
            priceRange {
              minVariantPrice {
                amount
              }
              maxVariantPrice {
                amount
              }
            }
            variants(first: 10) {
              nodes {
                id
                title
                availableForSale
                sku
                price {
                  amount
                }
              }
            }
          }
        }`,
        variables: { handle: productHandle },
      }),
    });

    const data = await response.json();
    const productData = await getProductSingleData(productHandle);
    const globalData = await getGlobalData();
    const metaObjectdata = await getMetaObjectData("ingredients");
    const relatedProducts =
      (await getRelatedProducts(
        productData?.product?.collections?.nodes[0]?.handle
      )) || [];

    return {
      props: {
        globalData,
        productData,
        metaObjectdata,
        relatedProducts,
        analytics: {
          pageType: "product",
          resourceId: productData?.product.id,
          products: [
            {
              productGid: productData?.product.id,
              // variantGid: variant.id,
              name: productData?.product.title,
              // variantName: variant.title,
              brand: productData?.product.vendor,
              // price: variant.price.amount,
            },
          ],
        },
        cookiesFromServer: cookies,
      },
    };
  } catch (err) {
    console.error(err);
    return {
      notFound: true,
    };
  }
}

export default ProductSingle;

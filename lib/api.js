const API_URL = process.env.WORDPRESS_API_URL;

/*****************************************************************
 * Main Fetch Wordpress
 *****************************************************************/
async function fetchAPI(query = "", { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  // WPGraphQL Plugin must be enabled
  const res = await fetch(`${process.env.WORDPRESS_API_URL}/graphql`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

/*****************************************************************
 * Main Fetch Shopify
 *****************************************************************/
async function fetchShopifyAPI(query = "", { variables } = {}, admin = false) {
  const headers = { "Content-Type": "application/json" };

  if (process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN && process.env.SHOPIFY_ADMIN_API_TOKEN) {
    headers["X-Shopify-Storefront-Access-Token"] = `${process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN}`;
    headers["X-Shopify-Access-Token"] = `${process.env.SHOPIFY_ADMIN_API_TOKEN}`;
  }

  const store_domain = process.env.SHOPIFY_STORE_DOMAIN;

  const url = `https://${store_domain}/${admin ? "admin/api" : "api"}/2023-07/graphql.json`;

  const res = await fetch(url, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error(`Failed to fetch API`);
  }

  return json.data;
}

/*****************************************************************
 * Preview
 *****************************************************************/
export async function getPreviewPost(id, idType = "DATABASE_ID") {
  const data = await fetchAPI(
    `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`,
    {
      variables: { id, idType },
    }
  );
  return data.post;
}

/*****************************************************************
 * Landing Page Data
 *****************************************************************/
export async function landingPageData(slug) {
  const data = await fetchAPI(
    `
    query LandingPageContent($slug: String!) {
      pageBy(uri: $slug) {
        seo {
          title
          metaDesc
          opengraphSiteName
          opengraphUrl
          opengraphImage {
            sourceUrl
          }
        }
        landingPageContent {
          navigation {
            leftSideTitle1
            leftSideTitle2
            ctaTextDesktop
            ctaTextMobile
          }
          hero {
            titleLine1
            titleLine2
            titleLine3
            leadin
            paragraph
          }
          footer {
            leadin
            title
            paragraph
            socialTiktok
            socialInstagram
            socialTwitter
            socialYoutube
          }
        }
      }
    }
    `,
    { variables: { slug } }
  );

  return data;
}

/*****************************************************************
 * Home Page
 *****************************************************************/
export async function getHomePage() {
  const data = await fetchShopifyAPI(
    `
    query homepageData {
      metaobject(handle: {type: "homepage", handle: "homepage"}) {
        homepage_video_bg: field(key: "homepage_video_bg") {
          reference {
            ... on Video {
              previewImage {
                url
              }
              sources {
                url
                format
              }
            }
          }
        }
        homepage_video_modal: field(key: "homepage_video_modal") {
          reference {
            ... on Video {
              previewImage {
                url
              }
              sources {
                url
                format
              }
            }
          }
        }
        homepage_video_youtube: field(key: "you_tube_url") {
          value
        }
        marquee_one: field(key: "marquee_one") {
          value
        }
        marquee_two: field(key: "marquee_two") {
          value
        }
        image_text_section_image: field(key: "image_text_section_image") {
          reference {
            ... on MediaImage {
              image {
                url
              }
            }
          }
        }
      }
    }
    `,
    {},
    false
  );

  return data;
}

/*****************************************************************
 * Our Story Page
 *****************************************************************/
export async function getourStoryPage() {
  const data = await fetchShopifyAPI(
    `
    query ourStoryPageData {
      our_story_page_data: metaobject(
        handle: {type: "our_story_page", handle: "our-story-page"}
      ) {
        hero_marquee: field(key: "hero_marquee") {
          value
        }
        hero_leadin: field(key: "hero_leadin") {
          value
        }
        hero_intro_text: field(key: "hero_intro_text") {
          value
        }
      }
      our_story_card_data: metaobjects(
        type: "our_story_page_scroll_card"
        first: 10
        sortKey: "order"
      ) {
        nodes {
          fields {
            key
            value
            reference {
              ... on MediaImage {
                id
                image {
                  url
                }
              }
            }
          }
        }
      }
      our_story_mission_data: metaobjects(
        type: "our_story_page_mission_section"
        first: 10
        sortKey: "order"
      ) {
        nodes {
          fields {
            key
            value
            reference {
              ... on MediaImage {
                id
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
    `,
    {},
    false
  );

  return data;
}

/*****************************************************************
 * Product Single Paths
 *****************************************************************/
export async function getProductPaths() {
  const data = await fetchShopifyAPI(
    `
    {
      products(first: 100) {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
    `
  );

  return data;
}

/*****************************************************************
 * Page Single Paths
 *****************************************************************/
export async function getPagePaths() {
  const data = await fetchShopifyAPI(
    `
    query pageSingleHandles {
      pages(first: 100) {
        nodes {
          id
          handle
        }
      }
    }
    `
  );

  return data;
}

/*****************************************************************
 * Product Single Data
 *****************************************************************/
export async function getProductSingleData(handle) {
  const data = await fetchShopifyAPI(
    `
    query productSingle($handle: String!) {
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
    }
    `,
    { variables: { handle } },
    false
  );

  if (!data) {
    return null;
  }

  return data;
}

/*****************************************************************
 * Page Single Data
 *****************************************************************/
export async function getPageSingleData(handle) {
  const data = await fetchShopifyAPI(
    `
    query pageSingle($handle: String = "") {
      page(handle: $handle) {
        handle
        seo {
          description
          title
        }
        title
        body
        bodySummary
      }
    }
    `,
    { variables: { handle } },
    false
  );

  return data;
}

/*****************************************************************
 * Collection Based On Handle
 *****************************************************************/
export async function getCollectionData(namespace, key) {
  const data = await fetchShopifyAPI(
    `
    query getCollections {
      collections(first: 10) {
        nodes {
          handle
          title
          products(first: 10) {
            nodes {
              handle
              title
              featuredImage {
                url
              }
              hide_product: metafield(namespace: "custom", key: "hide_product") {
                value
              }
              productOverviewText: metafield(
                namespace: "custom",
                key: "product_overview_text"
              ) {
                value
              }
              asin: metafield(
                namespace: "custom",
                key: "product_asin"
              ) {
                value
              }
              description
              priceRange {
                minVariantPrice {
                  amount
                }
                maxVariantPrice {
                  amount
                }
              }
              collections(first: 10) {
                nodes {
                  handle
                }
              }
              variants(first: 10) {
                nodes {
                  title
                }
              }
            }
          }
          collectionMarqueeText: metafield(namespace: "custom", key: "marquee_callout") {
            value
          }
        }
      }
    }
    `,
    { variables: { namespace, key } },
    false
  );

  return data;
}

/*****************************************************************
 * Query Meta Object
 *****************************************************************/
export async function getMetaObjectData(type) {
  const data = await fetchShopifyAPI(
    `
    query metaObject($type: String!) {
      metaobjects(type: $type, first: 100) {
        nodes {
          fields {
            value
            key
            reference {
              ... on MediaImage {
                image {
                  url
                }
              }
            }
          }
        }
      }
    }
    `,
    { variables: { type } },
    false
  );

  return data;
}

/*****************************************************************
 * Get Related Products Based on Current Product's Collection
 *****************************************************************/
export async function getRelatedProducts(handle) {
  const data = await fetchShopifyAPI(
    `
    query getRelatedProducts($handle: String!) {
      collection(handle: $handle) {
        products(first: 5) {
          nodes {
            id
            handle
            title
            featuredImage {
              url
            }
            description
            productOverviewText: metafield(namespace: "custom", key: "product_overview_text") {
              value
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
                price {
                  amount
                }
              }
            }
          }
        }
      }
    }
    `,
    { variables: { handle } },
    false
  );

  if (!data) {
    return null;
  }

  return data;
}

/*****************************************************************
 * Get Global Options for Store
 *****************************************************************/
export async function getGlobalData(type) {
  const data = await fetchShopifyAPI(
    `
    query globalOptionsObject($type: String!) {
      metaobjects(type: $type, first: 10) {
        nodes {
          fields {
            value
            key
            references(first: 10) {
              nodes {
                ... on MediaImage {
                  id
                  image {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
    `,
    { variables: { type: "global_options" } },
    false
  );

  return data;
}

/*****************************************************************
 * For Sitemap Generation
 *****************************************************************/
export async function getAllPagesProducts() {
  const data = await fetchShopifyAPI(
    `
    query allPagesProducts {
      products(first: 250) {
        edges {
          node {
            id
            handle
          }
        }
      }
      pages(first: 250) {
        edges {
          node {
            id
            handle
          }
        }
      }
    }
    `
  );

  return data;
}

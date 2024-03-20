import { globby } from "globby";
import { getAllPagesProducts } from "../lib/api";

const excludedUrls = ["our-story", "home", "lf-test-product"]; // any other URLs you want to exclude

const CreateSitemap = (products, pages, templatePages) => `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${products
  .map(({ node }) => {
    if (excludedUrls.includes(node?.handle)) {
      return null;
    }

    return `
    <url>
        <loc>${`https://www.luckyfckenergy.com/products/${node.handle}`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
`;
  })
  .join("")}
${pages
  .map(({ node }) => {
    if (excludedUrls.includes(node?.handle)) {
      return null;
    }

    return `
    <url>
        <loc>${`https://www.luckyfckenergy.com/pages/${node.handle}`}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>1.0</priority>
    </url>
`;
  })
  .join("")}


${templatePages
  .filter((url) => !url.includes("[") && !url.includes("]")) // Ignore URLs with templates and '/index'
  .map((url) => {
    // Remove '/index' from the URL
    const refinedUrl = url.endsWith("index") ? url.slice(0, -6) : url;

    return `
        <url>
            <loc>${`https://www.luckyfckenergy.com/${refinedUrl}`}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.7</priority>
        </url>
      `;
  })
  .join("")}
</urlset>
`;

export async function getServerSideProps({ res }) {
  const data = await getAllPagesProducts();

  const products = data?.products?.edges;
  const pages = data?.pages?.edges;

  // Convert Next.js template paths to URL paths
  const paths = await globby(["pages/**/*{.js,.tsx}", "!pages/_*.js", "!pages/_*.tsx", "!pages/api"]);

  // This won't work for live production
  // const templatePages = paths.map(
  //   (path) =>
  //     `${path
  //       .replace(/^pages\//, "")
  //       .replace(/\.js$/, "")
  //       .replace(/\.tsx$/, "")}`
  // );

  const templatePages = [
    "", // Index homepage
    "products",
    "our-story",
    /* add all your page routes here */
  ];

  res.setHeader("Content-Type", "text/xml");
  res.write(CreateSitemap(products, pages, templatePages));
  res.end();

  return {
    props: {},
  };
}

export default function SitemapXML({}) {
  return null;
}

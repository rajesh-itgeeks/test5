import s from "./product-section.module.scss";
import ProductCard from "./product-overview-card";

function ProductSection({ data, category, forwardedRef, noImagePadding = false, darkMode = false }) {
  return (
    <>
      <section className={`${s.productSection} ${darkMode ? s.darkMode : null}`} ref={forwardedRef}>
        <div>
        </div>
        <div className={s.container}>
          {data.flatMap((prod, i) => {
            // Filter out products with hide_product set to true
            if (prod.hide_product) {
              return [];
            }

            return (
              prod?.collections?.nodes.map((prodCollection, index) => {
                if (prodCollection.handle === category) {
                  return (
                    <div className={s.cardContainer}>
                      <ProductCard
                        key={prod?.handle + prodCollection?.handle + index}
                        data={prod}
                        noImagePadding={noImagePadding}
                        darkMode={darkMode}
                      />
                    </div>
                  );
                } else {
                  return null;
                }
              }) || []
            );
          })}
        </div>
      </section>
    </>
  );
}

export default ProductSection;

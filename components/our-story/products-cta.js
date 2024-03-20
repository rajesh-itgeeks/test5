import Button from "../Button";
import s from "./products-cta.module.scss";
import { motion } from "framer-motion";

function ProductsCta() {
  return (
    <section className={s.productsCta}>
      <div className={s.container}>
        <p className={`${s.leadin} h3`}>EXPERIENCE LFG ENERGY</p>
        <h3 className={`${s.mainTitle} scroll-card-title`}>Shop our products THAT GIVE A F*CK</h3>
        <motion.div className={s.ctaContain}>
          <motion.div className={s.catContain}>
            <Button title="Shop Products" href={`/products`} transparentColor bordered />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default ProductsCta;

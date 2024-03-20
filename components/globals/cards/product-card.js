import style from "./product-card.module.scss";
import Image from "next/image";
import Link from "next/link";
import ArrowWithCircleSVG from "../../svgs/arrow-with-circle-svg";

function ProductCard({ data }) {
  // console.log(data);
  return (
    <div className={style.productCard}>
      <Link title={data?.title} href={`/products/${data.handle}`} className={style.container}>
        <div className={style.productImagery}>
          <Image
            src={data?.featuredImage?.url}
            fill
            className={style.productImg}
            alt={`Can with label rendering of${data?.title}`}
            sizes="(min-width: 1200px) 700px,
              (min-width: 768px) 350px,
              325px"
          />
        </div>
        <div className={style.productInfo}>
          <h3 className={`h5 ${style.productTitle}`}>{data?.title}</h3>
          <p
            className={`product-details ${style.desc}`}
            dangerouslySetInnerHTML={{
              __html: data?.description,
            }}
          />

          <span className={style.accentArrow}>
            <ArrowWithCircleSVG />
          </span>
        </div>
      </Link>
    </div>
  );
}
//}

export default ProductCard;

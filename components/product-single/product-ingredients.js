import Image from "next/image";
import { useState } from "react";
import {
  transformFieldsImage,
  transformFieldsToObject,
} from "../ui/field-helpers";
import s from "./product-ingredients.module.scss";

function ProductIngredients({ data }) {
  const metaObject = data?.metaobjects?.nodes;

  const [isActive, setActive] = useState(0);

  function clickHandler(index) {
    setActive(index);
  }

  return (
    <>
      <section className={s.productIngredients}>
        <div className={s.container}>
          <img
            className={s.bgStar}
            alt="Bg-Star"
            src="/images/smal-star-left.svg"
          />
          <div className={s.content}>
            <h4 className={`faqHeaderText ${s.mainTitle}`}>
              Our 5 Super Ingredients
            </h4>

            <div className={s.btnContain}>
              {metaObject.map((entry, i) => {
                const fieldsObject = transformFieldsToObject(entry.fields);
                const fieldsObjectImage = transformFieldsImage(entry.fields);

                return (
                  <button
                    aria-label={"Select Ingredient"}
                    key={i}
                    className={`${s.btnIngredient} ${
                      i === isActive ? s.active : null
                    } product-ingredient-buttons`}
                    onClick={() => clickHandler(i)}
                  >
                    <img
                      className=""
                      src={fieldsObjectImage["ingredient_icon"]}
                    />
                    <p>{fieldsObject["ingredient_name"]}</p>
                  </button>
                );
              })}
            </div>
          </div>
          <div className={s.media + " product-ingredients-media"}>
            {metaObject.map((entry, i) => {
              const fieldsObject = transformFieldsToObject(entry.fields);
              const fieldsObjectImage = transformFieldsImage(entry.fields);

              return (
                <div
                  key={"info-bg" + i}
                  className={`${s.infoBg} ${i === isActive ? s.active : null}`}
                >
                  <div className={s.bgContain}>
                    <Image
                      src={fieldsObjectImage["ingredient_featured_image"]}
                      fill
                      priority={true}
                    />
                  </div>

                  <div className={s.info + " product-info-exit-desc"}>
                    <h4 className={`value-card-type ${s.ingredientTitle}`}>
                      {fieldsObject["ingredient_title"]}
                    </h4>

                    <div className={s.desc}>
                      <p className="ingredient-desc ">
                        {fieldsObject["ingredient_description"]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductIngredients;

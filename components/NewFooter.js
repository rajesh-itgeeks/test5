import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logoUrl from "../public/images/lf-logo.webp";
import style from "./newfooter.module.scss";

import InIcon from "../components/svgs/Social icon (1).svg";
import YTubeIcon from "../components/svgs/Social icon (3).svg";
import instaIcon from "../components/svgs/Social icon.svg";

function NewFooter() {
  const [email, setEmail] = useState("");
  console.log({ email }, email.length);
  return (
    <footer className={style.footer}>
      <div className={style.maindiv}>
        <div className={style.footercolumn}>
          <div className={style.logo}>
            <Image src={logoUrl} alt="Lucky F*ck Logo" />
          </div>
          <div className={style.menu}>
            <ul>
              <Link href={"/products"} className={style.footerItem}>
                <li>Shop</li>
              </Link>
              <Link href={"/faq"} className={style.footerItem}>
                <li>FAQs</li>
              </Link>
              <Link href={'mailto:getlucky@luckybevco.com'} className={style.footerItem}>
              <li>Contact</li>
              </Link>
              <Link href={"/storelocator"} className={style.footerItem}>
                <li>Find us</li>
              </Link>
              <Link href={"/terms-and-conditions"} className={style.footerItem}>
                <li>Terms & Conditions</li>
              </Link>
              <Link href={"/privacy-policy"} className={style.footerItem}>
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className={style.footercolumn2}>
          <div className={style.text}>
            Get exclusive offers, discounts & updates
          </div>
          <div className={style.newsletter}>
            <div class="klaviyo-form-SDZZkp"></div>
            {/* <iframe
              frameBorder={0}
              src="/subscribe.html"
              style={{ height: "100px", width: "300px" }}
            ></iframe> */}
            {/* <form className={style["subscribeform"]}>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div
                  className={style.subscribeButton + " klaviyo-form-SDZZkp"}
                  disabled={email.length === 0}
                  type="button"
                ></div>
              </div>
            </form> */}
          </div>
        </div>
      </div>
      <hr className={style.divider} />

      <div className={style.footerbottom}>
        <div className="copyright">
          &copy; {new Date().getFullYear()} Lucky Bev Co. All rights reserved.
        </div>
        <div className={style["social-icons"]}>
          {/* Use your custom social icons */}
          <a target="_blank" href="https://www.instagram.com/luckyfckenergy/">
            <Image src={instaIcon} alt="Insta" />
          </a>
          {/* <a href='#'>
						<Image src={Twitter} alt='Twitter' />
					</a> */}
          <a
            target="_blank"
            href="https://www.linkedin.com/company/lucky-beverage-co/"
          >
            <Image src={InIcon} alt="Linkedin" />
          </a>
          <a
            target="_blank"
            href="https://youtube.com/@luckyfckenergy?si=nm_kvTK2LBWg2oG6"
          >
            <Image src={YTubeIcon} alt="Youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default NewFooter;

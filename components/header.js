import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useScrollDirection from "../components/ui/useScrollDirection";
import SocialIcons from "./globals/social/social-icons";
import s from "./header.module.scss";
import IconCart from "./svgs/icon-cart";

function Header({ menu, lightMode = false }) {
  const scrollDirection = useScrollDirection();
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuMobileOpen, setMenuMobileOpen] = useState(false);

  let scrollState;

  if (scrollDirection === "scrollTop") {
    scrollState = s.scrollTop;
  } else if (scrollDirection === "down") {
    if (!menuOpen) {
      scrollState = s.scrollDown;
    } else {
      scrollState = s.scrollUp;
    }
  } else {
    scrollState = s.scrollUp;
  }

  function mobileMenuClick() {
    setMenuOpen(!menuOpen);
    setMenuMobileOpen(!menuMobileOpen);
  }

  function closeSubMenuMobile() {
    setMobileSubMenuOpen(false);
  }

  let logoUrl = lightMode
    ? "/images/mobile-logo-with-taped.png"
    : "/images/mobile-logo-with-taped.png";

  return (
    <>
      <header
        className={`${s.Header} ${scrollState} ${
          lightMode ? s.lightMode + " lightMode" : null
        }`}
      >
        <div className={s.titleArea}>
          <Link href={`/`} className={`nav-item ${s.navItem}`}>
            <Image
              src={logoUrl}
              alt="Lucky F*ck Logo"
              fill
              priority
              className="sitelogo"
            />
          </Link>
        </div>

        {/* <div className={s.marqueeArea}>
          <MarqueeHeader data={JSON.parse(getValueByKey(menu, "menu_marquee"))} />
        </div> */}

        <div className={s.navArea}>
          <ul className={s.navDesktop}>
            <ul className={s.navDesktop}>
              <li>
                <Link href="/" className="nav-type">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="nav-type">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/storelocator" className="nav-type">
                  Store Locator
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="nav-type">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/faq" className="nav-type faq-lowercase">
                  FAQs
                </Link>
              </li>
            </ul>
            <div className={s.navIcons}>
              {/* <div className={s.userIcon}>
								<UserSvg />
							</div> */}
              <li className={s.navCartIcon}>
                <IconCart />
              </li>
            </div>
          </ul>

          <div
            className={`${s.navMobile} ${
              menuMobileOpen ? s.navMobileOpen : null
            }`}
          >
            <div className={s.navBtnsContain}>
              {/* <div className={s.userIcon}>
								<UserSvg />
							</div> */}

              <div className={s.navButton} onClick={mobileMenuClick}>
                <span />
              </div>
            </div>

            <div className={s.navMobileContain}>
              <ul>
                <li>
                  <Link href="/" className={`nav-type ${s.navItem}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/products" className={`nav-type ${s.navItem}`}>
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href="/storelocator"
                    className={`nav-type ${s.navItem}`}
                  >
                    Store Locator
                  </Link>
                </li>
                <li>
                  <Link href="/our-story" className={`nav-type ${s.navItem}`}>
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className={`nav-type ${s.navItem}`}>
                    FAQ<span style={{ textTransform: "lowercase" }}>s</span>
                  </Link>
                </li>

                <li className={`nav-type ${s.navItem}`}>
                  <IconCart />
                </li>

                {/* <li>
                  <Link href="/" className={`nav-type ${s.navItem}`}>
                    Where to Buy
                  </Link>
                </li> */}
              </ul>

              <div className={s.navMbileFooter}>
                <video playsInline muted loop autoPlay>
                  <source
                    src={
                      lightMode
                        ? "/media/coin-white.mp4"
                        : "/media/coin-black.mp4"
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>

                <SocialIcons className={s.socialContain} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

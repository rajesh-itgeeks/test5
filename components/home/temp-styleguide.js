function TempStyleguide({ data }) {
  //const title = data.title;

  return (
    <section className={style.tempStyleguide}>
      <div className={style.container}>
        <h2 className={`h1 ${style.title}`}>h1 Class</h2>
        <br />
        <br />
        <br />
        <h2 className={`h2 ${style.title}`}>h2 Class</h2>
        <br />
        <br />
        <br />
        <h2 className={`h2-alt ${style.title}`}>h2-alt Class</h2>
        <br />
        <br />
        <br />
        <h2 className={`h3 ${style.title}`}>
          h3 Class and also <em>in italics</em> with an em tag
          <br />
          LUCKY F*CK WAS FOUNDED BY A SURVIVOR WHO CONQUERED{' '}
          <em>UNIMAGINABLE CHALLENGES</em> TO ACHIEVE GREAT SUCCESS IN LIFE.
        </h2>
        <br />
        <br />
        <br />
        <h2 className={`h4 ${style.title}`}>
          h4 Class
          <br />
          WELCOME TO EUPHORIC ENERGY
        </h2>
        <br />
        <br />
        <br />
        <h2 className={`h5 ${style.title}`}>
          h5 Class | titles of products / cards
        </h2>
        <br />
        <br />
        <br />
        <h2 className={`h6 ${style.title}`}>
          footer header
          <br />
          Sign up for <em>luck</em>
        </h2>
        <br />
        <br />
        <br />
        <p className={`leadin ${style.reg}`}>
          .leadin | Lorem ipsum dolor sit amet
        </p>
        <br />
        <br />
        <br />
        <p className={`${style.reg}`}>
          regular paragraph text
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <br />
        <br />
        <br />
        <p className={`product-details ${style.reg}`}>
          product detail text in cards
          <br />
          Lorem ipsum dolor sit amet, consetetur sadips elitr, sed diam nonumy
          eirmod tempor invidunt ut labore.
        </p>
        <br />
        <br />
        <br />
        <p className={`small ${style.reg}`}>
          .small class (is regular paragraph size on desktop)
          <br />
          We inspire radical change in the way the world sees luck. You have the
          power to unapologetically create a life of magic by seeking fortune in
          unlucky moments.
        </p>
        <br />
        <br />
        <br />
        <p className={`nav-type ${style.reg}`}>
          .nav-type class (is used in the menu links & menu marquee text)
          <br />
          Products, Our Story, Where to Buy
        </p>
        <br />
        <br />
        <br />
        <p className={`footer-links ${style.reg}`}>
          .footer-links class (is used in the footer nav/links)
          <br />
          FREE SHIPPING ON AMAZON * WE ARE ALL LUCKY FU
          <br />
          Products, Our Story, Where to buy
        </p>
        <br />
        <br />
        <br />
        <p className={`footer-type ${style.reg}`}>
          .footer-type class (is used in the footer paragraph)
          <br />
          We are humans—we are messy—we are real. We are Lucky F*ckers. Lucky
          fathers, lucky daughters, lucky friends, and lucky husbands. Join our
          community.
        </p>
        <br />
        <br />
        <br />
        <p className={`footer-detail ${style.reg}`}>
          .footer-detail class (is used in the footer sub-links)
          <br />
          ©2023 Luckyfckenergy, Privacy policy, Terms and conditions, SITE BY
          MOVETIC ⚡️
        </p>
        <br />
        <br />
        <br />
        <p className={`outline-text stroke-black ${style.reg}`}>
          .outline-text class + .stroke-black class (to make marquee text + make
          it black)
          <br />
          Five core ingredients * zero sugar * five calories
        </p>
        <br />
        <br />
        <br />
        <p
          className={`outline-text stroke-white ${style.reg}`}
          style={{
            backgroundColor: 'black',
          }}
        >
          .outline-text class + .stroke-white class (to make marquee text + make
          it white)
          <br />
          Five core ingredients * zero sugar * five calories
        </p>
      </div>
    </section>
  );
}

export default TempStyleguide;

import { useRouter } from "next/router";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import { getGlobalData } from "../../lib/api";
import "../faq/faq.module.scss";

function PPPage({ globalData }) {
  // console.log(ourStoryPage);
  const router = useRouter();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const offset = 30; // Adjust this value to set the desired margin from the top
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const offsetPosition = elementRect - bodyRect - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Layout global={globalData}>
        <div
          style={{
            width: "100%",
            maxWidth: "100vw",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="privacyPolicyContainer"
        >
          <div
            classname={"staticPageContainer"}
            style={{ marginTop: "110px", width:"98vw", maxWidth: "1200px", padding: "24px" }}
          >
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <strong style={{ fontWeight: "bold" }}>
                LUCKY BEVERAGE CO. – Privacy Notice&nbsp;
              </strong>
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <em>Last updated on _________, 2023</em>
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <strong style={{ fontWeight: "bold" }}>PRIVACY NOTICE</strong>
              &nbsp;
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              This&nbsp;
              <strong style={{ fontWeight: "bold" }}>Privacy Notice</strong>{" "}
              describes the information collection, use, and sharing practices
              of Lucky Beverage Co., (“
              <strong style={{ fontWeight: "bold" }}>Lucky Beverage</strong>”, “
              <strong style={{ fontWeight: "bold" }}>we</strong>”, “
              <strong style={{ fontWeight: "bold" }}>us</strong>”, “
              <strong style={{ fontWeight: "bold" }}>our</strong>”) and its
              affiliates and subsidiaries when you interact with us through our
              website at&nbsp;www.luckybevco.com&nbsp;(the “
              <strong style={{ fontWeight: "bold" }}>Website</strong>”) or other
              digital products on which this notice appears (collectively, the “
              <strong style={{ fontWeight: "bold" }}>Services</strong>
              ”).&nbsp;When you use the Services, your personal information is
              collected and processed by Lucky Beverage.&nbsp;
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ol type="I">
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    COLLECTION&nbsp;
                  </strong>
                  <strong style={{ fontWeight: "bold" }}>
                    AND USE OF PERSONAL INFORMATION
                  </strong>
                </p>
              </li>
            </ol>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              We collect personal information, which is information that
              identifies, relates to, describes, is capable of being associated
              with, or could reasonably be linked, directly or indirectly, to
              you, when you:&nbsp;
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    Purchase a Lucky F*ck Energy Drink.&nbsp;
                  </strong>
                  Our Website allows you to begin a purchase on our Website by
                  adding items to your cart. However, you will automatically be
                  redirected to Amazon to complete the purchase. We do not sell
                  Lucky F*ck Energy Drink directly from our Website. To learn
                  more about how Amazon handles your personal information,
                  please see Amazon’s{" "}
                  <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=GLSBYFE9MGKKQXXM">
                    Terms of Use
                  </a>
                  .&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                marginLeft: "0.25in",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    Join our Mailing List.&nbsp;
                  </strong>{" "}
                  If you join our mailing list, we will collect from you your
                  email address and mobile phone number. We use this information
                  to send you email and SMS communications regarding discounts
                  on our products, new products, and promotional and marketing
                  information related to Lucky F*ck energy drinks and products.
                  You can opt-out of receiving emails at any time by clicking
                  the “Unsubscribe” link at the bottom of the email. You can
                  opt-out of receiving SMS messages by replying ‘STOP’ at any
                  time.&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                marginLeft: "0.25in",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    Engage with Us on Social Media.&nbsp;
                  </strong>{" "}
                  If you engage with us on any of our social media platforms for
                  example, Instagram, TikTok, YouTube, or Meta (formerly known
                  as Facebook), we collect basic engagement metrics or use of it
                  to tailor content and marketing and use it to improve user
                  experience. Please note, we do not control the use or storage
                  of the information that you have posted to any social media
                  website or platform. The information is collected and
                  processed by the social networking platforms for their own
                  purposes, including marketing. These social media platforms
                  are also publicly accessible and any personal information that
                  you post on them can be viewed by others or used by them as
                  they see fit. For more information on how TikTok, Instagram,
                  Meta, or YouTube use your personal information, please see{" "}
                  <a href="https://www.tiktok.com/legal/page/us/privacy-policy/en">
                    TikTok’s Privacy Policy
                  </a>
                  ,{" "}
                  <a href="https://help.instagram.com/155833707900388">
                    Instagram’s Privacy Policy
                  </a>
                  ,{" "}
                  <a href="https://www.facebook.com/privacy/policy/">
                    Meta’s Privacy Policy
                  </a>
                  , or{" "}
                  <a href="https://www.youtube.com/howyoutubeworks/our-commitments/protecting-user-data/">
                    YouTube’s Privacy Policy
                  </a>
                  .&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                marginBottom: "0.11in",
                color: "#000000",
                lineHeight: "108%",
                textAlign: "left",
                background: "transparent",
                marginLeft: "0.5in",
              }}
            >
              <br />
              &nbsp;
            </p>
            <ul>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    Contact Us.&nbsp;
                  </strong>{" "}
                  If you contact us by sending us an email, we will collect from
                  you your name, email address, and any other additional
                  information you wish to provide. We use this information to
                  respond to your inquiry and look up past order history, if
                  applicable.&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                marginBottom: "0.11in",
                color: "#000000",
                lineHeight: "108%",
                textAlign: "left",
                background: "transparent",
                fontFamily: '"Calibri", serif',
                fontSize: "15px",
              }}
            >
              <br />
              &nbsp;
            </p>
            <ul>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    Visit or interact with the Services.&nbsp;
                  </strong>
                  In addition to the personal information you provide directly
                  to us, we also collect information from you automatically as
                  you use our Services via cookies, pixels, and similar tracking
                  technologies. This includes the following&nbsp;
                  <em>
                    internet or other electronic network activity information
                  </em>
                  <span lang="en">.&nbsp;</span>
                </p>
              </li>
            </ul>
            <p
              style={{
                marginBottom: "0.11in",
                color: "#000000",
                lineHeight: "108%",
                textAlign: "left",
                background: "transparent",
                marginLeft: "0.5in",
              }}
            >
              <br />
              &nbsp;
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                marginLeft: "0.25in",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              We use essential, performance, marketing, and analytics cookies to
              collect your usage, device, and location information when you
              interact with the Services. We use this information to: (i) track
              you within the Services; (ii) enhance user experience; (iii)
              conduct analytics to improve the Services; (iv) prevent fraudulent
              use of the Services; (v) diagnosis and repair Services errors,
              and, in cases of abuse, track and mitigate the abuse;&nbsp;and
              (vi) provide targeted advertising.&nbsp;
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              Particular third-party cookies to note on our Website include:
              Google Analytics, Double Click, and Meta (Facebook). In general,
              you can also disable cookies by setting your browser to refuse
              cookies or indicate when a cookie is being sent. Please note, if
              you opt out of these targeted advertising cookies, your opt-out
              will be specific to the web browser, app, or device from which you
              accessed the opt-out. If you use multiple devices or web browsers,
              you will need to opt out of each browser or device that you
              use.&nbsp;To learn more about your privacy choices, please
              see&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                YOUR INFORMATION CHOICES.
              </strong>
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li
                  className="inner-li"
                  >
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",

                  }}
                >
                  <span size={2} style={{ fontSize: "13px" }}>
                    <u>
                      <strong style={{ fontWeight: "bold" }}>
                        Google Analytics
                      </strong>
                    </u>
                  </span>
                  . We use Google Analytics to collect information on your use
                  of the Services for its improvement. To collect this
                  information, Google Analytics installs cookies on your browser
                  or reads cookies that are already there. Google Analytics also
                  receives information about you from applications you have
                  downloaded that partner with Google. We do not combine the
                  information collected through the use of Google Analytics with
                  personal information. Google’s ability to use and share
                  information collected by Google Analytics about your visits to
                  our Website or to another application which partners with
                  Google is restricted by the Google Analytics{" "}
                  <a href="https://marketingplatform.google.com/about/analytics/terms/us/">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a href="https://support.google.com/analytics/answer/7318509?hl=en">
                    Privacy Policy
                  </a>
                  . To prevent your data from being used by Google Analytics,
                  you can download the Google Analytics opt-out browser add-on,
                  which can be accessed{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout">here</a>
                  .&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                marginLeft: "0.5in",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li
                  className="inner-li"
                  >
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <span size={2} style={{ fontSize: "13px" }}>
                    <u>
                      <strong style={{ fontWeight: "bold" }}>
                        Double Click
                      </strong>
                    </u>
                  </span>
                  . We utilize DoubleClick by Google to serve ads based on a
                  user’s prior visits to our Website. Each visitor to our
                  Website receives a different cookie, and the information
                  collected by the cookie is used to generate conversion
                  statistics and allows us to see the total number of
                  individuals who clicked on our ads. DoubleClick enables Google
                  and its partners to serve ads to you based on your visits to
                  our Website in addition to other websites on the Internet.
                  Please review Google’s{" "}
                  <a href="https://support.google.com/analytics/answer/7318509?hl=en">
                    Privacy Policy
                  </a>{" "}
                  for additional information on how Google uses the information
                  collected.&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                marginBottom: "0.11in",
                color: "#000000",
                lineHeight: "108%",
                textAlign: "left",
                background: "transparent",
                marginLeft: "0.5in",
              }}
            >
              <br />
              &nbsp;
            </p>
            <ul>
              <li
                  className="inner-li"
                  >
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <span size={2} style={{ fontSize: "13px" }}>
                    <u>
                      <strong style={{ fontWeight: "bold" }}>
                        Facebook Pixel
                      </strong>
                    </u>
                  </span>
                  <span size={2} style={{ fontSize: "13px" }}>
                    <strong style={{ fontWeight: "bold" }}>.</strong>
                  </span>
                  <span size={2} style={{ fontSize: "13px" }}>
                    We use Facebook Pixel to customize our advertising and to
                    serve you ads on your social media based on your browsing
                    behavior. This allows your behavior to be tracked after you
                    have been redirected to our websites and mobile applications
                    by clicking on the Facebook ad. Facebook Pixel stores a
                    cookie on your device to enable us to measure the
                    effectiveness of Facebook ads for statistical and market
                    research purposes. We do not have access to the information
                    collected through Facebook Pixel. However, the information
                    collected via the Facebook Pixel is also stored and
                    processed by Facebook. Facebook may link this information to
                    your Facebook account and also use it for its own
                    promotional purposes in accordance with Facebook's Data
                    Usage Policy. Facebook Pixel also allows Facebook and its
                    partners to show you advertisements on and outside of
                    Facebook. You can opt out of displaying Facebook ads and
                    sharing by visiting your Facebook Ad Settings, and you can
                    clear and control the information that third parties share
                    with Facebook in your Off-Facebook Activity page. If you do
                    not have a Facebook account, you can opt out of Facebook ads
                    through the Digital Advertising Alliance. You can also
                  </span>
                  <span size={2} style={{ fontSize: "13px" }}>
                    &nbsp;follow the instructions in the “
                  </span>
                  <span size={2} style={{ fontSize: "13px" }}>
                    <strong style={{ fontWeight: "bold" }}>
                      YOUR INFORMATION CHOICES
                    </strong>
                  </span>
                  <span size={2} style={{ fontSize: "13px" }}>
                    ” section
                  </span>
                  .
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>Aggregate data</strong>
                  . We aggregate the data we collect for benchmarking purposes
                  and for internal analytics. We maintain and use this data in
                  deidentified form. We will not attempt to reidentify the data
                  unless it is necessary to determine whether our
                  deidentification processes satisfy applicable data protection
                  laws.
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                marginLeft: "0.25in",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              Lucky Beverage will also use the personal information we collect
              as described in this section to comply with the law, to
              efficiently maintain our business, and for other limited
              circumstances as described in&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                HOW WE SHARE YOUR PERSONAL INFORMATION
              </strong>
              .
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                marginLeft: "0.25in",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ol type="I" start={2}>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    HOW WE SHARE YOUR PERSONAL INFORMATION
                  </strong>
                </p>
              </li>
            </ol>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ol type="A">
              <li
                  className="inner-li"
                  >
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <u>
                    <strong style={{ fontWeight: "bold" }}>
                      General Sharing&nbsp;
                    </strong>
                  </u>
                </p>
              </li>
            </ol>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              Lucky Beverage shares personal information in the following
              instances:&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0.11in",
                color: "#000000",
                lineHeight: "108%",
                textAlign: "left",
                background: "transparent",
                marginLeft: "0.5in",
              }}
            >
              <br />
              &nbsp;
            </p>
            <ul>
              <li
                  className="inner-li"
                  >
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    In the event of a corporate reorganization
                  </strong>
                  . In the event that we enter into, or intend to enter into, a
                  transaction that alters the structure of our business, such as
                  a reorganization, merger, acquisition, sale, joint venture,
                  assignment, consolidation, transfer, change of control, or
                  other disposition of all or any portion of our business,
                  assets or stock, we would share personal information with
                  third parties, including the buyer or target (and their agents
                  and advisors) for the purpose of facilitating and completing
                  the transaction. We will also share personal information with
                  third parties if we undergo bankruptcy or liquidation, in the
                  course of such proceedings.
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                marginLeft: "0.5in",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li
                  className="inner-li"
                  >
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    With service providers
                  </strong>
                  .&nbsp;
                  <span style={{ color: "rgb(45, 47, 49)" }}>
                    We share your data with third-party companies who perform
                    services on our behalf, like managing our e-commerce
                    platform, shipping vendor, fraud and abuse prevention, data
                    analysis, marketing and advertising services, email and
                    hosting services, and customer services and support. These
                    service providers may access your personal data and are
                    required to use it solely as we direct, to provide our
                    requested service.
                  </span>
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li
                  className="inner-li"
                  >
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    With Third Parties.&nbsp;
                  </strong>
                  We may need to disclose your personal information to third
                  parties, such as legal advisors, law enforcement agencies, or
                  governmental/regulatory bodies to protect our legal interests
                  and other rights, protect against fraud or other illegal
                  activities, prevent harm, for risk management purposes, and to
                  comply with our legal obligations.&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li
                  className="inner-li"
                  >
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    For legal purposes
                  </strong>
                  . We share your personal information where we are legally
                  required to do so, such as in response to court orders, law
                  enforcement or legal process, including for national security
                  purposes; to establish, protect, or exercise our legal rights,
                  as required to enforce our terms of service or other
                  contracts; to defend against legal claims or demands; to
                  detect, investigate, prevent, or take action against illegal
                  activities, fraud, or situations involving potential threats
                  to the rights, property, or personal safety of any person; or
                  to comply with the requirements of any applicable law.
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ol type="I" start={3}>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    YOUR INFORMATION CHOICES
                  </strong>
                </p>
              </li>
            </ol>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              You have the following choices with respect to your personal
              information:&nbsp;
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    Opt Out of Google Analytics.
                  </strong>{" "}
                  To prevent your data from being used by Google Analytics, you
                  can download the Google Analytics opt-out browser, which can
                  be accessed{" "}
                  <a href="https://tools.google.com/dlpage/gaoptout">here</a>
                  .&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                marginBottom: "0.11in",
                color: "#000000",
                lineHeight: "108%",
                textAlign: "left",
                background: "transparent",
                marginLeft: "0.5in",
              }}
            >
              <br />
              &nbsp;
            </p>
            <ul>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    Opt Out of Advertising&nbsp;
                  </strong>
                  <strong style={{ fontWeight: "bold" }}>Cookies.</strong> All
                  session cookies are temporary and expire after you close your
                  web browser. Persistent cookies can be removed by following
                  your web browser’s directions. To find out how to see what
                  cookies have been set on your computer or device, and how to
                  reject and delete the cookies, please visit:{" "}
                  <a href="https://www.aboutcookies.org/">
                    https://www.aboutcookies.org/
                  </a>
                  . Please note that each web browser is different. To find
                  information relating to your browser, visit the browser
                  developer’s Website and mobile application. If you reset your
                  web browser to refuse all cookies or to indicate when a cookie
                  is being sent, some features of our website may not function
                  properly. If you choose to opt out, we will place an "opt-out
                  cookie" on your device. The "opt-out cookie" is browser
                  specific and device specific and only lasts until cookies are
                  cleared from your browser or device. The opt-out cookie will
                  not work for essential cookies. If the cookie is removed or
                  deleted, if you upgrade your browser or if you visit us from a
                  different computer, you will need to return and update your
                  preferences. By clicking on the “Opt-Out” links below, you
                  will be directed to the respective third-party website where
                  your computer will be scanned to determine who maintains
                  cookies on you. At that time, you can either choose to opt out
                  of all targeted advertising or you can choose to opt out of
                  targeted advertising by selecting individual companies who
                  maintain a cookie on your machine.
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                marginLeft: "0.25in",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ul>
              <ul>
                <li
                  className="inner-li"
                  >
                  <p
                    style={{
                      marginBottom: "0.11in",
                      color: "#000000",
                      lineHeight: "108%",
                      textAlign: "left",
                      background: "transparent",
                    }}
                  >
                    Association of National Advertisers opt-out registration:{" "}
                    <a href="https://dmachoice.thedma.org/">
                      https://dmachoice.thedma.org/
                    </a>
                  </p>
                </li>
                <li
                  className="inner-li"
                  >
                  <p
                    style={{
                      marginBottom: "0.11in",
                      color: "#000000",
                      lineHeight: "108%",
                      textAlign: "left",
                      background: "transparent",
                    }}
                  >
                    Network Advertising Initiative (NAI) Opt-Out:{" "}
                    <a href="https://www.networkadvertising.org/managing/opt_out.asp">
                      https://www.networkadvertising.org/managing/opt_out.asp
                    </a>
                  </p>
                </li>
                <li
                  className="inner-li"
                  >
                  <p
                    style={{
                      marginBottom: "0.11in",
                      color: "#000000",
                      lineHeight: "108%",
                      textAlign: "left",
                      background: "transparent",
                    }}
                  >
                    Digital Advertising Alliance (DAA) Opt-Out:{" "}
                    <a href="https://optout.aboutads.info/">
                      https://optout.aboutads.info
                    </a>
                  </p>
                </li>
                <li
                  className="inner-li"
                  >
                  <p
                    style={{
                      marginBottom: "0in",
                      color: "#000000",
                      lineHeight: "19px",
                      textAlign: "left",
                      background: "transparent",
                    }}
                  >
                    European Union (EU) /European Economic Area (EEA) Opt-Out:{" "}
                    <a href="http://www.youronlinechoices.eu/">
                      http://www.youronlinechoices.eu
                    </a>
                  </p>
                </li>
                <li
                  className="inner-li"
                  >
                  <p
                    style={{
                      marginBottom: "0in",
                      color: "#000000",
                      lineHeight: "19px",
                      textAlign: "left",
                      background: "transparent",
                    }}
                  >
                    In general, you can also disable cookies by setting your
                    browser to refuse cookies or indicate when a cookie is being
                    sent.
                  </p>
                </li>
              </ul>
            </ul>
            <p
              style={{
                marginBottom: "0in",
                color: "#000000",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                marginLeft: "0.75in",
              }}
            >
              <br />
            </p>
            <ul>
              <li>
                <p
                  style={{
                    marginBottom: "0.11in",
                    color: "#000000",
                    lineHeight: "108%",
                    textAlign: "left",
                    background: "transparent",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    Opt Out of Marketing Emails.&nbsp;
                  </strong>
                  You can unsubscribe to our marketing email communications at
                  any time by clicking the “Unsubscribe” button at the bottom of
                  the email. Please note, we may still send you emails related
                  to our Services and Products.&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                marginBottom: "0.11in",
                color: "#000000",
                lineHeight: "108%",
                textAlign: "left",
                background: "transparent",
                marginLeft: "0.25in",
              }}
            >
              <br />
              &nbsp;
            </p>
            <ul>
              <li>
                <p
                  style={{
                    marginBottom: "0.11in",
                    color: "#000000",
                    lineHeight: "108%",
                    textAlign: "left",
                    background: "transparent",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    Opt Out of SMS Messaging.&nbsp;
                  </strong>
                  You can unsubscribe from receiving SMS messages at any time by
                  responding ‘STOP’ to our SMS message. Please note, we may
                  still send you SMS messages related to our Services.&nbsp;
                </p>
              </li>
            </ul>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ol type="I" start={4}>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>DO NOT TRACK</strong>
                </p>
              </li>
            </ol>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              We do not respond to Do Not Track requests. Do Not Track is a
              preference you can set in your web browser to inform websites and
              mobile applications that you do not want to be tracked. You can
              enable or disable Do Not Track by visiting the Preferences or
              Settings page of your web browser.&nbsp;
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ol type="I" start={5}>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    INFORMATION SECURITY&nbsp;
                  </strong>
                </p>
              </li>
            </ol>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              We implement and maintain reasonable security measures to protect
              the personal information that we collect and maintain from
              unauthorized access, destruction, use, modification, or
              disclosure. These security measures include: data protection,
              secure configuration of assets, account management, access control
              management, vulnerability management, audit log review, malware
              defenses, network monitoring and defenses, a security awareness
              training program, and security incident response. However, no
              security measure or modality of data transmission is 100% secure,
              and we are unable to guarantee the absolute security of the
              personal information we have collected from you.&nbsp;
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ol type="I" start={6}>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    CHILDREN’S PRIVACY&nbsp;
                  </strong>
                </p>
              </li>
            </ol>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              We do not collect the personal information of anyone under the age
              of thirteen (13). If we learn that we have collected or received
              personal information from individuals under the age of thirteen
              (13), we will delete the personal information. If you believe we
              have personal information on individuals under the age of thirteen
              (13), please contact us at the contact information provided below.
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ol type="I" start={7}>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    CHANGES TO THIS PRIVACY NOTICE
                  </strong>
                </p>
              </li>
            </ol>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              We may amend this Privacy Notice&nbsp;in our sole discretion at
              any time. If we do, we will post the changes to this page, and
              will indicate the date the changes go into effect. We encourage
              you to review our Privacy Notice to stay informed. If we make
              changes that materially affect your privacy rights, we will notify
              you by prominent posting on the Website and/or via email, and
              obtain your consent, if required.
            </p>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <ol type="I" start={8}>
              <li>
                <p
                  style={{
                    color: "rgb(0, 0, 0)",
                    textAlign: "justify",
                    background: "transparent",
                    marginBottom: "0in",
                    lineHeight: "19px",
                  }}
                >
                  <strong style={{ fontWeight: "bold" }}>
                    CONTACT US&nbsp;
                  </strong>
                </p>
              </li>
            </ol>
            <p
              style={{
                color: "rgb(0, 0, 0)",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
                marginBottom: "0in",
                lineHeight: "19px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0.11in",
                color: "rgb(0, 0, 0)",
                lineHeight: "108%",
                textAlign: "justify",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "15px",
              }}
            >
              If you have any questions or concerns regarding this Privacy
              Notice, please contact{" "}
              <a href="mailto:getlucky@luckyfckenergy.com">
                getlucky@luckyfckenergy.com
              </a>
              .&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0.11in",
                color: "#000000",
                lineHeight: "108%",
                textAlign: "left",
                background: "transparent",
                fontFamily: '"Calibri", serif',
                fontSize: "15px",
              }}
            >
              <br />
              &nbsp;
            </p>
            <p
              style={{
                marginBottom: "0.11in",
                color: "#000000",
                lineHeight: "108%",
                textAlign: "left",
                background: "transparent",
                fontFamily: '"Calibri", serif',
                fontSize: "15px",
              }}
            >
              <br />
              &nbsp;
            </p>
          </div>
        </div>
        <Footer global={globalData} hideMarquee />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  // const ourStoryPage = await getourStoryPage();
  const globalData = await getGlobalData();
  // const pageSeoData = await getPageSingleData("faq");

  return {
    props: { globalData },
    revalidate: 60,
  };
}

export default PPPage;
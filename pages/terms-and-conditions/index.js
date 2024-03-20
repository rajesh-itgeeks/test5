import { useRouter } from "next/router";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import { getGlobalData } from "../../lib/api";

function TOSPage({ globalData }) {
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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            classname="{style.faqContainer}"
            style={{
              marginTop: "150px",
              maxWidth: "1200px",
              padding: "24px",
            }}
          >
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              <strong>
                IMPORTANT -- READ THIS CAREFULLY BEFORE CONTINUING!
              </strong>
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              <strong>
                By clicking on the "AGREE" button below, you indicate your&nbsp;
              </strong>
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontWeight: "bold",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              <strong>acceptance of the following Terms of Use.&nbsp;</strong>
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                marginBottom: "0in",
              }}
            >
              <br />
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontWeight: "bold",
                marginBottom: "0in",
              }}
            >
              <strong>LUCKY BEVERAGE CO. TERMS OF USE&nbsp;</strong>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              Please read the following&nbsp;
              <span style={{ color: "rgb(0, 0, 0)" }}>Terms of Use</span> (these
              "Terms") carefully before using the Lucky Beverage Co. ("Lucky
              Beverage", "we", "us", or "our") website, purchasing any of our
              Lucky F*ck energy products (our "Products"), participating in any
              online features, or otherwise using any of the services and/or
              programs offered by Lucky Beverage (collectively, the "Services").
              These Terms are in effect for all of our Products and Services.
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              These Terms are not applicable to any other web page operated
              and/or owned by any entity other than Lucky Beverage, including,
              but not limited to, any website, mobile application, blog, forum,
              or other material operated by any third party identified on our
              website, at https://luckybevco.com (the "Website"). When visiting
              these third-party websites or using these third party services,
              you should refer to the terms and conditions in effect for the
              applicable owner. You must be at least 18 years old to use the
              Website and purchase any of our Products.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              <strong>
                PLEASE READ THESE TERMS CAREFULLY AS THEY INCLUDE IMPORTANT
                INFORMATION ABOUT YOUR LEGAL RIGHTS, REMEDIES AND OBLIGATIONS.
                BY PURCHASING ANY PRODUCTS OR USING ANY SERVICES, YOU ARE
                ENTERING INTO A LEGAL CONTRACT WITH LUCKY BEVERAGE REGARDING
                YOUR USE OF THE PRODUCTS AND SERVICES. BY PURCHASING PRODUCTS OR
                USING SERVICES, YOU AGREE TO BE BOUND BY THESE TERMS AND ALL
                ADDITIONAL TERMS, SUCH AS REFUND AND SHIPPING POLICIES, OR RULES
                FOR A CONTEST OR SWEEPSTAKES, ARE INCORPORATED, AS APPROPRIATE,
                HEREIN BY REFERENCE. IF YOU DO NOT AGREE TO ANY PORTION OF
                THESE&nbsp;
              </strong>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong>TERMS</strong>
              </span>
              <strong>
                , YOU SHOULD NOT PURCHASE ANY PRODUCTS OR ACCESS OR OTHERWISE
                USE ANY SERVICES.
              </strong>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontWeight: "bold",
              }}
            >
              1.&nbsp;<strong>PRODUCTS.</strong>&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              (a) Lucky Beverage offers Lucky F*ck energy beverages (each, a
              "Product"), as described in more detail on our website, at
              www.luckyfckenergy.com. We retain all rights, including all
              Intellectual Property Rights and all other proprietary rights, in
              and to the Products, including, but not limited to, the Product(s)
              that you purchase.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontWeight: "bold",
              }}
            >
              2.&nbsp;<strong>USE OF SITE.&nbsp;</strong>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              (a)&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                USER CONTENT GUIDELINES
              </strong>
              . You are responsible for your use of the Services. Our goal is to
              create a positive, useful, and safe user experience. To promote
              this goal, we prohibit certain conduct that may be harmful to
              other users or to us. In particular, you may not:
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                textIndent: "0.5in",
              }}
            >
              i. Violate any law or regulation;&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              ii. Violate, infringe, or misappropriate other people’s
              intellectual property, privacy, publicity, or other legal
              rights;&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              iii. Post or share anything that is illegal, abusive, harassing,
              harmful to reputation, pornographic, indecent, profane, obscene,
              hateful, racist, discriminatory, or otherwise objectionable;&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              iv. Send unsolicited or unauthorized advertising or commercial
              communications, such as spam;&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              v. Use any means to spider, harvest, scrape, crawl, or participate
              in the use of software, including spyware, to collect data from
              the Website or Services;&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              vi. Transmit any viruses or other computer instructions or
              technological means whose purpose is to disrupt, damage, or
              interfere with the use of computers or related systems;&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              vii. Stalk, harass, or harm another individual;&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              viii. Impersonate any person or entity or perform any other
              similar fraudulent activity, such as phishing;&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              ix. Attempt to decipher, decompile, disassemble, or reverse
              engineer any of the software of underlying code used to provide
              the Website or Services;&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              x. Attempt to circumvent any technological measure implemented by
              us or any of our providers or other third party (including another
              user) to protect the Website or Services; or&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginLeft: "0.5in",
              }}
            >
              xi. Advocate, encourage, or assist any third party in doing the
              foregoing.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              (b)&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                ACCURATE INFORMATION.&nbsp;
              </strong>
              In creating and using your Customer Account, you agree to: (i)
              provide true, accurate, current, and complete information about
              yourself and any company or other organization that you represent
              on any registration form required for the Products or the Services
              (such information being the "Registration Data"); (ii) maintain
              and promptly update the Registration Data to keep it true,
              accurate, current, and complete; and (iii) maintain and promptly
              update payment information to keep it true, accurate, current, and
              complete. If you provide any information that is untrue,
              inaccurate, not current, or incomplete, or if we have reasonable
              grounds to suspect that such information is untrue, inaccurate,
              not current, or incomplete, then we have the right to suspend or
              terminate your Customer Account and refuse any and all current or
              future use of your Customer Account, including cancellation of any
              pending orders.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              (c)&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                NON-TRANSFERABILITY OF CUSTOMER ACCOUNT.&nbsp;
              </strong>
              Customer Accounts and usernames are non-transferable, and all
              customers are obligated to take preventative measures to prohibit
              unauthorized users from purchasing Products or accessing the
              Services with his or her username and password.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              3.&nbsp;
              <strong style={{ fontWeight: "bold" }}>PRIVACY.&nbsp;</strong>We
              know that privacy is very important to you, and it is very
              important to us as well. By providing us with your email address
              and other contact information, you consent to receiving electronic
              communications from us. We will communicate with you by email or
              by posting notices on the Website. You agree that all agreements,
              notices, disclosures and other communications that we provide to
              you electronically satisfy any legal requirement that such
              communication be in writing. Personal data that you provide
              regarding yourself will be handled in accordance with our Privacy
              Policy located at&nbsp;
              <a href="https://luckybevco.com/privacy-policy">
                www.luckybevco.com/privacy
              </a>
              .
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              4.&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                NOT INTENDED FOR CHILDREN.&nbsp;
              </strong>
              We do not collect personally identifiable information from any
              person who we know to be under the age of thirteen (13).
              Specifically, the Products and Services are not intended or
              designed to attract children under the age of thirteen (13). By
              purchasing Products or using any of the Services, you affirm that
              you are more than thirteen (13) years of age and are fully able
              and competent to enter into the terms, conditions, obligations,
              affirmations, representations, and warranties set forth in these
              Terms, and to abide by and comply with these Terms. In any case,
              you affirm that you are over the age of thirteen (13), as{" "}
              <strong style={{ fontWeight: "bold" }}>
                THE PRODUCTS AND SERVICES ARE NOT INTENDED FOR CHILDREN UNDER
                THIRTEEN (13)
              </strong>
              .
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              5.&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                INTELLECTUAL PROPERTY.&nbsp;
              </strong>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              (a) The Products, Services, graphics, and design related to our
              Website contain or include intellectual property that we own,
              control and/or license. All applicable intellectual property laws,
              including, but not limited to, copyright laws, protect our rights
              in and to the Products and the Services. No portion of the
              Products, Services, graphics, and design may be reproduced in any
              form or by any means, except as provided in these Terms.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              (b) We are the owner or authorized licensee of all trademarks,
              service marks, and logos used and displayed in or through the
              Products or the Services. All trademarks and service marks of
              Lucky Beverage, or our affiliates, that may be referred to in or
              through the Products or the Services are the property of Lucky
              Beverage, or one of our affiliates. Other parties' trademarks and
              service marks that may be referred to in or through the Products
              or the Services are the property of their respective owners.
              Nothing in the Products or the Services should be construed as
              granting, by implication, estoppel, or otherwise, any license or
              right to use any of Lucky Beverage's, or its subsidiaries' or
              affiliates', trademarks, service marks, or copyrights without
              Lucky Beverage’s prior written permission. Lucky Beverage
              aggressively enforces its Intellectual Property Rights. Neither
              the name of Lucky Beverage, its affiliates, nor any of Lucky
              Beverage’s other trademarks, service marks, or copyrighted
              materials may be used in any way, including in any advertising,
              hyperlink, publicity, or promotional materials of any kind,
              whether relating to the Products, the Services, or otherwise,
              without our prior written permission.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              6.&nbsp;<strong style={{ fontWeight: "bold" }}>WARRANTIES</strong>
              . All Lucky Beverage themes are, subject to reasonable
              limitations, visually consistent and functionally compatible, in
              all material aspects, across all of the Supported Browsers. In an
              instance where certain features or designs are not reasonably
              feasible due to a Supported Browser's technical limitations, Lucky
              Beverage will use its discretion to implement a reasonable
              alternative.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              7.&nbsp;
              <strong style={{ fontWeight: "bold" }}>DISCLAIMERS.&nbsp;</strong>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              (a)&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                NO ADDITIONAL WARRANTIES.&nbsp;
              </strong>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                EXCEPT AS EXPRESSLY SET FORTH IN THESE TERMS, LUCKY BEVERAGE
                MAKES NO REPRESENTATIONS OR WARRANTIES CONCERNING THE PRODUCTS
                OR THE SERVICES. YOU EXPRESSLY AGREE THAT YOUR USE OF THE
                PRODUCTS AND&nbsp;
              </span>
              SERVICES
              <span style={{ color: "rgb(0, 0, 0)" }}>
                &nbsp;ARE AT YOUR SOLE RISK. THE PRODUCTS AND&nbsp;
              </span>
              SERVICES&nbsp;
              <span style={{ color: "rgb(0, 0, 0)" }}>
                ARE PROVIDED "AS IS" AND "AS AVAILABLE" FOR YOUR USE, WITHOUT
                ANY ADDITIONAL WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED, UNLESS SUCH WARRANTIES ARE LEGALLY INCAPABLE OF
                EXCLUSION. WE MAKE NO REPRESENTATIONS OR WARRANTIES THAT YOUR
                USE OF THE&nbsp;
              </span>
              PRODUCTS AND/OR SERVICES
              <span style={{ color: "rgb(0, 0, 0)" }}>
                &nbsp;ARE OR WILL REMAIN UNINTERRUPTED OR ERROR-FREE, THAT
                DEFECTS WILL BE CORRECTED, OR THAT THE WEBSITE, OR THE SERVERS
                USED IN CONNECTION WITH THE&nbsp;
              </span>
              SERVICES
              <span style={{ color: "rgb(0, 0, 0)" }}>
                , ARE OR WILL REMAIN FREE FROM ANY VIRUSES, WORMS, TIME BOMBS,
                DROP DEAD DEVICES, TROJAN HORSES, OR OTHER HARMFUL COMPONENTS.
                WE DO NOT GUARANTEE THAT YOU WILL BE ABLE TO PURCHASE THE
                PRODUCTS AND/OR ACCESS OR USE THE&nbsp;
              </span>
              SERVICES
              <span style={{ color: "rgb(0, 0, 0)" }}>
                &nbsp;AT TIMES OR LOCATIONS OF YOUR CHOOSING, OR THAT WE WILL
                HAVE ADEQUATE CAPACITY FOR THE PRODUCTS OR&nbsp;
              </span>
              SERVICES
              <span style={{ color: "rgb(0, 0, 0)" }}>
                &nbsp;AS A WHOLE OR IN ANY SPECIFIC GEOGRAPHIC AREA. WE MAKE NO
                REPRESENTATION OR WARRANTY REGARDING GOVERNMENT COMPLIANCE OF
                ANY SOFTWARE USED IN CONNECTION WITH THE PRODUCTS OR&nbsp;
              </span>
              SERVICES<span style={{ color: "rgb(0, 0, 0)" }}>.&nbsp;</span>
              When using the Products and/or the Services, information will be
              transmitted in such a way that may be beyond our control. As such,
              we make no warranty concerning the delay, failure, interruption,
              or corruption of any data or other information transmitted in
              connection with the use of the Products and/or Services.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <span style={{ color: "rgb(0, 0, 0)" }}>(b)&nbsp;</span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong style={{ fontWeight: "bold" }}>
                  ADDITIONAL EXCLUSIONS
                </strong>
              </span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                . LUCKY BEVERAGE IS NOT LIABLE AND PROVIDES NO WARRANTY FOR ANY
                ERRORS, BUGS, CONFLICTS, OR INCOMPATIBILITIES WITH ANY PRODUCTS
                OR SERVICES ARISING FROM (i) IMPROPER INSTALLATION OF THE
                PRODUCT; OR (ii) ANY USE OF THE PRODUCT OR SERVICE FOR ANY
                PURPOSE OTHER THAN THAT FOR WHICH IT WAS BEING OFFERED BY LUCKY
                BEVERAGE; OR (iii) THE CONCURRENT USE OF THIRD PARTY PRODUCTS OR
                SERVICES, AS REASONABLY DETERMINED BY LUCKY BEVERAGE; OR (iv)
                ANY AND ALL CHANGES OR MODIFICATIONS TO THE PRODUCT OR SERVICE
                AFTER THE DATE OF PURCHASE; OR (v) ANY ERRORS, BUGS, CONFLICTS,
                OR INCOMPATIBILITIES THAT ARISE EXCLUSIVELY ON OR WITH RESPECT
                TO UNSUPPORTED BROWSERS.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              8.&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                LIMITATION OF LIABILITY.&nbsp;
              </strong>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                IN NO EVENT WILL LUCKY BEVERAGE BE LIABLE FOR ANY&nbsp;
              </span>
              INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, PUNITIVE, OR
              CONSEQUENTIAL&nbsp;
              <span style={{ color: "rgb(0, 0, 0)" }}>
                DAMAGES ARISING FROM YOUR USE OF OR INABILITY TO USE THE
                PRODUCTS OR&nbsp;
              </span>
              SERVICES
              <span style={{ color: "rgb(0, 0, 0)" }}>
                &nbsp;OR FOR ANY OTHER CLAIM RELATED IN ANY WAY TO YOUR USE OF
                THE PRODUCTS OR&nbsp;
              </span>
              SERVICES
              <span style={{ color: "rgb(0, 0, 0)" }}>
                &nbsp;AND/OR ANY OTHER
              </span>{" "}
              PURCHASED THROUGH OUR WEBSITE OR OTHERWISE
              <span style={{ color: "rgb(0, 0, 0)" }}>
                . ADDITIONALLY, WE WILL NOT BE LIABLE FOR NEGATIVE REPERCUSSIONS
                TO ANY PARTY BASED ON THE USE OF OR INABILITY TO USE THE
                PRODUCTS OR THE SERVICES, INCLUDING, BUT NOT LIMITED TO, LOST
                PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES OR THE
                COST OF ANY SUBSTITUTE EQUIPMENT, FACILITIES OR SERVICES (EVEN
                IF LUCKY BEVERAGE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                DAMAGES). WE WILL BE LIABLE ONLY TO THE EXTENT OF ACTUAL DAMAGES
                INCURRED BY YOU, NOT TO EXCEED THE AMOUNT THAT YOU ACTUALLY PAID
                TO LUCKY BEVERAGE FOR THE PRODUCT OR SERVICE GIVING RISE TO THE
                CLAIM IN QUESTION. WE ARE NOT LIABLE FOR ANY PERSONAL INJURY,
                INCLUDING DEATH, OR PROPERTY DAMAGE, CAUSED BY YOUR USE OR
                MISUSE OF THE PRODUCTS AND/OR THE&nbsp;
              </span>
              SERVICES AND/OR ANY OTHER PRODUCTS OR SERVICES THAT WE MAY OFFER
              <span style={{ color: "rgb(0, 0, 0)" }}>
                . REMEDIES UNDER THESE TERMS ARE EXCLUSIVE AND ARE LIMITED TO
                THOSE EXPRESSLY PROVIDED FOR IN THESE TERMS. BECAUSE SOME
                STATES, PROVINCES OR JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR
                LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES,
                IN SUCH STATES OR JURISDICTIONS OUR LIABILITY WILL BE LIMITED TO
                THE GREATEST EXTENT PERMITTED BY APPLICABLE LAW. YOU FURTHER
                AGREE THAT THE FOREGOING LIMITATIONS WILL APPLY WITH RESPECT TO
                THIRD PARTY LIABILITY OF ANY KIND.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              9.&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                INDEMNIFICATION.&nbsp;
              </strong>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                You agree to defend, indemnify, and hold harmless Lucky Beverage
                and its directors, officers, employees, and agents from and
                against any and all claims, demands, suits, proceedings,
                liabilities, judgments, losses, damages, expenses, and costs
                (including, but not limited to, reasonable attorneys' fees)
                assessed or incurred by us, directly or indirectly, with respect
                to or arising out of: (i) your failure to comply with these
                Terms; (ii) your breach of your obligations under these Terms;
                (iii) your use of the rights granted hereunder, including, but
                not limited to, any claims made by any third parties; and/or
                (iv) your use of any Products or Services in a manner other than
                that intended.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              10.&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                THIRD PARTY CONTENT AND THIRD PARTY APPLICATIONS.&nbsp;
              </strong>
              &nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              (a) We may provide hyperlinks to other websites maintained by
              third parties, or may provide third party content on the Website
              by framing or other methods (collectively, "Third Party Content").
              In addition, the Website may include certain applications,
              features, programs and services&nbsp;provided&nbsp;by third
              parties (collectively, the "Third Party Applications"). We do not
              monitor Third Party Content or Third Party Applications and can
              make no guarantee as to the accuracy or completeness of such Third
              Party Content or Third Party Applications. THE LINKS TO THIRD
              PARTY WEBSITES, ANY THIRD PARTY CONTENT, AND ANY THIRD PARTY
              APPLICATIONS MAY BE PROVIDED FOR YOUR CONVENIENCE AND INFORMATION
              ONLY. THE CONTENT ON ANY LINKED WEBSITE OR IN ANY THIRD PARTY
              APPLICATION IS NOT UNDER OUR
              <span style={{ color: "rgb(0, 0, 0)" }}>&nbsp;</span>
              CONTROL AND, JUST AS WITH THE PRODUCTS AND SERVICES, WE ARE NOT
              RESPONSIBLE FOR THE CONTENT OF LINKED WEBSITES AND/OR THIRD PARTY
              APPLICATIONS, INCLUDING ANY FURTHER LINKS CONTAINED IN A THIRD
              PARTY WEBSITE
              <span style={{ color: "rgb(17, 28, 36)" }}>
                <span style={{ background: "#ffffff" }}>. WE&nbsp;</span>
              </span>
              MAKE NO REPRESENTATIONS OR WARRANTIES IN CONNECTION WITH ANY THIRD
              PARTY CONTENT OR THIRD PARTY APPLICATIONS, WHICH AT ALL TIMES AND
              IN EACH INSTANCE IS PROVIDED "AS IS." THIRD PARTY APPLICATIONS MAY
              BE SUBJECT TO ADDITIONAL TERMS AND CONDITIONS OR AGREEMENTS
              BETWEEN YOU AND THE PROVIDER OF SUCH THIRD PARTY APPLICATIONS AS
              MAY BE PROVIDED TO YOU IN CONNECTION THEREWITH, AND YOU AGREE TO
              FULLY COMPLY WITH ALL SUCH ADDITIONAL TERMS, CONDITIONS AND
              AGREEMENTS. IF YOU DECIDE TO ACCESS ANY OF THE THIRD PARTY
              WEBSITES LINKED TO THE WEBSITE, ANY THIRD PARTY CONTENT, AND/OR
              ANY THIRD PARTY APPLICATION, YOU DO SO ENTIRELY AT YOUR OWN
              RISK.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              (b) If a third party should link to or refer to the Products or
              the Services, it is not necessarily an indication of an
              endorsement, authorization, sponsorship, affiliation, joint
              venture, or partnership by or with us. In most cases, we are not
              even aware that a third party has linked to or refers to the
              Services.&nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              11.{" "}
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong style={{ fontWeight: "bold" }}>UPDATES.&nbsp;</strong>
              </span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                We may make changes to or stop providing the Products or the
                Services at any time and without further notice to you. We will
                make an effort to update this web page with any changes to these
                Terms, and you are encouraged to review these Terms frequently
                (the date of the most recent revision to these Terms appears at
                the end of these Terms).&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              12.{" "}
              <strong style={{ fontWeight: "bold" }}>
                TERMINATION OF SERVICE.&nbsp;
              </strong>
              We may, at any time and without cost, charge or liability,
              terminate your right to purchase Products and/or access Services
              at any time, without notice, for conduct that we believe violates
              these <span style={{ color: "rgb(0, 0, 0)" }}>Terms</span> and/or
              is harmful to other users of the Products or Services, to us, to
              our partners, to the business of our Internet service provider, or
              to other information providers.
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              13.{" "}
              <strong style={{ fontWeight: "bold" }}>
                ADDITIONAL REMEDIES
              </strong>
              <strong style={{ fontWeight: "bold" }}>.&nbsp;</strong>
              <span style={{ fontWeight: "normal" }}>
                You acknowledge that your
              </span>
              <strong>&nbsp;</strong>conduct that is inconsistent with the
              provisions of these Terms may cause Lucky Beverage irreparable
              damage for which remedies other than monetary relief may be
              inadequate. In such instances, you agree that
              <span style={{ color: "rgb(0, 0, 0)" }}>&nbsp;</span>Lucky
              Beverage may seek injunctive or other equitable relief seeking to
              restrain such conduct without the necessity of proving actual harm
              or posting a bond.
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              14.&nbsp;
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong style={{ fontWeight: "bold" }}>
                  GOVERNING LAW AND JURISDICTION.&nbsp;
                </strong>
              </span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                You agree that all matters relating to your access to, or use
                of, the Products and/or Services will be governed by the laws of
                the State of Delaware. You agree and hereby submit to the
                exclusive personal jurisdiction and venue of the state and
                federal courts located in Delaware, with respect to such
                matters. THE UNITED NATIONS CONVENTION ON CONTRACTS FOR THE
                INTERNATIONAL SALE OF GOODS DOES NOT APPLY TO THESE TERMS.
                Notwithstanding the foregoing, Lucky Beverage may seek and
                obtain injunctive relief in any jurisdiction in any court of
                competent jurisdiction, and you agree that these Terms are
                specifically enforceable by Lucky Beverage through injunctive
                relief and other equitable remedies without proof of monetary
                damages.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <span style={{ color: "rgb(0, 0, 0)" }}>15.&nbsp;</span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong style={{ fontWeight: "bold" }}>
                  WAIVER OF JURY TRIAL AND CLASS LAWSUITS
                </strong>
              </span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                . With respect to any dispute arising out of or related to the
                Products, the Services and/or these Terms: (a) you hereby
                expressly waive and give up your right to have a trial by jury;
                and (b) you hereby expressly waive and give up your right to
                participate as a member of a class of claimants in any lawsuit,
                including, but not limited to, any class action lawsuits
                involving any such dispute.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <span style={{ color: "rgb(0, 0, 0)" }}>16.&nbsp;</span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong style={{ fontWeight: "bold" }}>
                  LIMITATION ON CLAIMS
                </strong>
              </span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                . You agree that you will not bring a claim under or related to
                these Terms, any purchase of Products and/or any use of Services
                more than twelve (12) months after the date on which your claim
                first arose.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <span style={{ color: "rgb(0, 0, 0)" }}>17.&nbsp;</span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong style={{ fontWeight: "bold" }}>SEVERABILITY</strong>
              </span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                . If any portion of these Terms are deemed unlawful, void or
                unenforceable by any court of competent jurisdiction, then these
                Terms as a whole will not be deemed unlawful, void or
                unenforceable, but only that portion of these Terms that is
                unlawful, void or unenforceable will be stricken from these
                Terms.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <span style={{ color: "rgb(0, 0, 0)" }}>18.&nbsp;</span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong style={{ fontWeight: "bold" }}>WAIVER</strong>
              </span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                . If Lucky Beverage does not exercise or enforce any legal right
                or remedy which is contained in these Terms (or which Lucky
                Beverage has the benefit of under any applicable law), this will
                not be taken to be a formal waiver of Lucky Beverage 's rights
                and that those rights or remedies will still be available to
                Lucky Beverage.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <span style={{ color: "rgb(0, 0, 0)" }}>19.&nbsp;</span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong style={{ fontWeight: "bold" }}>SURVIVAL</strong>
              </span>
              <span style={{ color: "rgb(0, 0, 0)" }}>
                . Sections 5, 7, 8, 9 and 10 through 16 of these Terms will
                survive any actual or purported termination of these Terms and
                will continue in full force and effect thereafter.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              20.&nbsp;
              <strong style={{ fontWeight: "bold" }}>LOCAL LAWS.&nbsp;</strong>
              We make no representation that any Products or Services or other
              information or materials on or available through our website are
              appropriate or available for use in jurisdictions outside the
              United States. Access to the Products and Services from
              jurisdictions where such access is illegal or prohibited. If you
              choose to access the Products and/or Services from other
              jurisdictions, you do so at your own initiative and are
              responsible for compliance with applicable local laws.
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              21.&nbsp;
              <strong style={{ fontWeight: "bold" }}>
                EXPORT RESTRICTIONS.
              </strong>{" "}
              All Products, any software and all underlying information and
              technology that you download or view from or through the Website
              or in connection with the Services (collectively, the "Software or
              Technical Data") may be subject to U.S. export controls, including
              the Export Administration Act (50 U.S.C. Appx. §§ 2401 et seq.)
              and the Export Administration Regulations (50 C.F.R. Parts
              730-774), and may be subject to export or import regulations in
              other countries. You are solely responsible for complying with all
              trade regulations and laws, both foreign and domestic, in your use
              and viewing of the Products and Services and any of our other
              products or services, including, but not limited to, any Software
              or Technical Data. Except as authorized by law, you agree and
              warrant not to export or re-export any Software or Technical Data
              to any county, or to any person or entity, subject to U.S. export
              controls, including, but not limited to, persons or entities
              listed on the U.S. Department of Commerce Bureau of Export
              Administration's Denied Parties List and the U.S. Department of
              Treasury's Specially Designated Nationals. You further represent
              and warrant that no U.S. federal agency has suspended, revoked, or
              denied your export privileges.
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              22.&nbsp;
              <strong style={{ fontWeight: "bold" }}>CUSTOMER COMMENTS</strong>.
              By submitting comments, information or feedback to us through
              email and/or the Website, you agree that the information submitted
              will be subject to our Privacy Policy located at&nbsp;
              <a href="http://www.luckybevco.com/privacy-policy">
                <span style={{ color: "rgb(0, 0, 255)" }}>
                  <u>www.luckybevco.com/privacy</u>
                </span>
              </a>
              &nbsp;
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
              }}
            >
              <br />
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              <span style={{ color: "rgb(0, 0, 0)" }}>
                <strong style={{ fontWeight: "bold" }}>
                  Your Consent To These Terms&nbsp;
                </strong>
              </span>
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              <br />
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <span style={{ color: "rgb(0, 0, 0)" }}>
                By purchasing Products and/or accessing and using the Services,
                you consent to and agree to be bound by the foregoing
                Terms.&nbsp;
              </span>
              If we decide to change these Terms or any part of them, we will
              make an effort to post those changes on this web page so that you
              will always be able to understand and agree to the terms and
              conditions governing your use of the Products and the Services.
              Your use of the Products and Services following the effective date
              of any amendment of these Terms will signify your assent to and
              acceptance of the revised terms for all previously collected
              information and information collected from you in the
              future.&nbsp;
              <span style={{ color: "rgb(0, 0, 0)" }}>
                If you have additional questions or comments of any kind, or if
                you see anything on the Website that you think is inappropriate,
                please let us know by sending your comments or requests to:
                getluck@luckyfckenergy.com.&nbsp;
              </span>
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                textIndent: "0.5in",
              }}
            >
              <br />
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              <br />
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              <br />
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              Copyright © 2023. All Rights Reserved.
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              Effective as of: November 13, 2023
            </p>
            <p
              style={{
                lineHeight: "19px",
                textAlign: "center",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
                marginBottom: "0in",
              }}
            >
              Last updated: November 13, 2023
            </p>
            <p
              style={{
                marginBottom: "0in",
                lineHeight: "19px",
                textAlign: "left",
                background: "transparent",
                fontFamily: "Inter",
                fontSize: "16px",
              }}
            >
              <br />
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

export default TOSPage;

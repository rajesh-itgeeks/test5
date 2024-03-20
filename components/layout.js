import SEO from "./seo";
import Cart from "./globals/ecomm/cart";
import Header from "./header";

import { Accessibility } from "accessibility/dist/main";

//import Footer from "./footer";
var labels = {
  resetTitle: "reset (in my language)",
  closeTitle: "close (in my language)",
  menuTitle: "title (in my language)",
  increaseText: "increase text size (in my language)",
  decreaseText: "decrease text size (in my language)",
  increaseTextSpacing: "increase text spacing (in my language)",
  decreaseTextSpacing: "decrease text spacing (in my language)",
  increaseLineHeight: "increase line height (in my language)",
  decreaseLineHeight: "decrease line height (in my language)",
  invertColors: "invert colors (in my language)",
  grayHues: "gray hues (in my language)",
  underlineLinks: "underline links (in my language)",
  bigCursor: "big cursor (in my language)",
  readingGuide: "reading guide (in my language)",
  textToSpeech: "text to speech (in my language)",
  speechToText: "speech to text (in my language)",
  disableAnimations: "disable animations (in my language)",
};
if (typeof window !== "undefined") {
  // Code that accesses document or other browser-specific APIs
  var labels = {
    resetTitle: "reset (in my language)",
    closeTitle: "close (in my language)",
    // Other label definitions...
  };
  var options = { labels: labels };
  options.textToSpeechLang = "en-US"; // or any other language
  options.speechToTextLang = "en-US"; // or any other language
  new Accessibility(options);
}

export default function Layout({
  children,
  cursor = true,
  menu,
  seo,
  lightMode = false,
  global,
}) {
  return (
    <>
      <div className="pageContainer">
        <SEO data={seo} />
        <Header lightMode={lightMode} menu={global} />
        <Cart />
        <main>{children}</main>
      </div>
    </>
  );
}

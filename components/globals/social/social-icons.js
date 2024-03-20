import Facebook from "../../svgs/facebook-svg";
import Instagram from "../../svgs/instagram-svg";
import LinkedInSvg from "../../svgs/linkedin-svg";
import Tiktok from "../../svgs/tiktok-svg";
import Youtube from "../../svgs/youtube-svg";
function SocialIcons({ className }) {
  return (
    <>
      <div className={className}>
        <ul>
          {/* <li>
            <a href="https://www.facebook.com/luckyfckenergy" target="_blank" aria-label="Social Icon Facebook">
              <Facebook />
            </a>
          </li> */}
          <li>
            <a href="https://www.instagram.com/luckyfckenergy/" target="_blank" aria-label="Social Icon Instagram">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/lucky-beverage-co/" target="_blank" aria-label="Social Icon Instagram">
              <LinkedInSvg />
            </a>
          </li>
          {/* <li>
            <a href="https://www.tiktok.com/@luckyfckenergy" target="_blank" aria-label="Social Icon TikTok">
              <Tiktok />
            </a>
          </li> */}
          <li>
            <a href="https://www.youtube.com/@luckyfckenergy" target="_blank" aria-label="Social Icon YouYube">
              <Youtube />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SocialIcons;

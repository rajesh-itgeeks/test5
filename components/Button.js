import style from "./Button.module.scss";
import Link from "next/link";

function Button(props) {
  const {
    title = "Learn More",
    href = "/",
    target = "_self",
    className = "",
    formSubmit,
    noHref,
    secondaryColor,
    alternateColor,
    transparentColor,
    bordered,
    onClick,
    smallText,
    ...misc
  } = props;

  const sec = secondaryColor ? style.btnSecondary : "";
  const alt = alternateColor ? style.btnAlternate : "";
  const transparent = transparentColor ? style.btnTransparent : "";
  const borderOutline = bordered ? style.btnBordered : "";
  const small = smallText ? style.btnSmallText : "";

  let cleanHref = href.replace("https://luckyfuck.wpengine.com", "");

  if (formSubmit) {
    return (
      <>
        <button
          {...misc}
          type="submit"
          title={title}
          aria-label={title}
          className={`btn-type btn ${sec} ${alt} ${transparent} ${borderOutline} ${small} ${className}`}>
          <span className={``}>{title}</span>
        </button>
      </>
    );
  }

  if (noHref) {
    return (
      <>
        <span
          aria-label={title}
          role="button"
          onClick={onClick}
          className={`btn-type btn ${sec} ${alt} ${transparent} ${borderOutline} ${small} ${className}`}
          {...misc}>
          {title}
        </span>
      </>
    );
  }

  return (
    <>
      <Link
        href={cleanHref}
        role="button"
        aria-label={title}
        onClick={onClick}
        target={target}
        className={`btn-type btn ${sec} ${alt} ${transparent} ${borderOutline} ${small} ${className}`}>
        {title}
      </Link>
    </>
  );
}

export default Button;

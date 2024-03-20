import { useEffect, useState } from "react";

function InlineSVG({ src }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    fetch(src)
      .then((res) => res.text())
      .then((svg) => setSvg(svg));
  }, [src]);

  return <div dangerouslySetInnerHTML={{ __html: svg }} />;
}

export default InlineSVG;

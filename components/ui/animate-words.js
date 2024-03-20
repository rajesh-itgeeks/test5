import { gsap } from "gsap";

function animateWords(containerRef) {
  const getTextNodes = (node) => {
    const textNodes = [];
    const walk = (childNode) => {
      if (childNode.nodeType === 3) {
        textNodes.push(childNode);
      } else {
        childNode.childNodes.forEach(walk);
      }
    };
    walk(node);
    return textNodes;
  };

  const containerElement = containerRef.current;
  const textNodes = getTextNodes(containerElement);
  textNodes.forEach((textNode) => {
    const parentNode = textNode.parentNode;
    const words = textNode.textContent.split(" ");

    words.forEach((word, index) => {
      const span = document.createElement("span");
      span.textContent = word;
      span.style.display = "inline-block";

      const div = document.createElement("small");
      div.style.display = "inline-block";

      div.appendChild(span);
      parentNode.insertBefore(div, textNode);

      if (index !== words.length - 1) {
        const spaceSpan = document.createElement("span");
        spaceSpan.innerHTML = "&nbsp;";
        spaceSpan.style.display = "inline-block";

        const spaceDiv = document.createElement("small");
        spaceDiv.style.display = "inline-block";

        spaceDiv.appendChild(spaceSpan);
        parentNode.insertBefore(spaceDiv, textNode);
      }
    });

    parentNode.removeChild(textNode);
  });

  const wordElements = containerElement.querySelectorAll("span");

  gsap.fromTo(
    wordElements,
    { opacity: 0, y: "100%" },
    {
      opacity: 1,
      y: 0,
      duration: 0.75,
      delay: 0.125,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerElement,
        start: "top center",
        end: "bottom top",
        once: true,
        // markers: true,
      },
      stagger: 0.025,
    }
  );

  gsap.fromTo(
    containerElement,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerElement,
        start: "top center",
        end: "bottom top",
        once: true,
        // markers: true,
      },
    }
  );
}

export default animateWords;

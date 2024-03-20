function Chevron(props) {
  let color = "";
  if (props.color === "black") {
    color = "#363636";
  }

  if (props.color === "green") {
    color = "#424840";
  }

  if (props.color === "cream") {
    color = "#f7f2e9";
  }

  return (
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13.309"
        height="24.619"
        viewBox="0 0 13.309 24.619">
        <path
          d="M18,7.5,28.9,18.4,18,29.29"
          transform="translate(-16.586 -6.086)"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}

export default Chevron;

function ArrowCircleSVG(props) {
  return (
    <>
      <svg width={props.width || "35"} height={props.height || "35"} viewBox="0 0 30 30" fill={`${props.fill || 'none'}`} xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19.7852L15 10.2148M15 10.2148L10.2148 15M15 10.2148L19.7852 15" stroke={`${props.color || 'black'}`} strokeWidth='1.5' strokeLinecap="round" strokeLinejoin="round" />
        <rect x="1.875" y="28.125" width="26.25" height="26.25" rx="13.125" transform="rotate(-90 1.875 28.125)" stroke={`${props.color || 'black'}`} strokeWidth="1.5" />
      </svg>

    </>
  );
}

export default ArrowCircleSVG;

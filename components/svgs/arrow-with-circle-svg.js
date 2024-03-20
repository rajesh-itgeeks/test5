function ArrowWithCircleSVG(props) {
  return (
    <>
      <svg width="42.37" height="42.37" viewBox="0 0 42.37 42.37">
        <g transform="translate(42.37) rotate(90)">
          <g transform="translate(0 0)" fill="none" stroke={props.stroke || '#fff'} strokeWidth="1">
            <circle cx="21.185" cy="21.185" r="21.185" stroke="none" />
            <circle cx="21.185" cy="21.185" r="20.685" fill="none" />
          </g>
          <path
            d="M.832,0,0,.832,12.238,13.038H5.553v1.129h8.528l.116-.089V5.553H13.07v6.653Z"
            transform="translate(21.647 30.955) rotate(-135)"
            fill={props.fill || '#fff'}
          />
        </g>
      </svg>
    </>
  );
}

export default ArrowWithCircleSVG;

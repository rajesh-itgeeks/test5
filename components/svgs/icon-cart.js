import { useContext } from "react";
import { CartContext } from "../../context/cart-context";

function IconCart() {
  const { cart, isOpen, openCart, closeCart, checkout, updateProductQuantityInCart, removeProductFromCart } =
    useContext(CartContext);

  return (
    <>
      <div
        onClick={(event) => {
          event.stopPropagation();
          openCart();
        }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="39.008" height="35.852" viewBox="0 0 39.008 35.852">
          <defs>
            <clipPath id="icon-cart-clip-path">
              <rect id="Rectangle_27547" data-name="Rectangle 27547" width="39.008" height="35.852" fill="#fff" />
            </clipPath>
          </defs>
          <g id="Group_25446" data-name="Group 25446" clipPath="url(#icon-cart-clip-path)">
            <path
              id="Path_23407"
              data-name="Path 23407"
              d="M13.416,27.288l2.734-1.976H35.387a.592.592,0,0,0,.579-.46l3.027-13.086a.594.594,0,0,0-.578-.728H12.406L10.368,4.414a.562.562,0,0,0-.456-.4V4l-4.143.12L7.962.611,6.907,0,4.951,3.648,3.016.006,1.962.6l2.19,3.531L0,3.984.01,5.193l4.121-.132L1.939,8.572l1.055.611L4.951,5.534,6.906,9.189,7.96,8.6,5.77,5.067l3.608.126v.041l2.65,8.614L15.29,24.468l-2.57,1.857A2.7,2.7,0,0,0,14.3,31.21h1.231l-.156.27a2.915,2.915,0,1,0,5.046,0l-.156-.27h9.967l-.156.27a2.915,2.915,0,1,0,5.046,0l-.156-.27h2.648a.594.594,0,0,0-.018-1.187H14.3a1.51,1.51,0,0,1-.884-2.735m11.22-3.163H21.1l-.99-5.356h4.523Zm10.279,0H30.533l.99-5.356h4.631Zm-2.184-11.9h4.936l-1.239,5.355H31.742Zm-6.908,0h5.7l-.99,5.355H25.823Zm0,6.543h4.491l-.99,5.356h-3.5Zm-1.188-6.543v5.355H19.894l-.99-5.355Zm-11.863,0H17.7l.99,5.355H14.42Zm2.013,6.543h4.12l.99,5.356H16.433Zm17.8,12.441h.024a1.727,1.727,0,1,1-.024,0m-14.7,0h.024a1.727,1.727,0,1,1-.024,0"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </>
  );
}

export default IconCart;

import { AiOutlineShoppingCart } from "react-icons/ai";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-blue-200 ">
      <div className=" flex justify-between w-full h-[80px] ">
        <div>
          <ul className="flex justify-between items-center h-full">
            <Link to="/">Shop</Link>
          </ul>
        </div>
        <div className="flex mx-2">
          <div>
            <ul className="flex justify-between items-center h-full">
              <li>
                <Link to="/signup">Signup</Link>
              </li>
              <li>
                <Link to="/signin">Signin</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center cursor-pointer">
            <Link to="/cart" className="flex items-center">
              <p>$0.00</p>
              <AiOutlineShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosPerson } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-blue-200 ">
      <div className=" flex justify-between w-full h-[80px] ">
        <div>
          <ul className="flex justify-between items-center h-full">
            <Link to="/">Shop</Link>
            <li>ACCESSORIES</li>
          </ul>
        </div>
        <div className="flex mx-2">
          <div>
            <ul className="flex justify-between items-center h-full">
              <li>About</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="flex items-center cursor-pointer">
            <Link to="/cart" className="flex items-center">
              <p>$0.00</p>
              <AiOutlineShoppingCart />
            </Link>
            <IoIosPerson className="mx-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

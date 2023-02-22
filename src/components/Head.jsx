import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import headerLogo from "../assets/images/header-logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Head = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    if (menuOpen === false) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header className="bg-black border-none pb-6 lg:pb-5 px-4 lg:pt-0 pt-3">
      <div className="flex items-center justify-between lg:justify-center lg:flex-col lg:gap-5 max-w-[58rem] mx-auto">
        {/* For Mobile Screens */}
        {!menuOpen ? (
          <button onClick={handleMenu}>
            <RxHamburgerMenu
              className="cursor-pointer text-white lg:hidden"
              fontSize={"1.4rem"}
            />
          </button>
        ) : (
          <button onClick={handleMenu}>
            <AiOutlineClose
              className="cursor-pointer text-white lg:hidden"
              fontSize={"1.4rem"}
            />
          </button>
        )}
        <img src={headerLogo} alt="" className="h-9 cursor-pointer" />
        <AiOutlineShoppingCart
          fontSize={"1.3rem"}
          className="cursor-pointer text-white lg:hidden"
        />

        {/* For Larger Screens */}
        <ul className="hidden text-white lg:flex items-center leading-5 text-[0.9rem]  gap-8 tracking-normal">
          <Link to="/" className="flex items-center">
            <li className="  cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/shop" className="flex items-center">
            <li className="  cursor-pointer">
              The Shop
            </li>
          </Link>
          <Link to="/news" className="flex items-center">
          <li className="  cursor-pointer">News</li>
          </Link>
          <Link to="/promos" className="flex items-center">
          <li className="  cursor-pointer">
            Promos
          </li>
          </Link>
          <Link to="/program" className="flex items-center">
          <li className="  cursor-pointer">
            Loyalty Program
          </li>
          </Link>
          <Link to="/contact" className="flex items-center">
          <li className="  cursor-pointer">
            Contact Us
          </li>
          </Link>
          <Link to="/orders" className="flex items-center">
          <li className="  cursor-pointer">
            Orders
          </li>
          </Link>
          <Link to="/search" className="flex items-center">
          <li className=" cursor-pointer ">
            <button>
              <BsSearch />
            </button>
          </li>
          </Link>
          <Link to="/fav" className="flex items-center">
          <li className=" cursor-pointer ">
            <button>
              <FiHeart />
            </button>
          </li>
          </Link>
          <Link to="/user" className="flex items-center">
          <li className=" cursor-pointer ">
            <button>
              <IoPersonOutline />
            </button>
          </li>
          </Link>
          <Link to="/cart" className="flex items-center">
          <li className=" cursor-pointer ">
            <button>
              <AiOutlineShoppingCart />
            </button>
          </li>
          </Link>

        </ul>
      </div>
      {/* For Larger Screens */}
      {menuOpen ? (
        <ul className="flex flex-col text-white lg:hidden items-start pt-4 tracking-normal">
         <Link to="/" className="flex items-center">
            <li className="  cursor-pointer">
              Home
            </li>
          </Link>

          <Link to="/shop" className="flex items-center">
            <li className="  cursor-pointer">
              The Shop
            </li>
          </Link>
          <Link to="/news" className="flex items-center">
          <li className="  cursor-pointer">News</li>
          </Link>
          <Link to="/promos" className="flex items-center">
          <li className="  cursor-pointer">
            Promos
          </li>
          </Link>
          <Link to="/program" className="flex items-center">
          <li className="  cursor-pointer">
            Loyalty Program
          </li>
          </Link>
          <Link to="/contact" className="flex items-center">
          <li className="  cursor-pointer">
            Contact Us
          </li>
          </Link>
          <Link to="/orders" className="flex items-center">
          <li className="  cursor-pointer">
            Orders
          </li>
          </Link>
          <Link to="/search" className="flex items-center">
          <li className=" cursor-pointer ">
            <button>
              <BsSearch />
            </button>
          </li>
          </Link>
          <Link to="/fav" className="flex items-center">
          <li className=" cursor-pointer ">
            <button>
              <FiHeart />
            </button>
          </li>
          </Link>
          <Link to="/user" className="flex items-center">
          <li className=" cursor-pointer ">
            <button>
              <IoPersonOutline />
            </button>
          </li>
          </Link>
          <Link to="/cart" className="flex items-center">
          <li className=" cursor-pointer ">
            <button>
              <AiOutlineShoppingCart />
            </button>
          </li>
          </Link>

        </ul>
      ) : null}
    </header>
  );
};

export default Head;

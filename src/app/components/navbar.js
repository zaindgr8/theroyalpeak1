"use client";
import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

import { FiSearch, FiUser } from "../assets/icons/vander";

export default function Navbar({ navClass, logolight, menuClass }) {
  const [scroll, setScroll] = useState(false);
  const [isMenu, setisMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const getClosest = useCallback((elem, selector) => {
    if (!Element.prototype.matches) {
      Element.prototype.matches =
        Element.prototype.matchesSelector ||
        Element.prototype.mozMatchesSelector ||
        Element.prototype.msMatchesSelector ||
        Element.prototype.oMatchesSelector ||
        Element.prototype.webkitMatchesSelector ||
        function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(
              s
            ),
            i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {}
          return i > -1;
        };
    }

    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }
    return null;
  }, []);

  const activateMenu = useCallback(() => {
    var menuItems = document.getElementsByClassName("sub-menu-item");
    if (menuItems) {
      var matchingMenuItem = null;
      for (var idx = 0; idx < menuItems.length; idx++) {
        if (menuItems[idx].href === window.location.href) {
          matchingMenuItem = menuItems[idx];
        }
      }

      if (matchingMenuItem) {
        matchingMenuItem.classList.add("active");

        var immediateParent = getClosest(matchingMenuItem, "li");
        if (immediateParent) {
          immediateParent.classList.add("active");
        }

        var parent = getClosest(immediateParent, ".child-menu-item");
        if (parent) {
          parent.classList.add("active");
        }

        parent = getClosest(parent || immediateParent, ".parent-menu-item");
        if (parent) {
          parent.classList.add("active");

          var parentMenuitem = parent.querySelector(".menu-item");
          if (parentMenuitem) {
            parentMenuitem.classList.add("active");
          }

          var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        } else {
          var parentOfParent = getClosest(
            matchingMenuItem,
            ".parent-parent-menu-item"
          );
          if (parentOfParent) {
            parentOfParent.classList.add("active");
          }
        }
      }
    }
  }, [getClosest]);

  useEffect(() => {
    activateMenu();
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    const closeDropdown = () => {
      setModal(false);
    };
    document.addEventListener("mousedown", closeDropdown);
    window.scrollTo(0, 0);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    };
  }, [activateMenu]);

  const toggleMenu = () => {
    setisMenu(!isMenu);
    if (document.getElementById("navigation")) {
      const anchorArray = Array.from(
        document.getElementById("navigation").getElementsByTagName("a")
      );
      anchorArray.forEach((element) => {
        element.addEventListener("click", (elem) => {
          const target = elem.target.getAttribute("href");
          if (target !== "") {
            if (elem.target.nextElementSibling) {
              var submenu = elem.target.nextElementSibling.nextElementSibling;
              submenu.classList.toggle("open");
            }
          }
        });
      });
    }
  };

  return (
    <>
      <header
        id="topnav"
        className={`${scroll ? "nav-sticky" : ""} ${navClass}`}
      >
        <div className="container">
          {logolight === true ? (
            <Link className="logo" href="/">
              <span className="logo-light-mode">
                <Image
                  src="/images/logo1.png"
                  width={132}
                  height={32}
                  className="l-dark"
                  alt=""
                />
                <Image
                  src="/images/logo1.png"
                  width={102}
                  height={102}
                  className="l-light"
                  alt=""
                />
              </span>
              <Image
                src="/images/logo1.png"
                width={132}
                height={32}
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          ) : (
            <Link className="logo" href="/">
              <Image
                src="/images/logo1.png"
                width={132}
                height={32}
                className="logo-light-mode"
                alt=""
              />
              <Image
                src="/images/logo1.png"
                width={132}
                height={32}
                className="logo-dark-mode"
                alt=""
              />
            </Link>
          )}

          <div className="menu-extras">
            <div className="menu-item">
              <Link
                href="#"
                className={`navbar-toggle ${isMenu ? "open" : ""}`}
                id="isToggle"
                onClick={() => toggleMenu()}
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <ul className="buy-button list-inline mb-0">
            <li className="list-inline-item ps-1 mb-0">
              <div className="dropdown">
                <button
                  type="button"
                  className="dropdown-toggle btn btn-sm btn-icon btn-pills text-black bg-[#CA8E25]"
                  onClick={() => setModal(!modal)}
                >
                  <FiSearch className="icons" />
                </button>
                <div
                  className={`${
                    modal === true ? "show" : ""
                  } dropdown-menu dd-menu dropdown-menu-start bg-white rounded-3 border-0 mt-3 p-0 right-0`}
                  style={{ width: "240px", right: "0" }}
                >
                  <div className="search-bar">
                    <div id="itemSearch" className="menu-search mb-0">
                      <form
                        role="search"
                        method="get"
                        id="searchItemform"
                        className="searchform"
                      >
                        <input
                          type="text"
                          className="form-control rounded-3 border"
                          name="s"
                          id="searchItem"
                          placeholder="Search..."
                        />
                        <input
                          type="submit"
                          id="searchItemsubmit"
                          value="Search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="list-inline-item ps-1 mb-0">
              {/* <Link
                href="/auth-login"
                className="btn btn-sm btn-icon btn-pills btn-primary"
              >
                <FiUser className="icons" />
              </Link> */}
            </li>
          </ul>

          <div id="navigation" style={{ display: isMenu ? "block" : "none" }}>
            <ul className={menuClass}>
              {/* <li className="has-submenu parent-menu-item">
                        <Link href="/">Home</Link><span className="menu-arrow"></span>
                        <ul className="submenu">
                            <li><Link href="/" className="sub-menu-item">Hero One</Link></li>
                            <li><Link href="/index-two" className="sub-menu-item">Hero Two</Link></li>
                            <li><Link href="/index-three" className="sub-menu-item">Hero Three</Link></li>
                            <li><Link href="/index-four" className="sub-menu-item">Hero Four</Link></li>
                            <li><Link href="/index-five" className="sub-menu-item">Hero Five </Link></li>
                            <li><Link href="/index-six" className="sub-menu-item">Hero Six</Link></li>
                            <li><Link href="/index-seven" className="sub-menu-item">Hero Seven</Link></li>
                        </ul>
                    </li> */}
              <li>
                <Link href="/" className="sub-menu-item">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="sub-menu-item">
                  Buy
                </Link>
              </li>

              <li>
                <Link href="/" className="sub-menu-item">
                  Sell
                </Link>
              </li>

              <li>
                <Link href="/" className="sub-menu-item">
                  Listing
                </Link>
              </li>

              <li>
                <Link href="/" className="sub-menu-item">
                  Contact Us
                </Link>
              </li>

              {/* <li className="has-submenu parent-parent-menu-item">
                        <Link href="#">Blog</Link><span className="menu-arrow"></span>
                        <ul className="submenu">
                            <li><Link href="/blog-grid" className="sub-menu-item">Blog Grid</Link></li>
                            <li><Link href="/blog-list" className="sub-menu-item">Blog with Sidebar</Link></li>
                            <li className="has-submenu parent-menu-item"><Link href="/blog-detail" className="sub-menu-item">Blog Detail</Link><span className="submenu-arrow"></span>
                                <ul className="submenu">
                                    <li><Link href="/blog-detail" className="sub-menu-item">Blog Details</Link></li>
                                    <li><Link href="/blog-detail-two" className="sub-menu-item">Blog Details Two</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/auth-cover-login" className="sub-menu-item">Log in</Link></li>
                            <li><Link href="/auth-cover-signup" className="sub-menu-item">Sign Up</Link></li>
                            <li><Link href="/auth-cover-re-password" className="sub-menu-item">Reset Password</Link></li>
                        </ul>
                    </li> */}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

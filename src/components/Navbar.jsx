import React, { Component } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from "../assets/logo.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="mb-5 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <img width={120} height={120} src={logo} alt="logo" />
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
          <FaLinkedin />
          <FaGithub />
          <FaInstagram />
          <FaSquareXTwitter />
        </div>
      </nav>
    );
  }
}

import React, { Component } from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

export default class About extends Component {
  render() {
    return (
      <div className="border-b border-neutral-900 pb-8">
        <h1 className="my-20 text-center text-4xl">
          About <span className="text-neutral-500">Me</span>
        </h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.img
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="rounded-2xl xl:w-3/5"
                src={aboutImg}
                alt="about"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex items-center justify-center mt-10">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="my-2 max-w-xl py-6 text-justify tracking-wider"
              >
                {ABOUT_TEXT}
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

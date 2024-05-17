import React, { Component } from "react";
import { HERO_CONTENT } from "../constants";
import profilepic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";

export default class Hero extends Component {
  container(delay) {
    return {
      hidden: {
        x: -100,
        opacity: 0,
      },
      visible: {
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          delay: delay,
        },
      },
    };
  }

  render() {
    return (
      <div className="border-b border-neutral-900 pb-8 lg:mb-30">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start lg:ml-14">
              <motion.h1
                variants={this.container(0)}
                initial="hidden"
                animate="visible"
                className="pb-9 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
              >
                Hariharan
              </motion.h1>
              <motion.span
                variants={this.container(0.5)}
                initial="hidden"
                animate="visible"
                className="pb-2 bg-gradient-to-r from-green-500 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Senior Software Engineer
              </motion.span>
              <motion.p
                variants={this.container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl text-justify py-6 tracking-wider"
              >
                {HERO_CONTENT}
              </motion.p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="lg:w-3/4 max-sm:mt-8 mt-20"
                src={profilepic}
                alt="profile_picture"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

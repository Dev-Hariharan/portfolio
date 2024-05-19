import React, { Component } from "react";
import { HERO_CONTENT, SUCCESS_COUNTERS } from "../constants/HariIndex";
import profilepic from "../assets/profilepic.png";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counterState: false,
    };
  }

  get counterState() {
    return this.state.counterState;
  }

  set counterState(value) {
    this.setState({ counterState: value });
  }

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
            <div className="flex flex-col items-center lg:items-start lg:ml-32">
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
                className="pb-2 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
              >
                Software Engineer
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
                className="rounded-2xl lg:w-2/4 max-sm:mt-8"
                src={profilepic}
                alt="profile_picture"
              />
            </div>
          </div>
        </div>
        <ScrollTrigger
          onEnter={() => this.setState({ counterState: true })}
          onExit={() => this.setState({ counterState: false })}
        >
          <div className="flex justify-evenly -space-x-20 pt-20 pb-10 text-center">
            {SUCCESS_COUNTERS.map((data, index) => (
              <div
                key={index}
                className="w-52 h-48 rounded-2xl border-4 border-neutral-800 pt-14 "
              >
                <h2 className="text-4xl font-extrabold text-[#F2F3F5]">
                  {this.counterState && (
                    <CountUp start={0} end={data.counts} duration={2.74} />
                  )}
                  +
                </h2>
                <p className="py-2 text-[#F2F3F5] font-medium">{data.title}</p>
              </div>
            ))}
          </div>
        </ScrollTrigger>
      </div>
    );
  }
}

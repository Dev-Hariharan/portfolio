import React, { Component } from "react";
import aboutImg from "../assets/profileimg.jpeg";
import { motion } from "framer-motion";
import { ABOUT_TEXT, SUCCESS_COUNTERS } from "../constants";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

export default class About extends Component {
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
  render() {
    return (
      <div className="border-b border-neutral-900 pb-8">
        <h1 className="mt-20 mb-10 text-center text-4xl">
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
            <div className="flex flex-col items-center justify-center mt-5 space-y-8">
              <motion.p
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl py-6 text-justify tracking-wider "
              >
                {ABOUT_TEXT}
              </motion.p>
              <ScrollTrigger
                onEnter={() => this.setState({ counterState: true })}
                onExit={() => this.setState({ counterState: false })}
              >
                <div className="flex flex-wrap justify-center gap-10 text-center">
                  {SUCCESS_COUNTERS.map((data, index) => (
                    <motion.div
                      key={index}
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 50 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="w-48 h-44 rounded-2xl pt-10 border-2"
                    >
                      <h2 className="text-4xl font-extrabold text-[#F2F3F5]">
                        {this.state.counterState && (
                          <CountUp
                            start={0}
                            end={data.counts}
                            duration={2.74}
                          />
                        )}
                        +
                      </h2>
                      <p className="py-2 text-[#F2F3F5] font-medium">
                        {data.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

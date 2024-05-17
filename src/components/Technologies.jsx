import React, { Component } from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavaLine } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { RiNodejsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { animate, motion } from "framer-motion";

export default class Technologies extends Component {
  iconVariants(duration) {
    return {
      initial: { y: -10 },
      animate: {
        y: [10, -10],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    };
  }

  render() {
    return (
      <div className="border-b border-neutral-900 pb-32">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-20 text-center text-4xl"
        >
          Technologies
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.div
            variants={this.iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
          <motion.div
            variants={this.iconVariants(4.0)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiJavaLine className="text-7xl text-yellow-400" />
          </motion.div>
          <motion.div
            variants={this.iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandJavascript className="text-7xl text-yellow-300" />
          </motion.div>
          <motion.div
            variants={this.iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiNodejsLine className="text-7xl text-green-500" />
          </motion.div>
          <motion.div
            variants={this.iconVariants(4.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <TbBrandTypescript className="text-7xl text-blue-400" />
          </motion.div>
          <motion.div
            variants={this.iconVariants(2.3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <SiMongodb className="text-7xl text-green-500" />
          </motion.div>
        </motion.div>
      </div>
    );
  }
}

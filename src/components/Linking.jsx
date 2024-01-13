import React from "react";
import { SiLeetcode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const Linking = () => {
  return (
    <div className="p-24 flex flex-row justify-center gap-20">
      <Link to="https://leetcode.com/goutampriyanshu27/">
        <SiLeetcode className="w-11 h-11 text-blue-200" />
      </Link>
      <Link to="https://github.com/priyanshu1019?tab=repositories">
        <FaGithub className="w-11 h-11 text-blue-200" />
      </Link>
      <Link to="https://www.linkedin.com/in/priyanshu-goutam-a7598524b">
        <FaLinkedinIn className="w-11 h-11 text-blue-200" />
      </Link>
    </div>
  );
};

export default Linking;

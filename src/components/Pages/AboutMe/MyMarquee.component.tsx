import React from "react";
import Marquee from "react-fast-marquee";
import TypeScriptIcon from "../../images/illustrations/TypescriptIcon";
import MySQLIcon from "../../images/illustrations/MySQLIcon";
import ReactIcon from "../../images/illustrations/ReactIcon";
import JavascriptIcon from "../../images/illustrations/JavascriptIcon";
import ExpressJsIcon from "../../images/illustrations/ExpressJSIcon";
import MongoDBIcon from "../../images/illustrations/MongoDBIcon";
import NodeJSIcon from "../../images/illustrations/NodeJSIcon";
import PythonIcon from "../../images/illustrations/PythonIcon";
import CSharpIcon from "../../images/illustrations/CSharpIcon";
import GitIcon from "../../images/illustrations/GitIcon";
import JavaIcon from "../../images/illustrations/JavaIcon";

const CustomMarquee: React.FC = () => {
  return (
    <Marquee
      gradient={false}
      speed={30}
      style={{
        backgroundColor: "#1e2a38",
        color: "#ffffff",
        padding: "0.5em",
        fontSize: "1rem",
        fontWeight: 500,
        textAlign: "center",
        width: "100%", // Full container width
        boxSizing: "border-box", // Include padding and border in the element's total width and height
      }}
    >
      {/* TODO!: Needs to check the width when mobile mode. Must be smaller */}
      <TypeScriptIcon width="7em" />
      <MySQLIcon width="10em" />
      <ReactIcon width="7em" />
      <JavascriptIcon width="7em" />
      <ExpressJsIcon width="7em" />
      <MongoDBIcon width="10em" />
      <NodeJSIcon width="10em" />
      <PythonIcon width="6em" />
      <CSharpIcon width="6em" />
      <GitIcon width="10em" />
      <JavaIcon height="5em" />
    </Marquee>
  );
};

export default CustomMarquee;
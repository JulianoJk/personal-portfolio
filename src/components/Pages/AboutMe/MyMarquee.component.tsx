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
import DockerIcon from "../../images/illustrations/DockerIcon";
import MUIIcon from "../../images/illustrations/MUIIcon";
import MantineUIIcon from "../../images/illustrations/MantineUIIcon";

const CustomMarquee: React.FC = () => {
  return (
    <Marquee
      gradient={false}
      speed={70}
      style={{
        backgroundColor: "#1e2a38",
        color: "#ffffff",
        padding: "0.5em",
        fontSize: "1rem",
        fontWeight: 500,
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
        marginTop: "1em",
      }}
    >
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
      <DockerIcon width="10em" />
      <JavaIcon height="5em" />
      <MUIIcon height="7em" />
      <MantineUIIcon height="7em" />
    </Marquee>
  );
};

export default CustomMarquee;

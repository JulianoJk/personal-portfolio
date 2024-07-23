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
import { Theme, Typography, useMediaQuery } from "@mui/material";

const iconStyle = {
  display: "inline-block",
  margin: "0 10px", // Consistent spacing between icons
};

const CustomMarquee: React.FC = () => {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  const iconWidth = matches ? "3em" : "7em";
  console.log("🚀 ~ iconWidth:", iconWidth);
  const iconHeight = matches ? "3em" : "7em";
  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          color: "#ffffff",
          fontWeight: "bold",
          marginBottom: "1em",
        }}
      >
        Programming Skills
      </Typography>
      <Marquee
        gradient={false}
        speed={50}
        style={{
          color: "#ffffff",
          fontSize: "1.2rem", // Adjusted font size for better visibility
          fontWeight: 500,
          textAlign: "center",
          width: "100%",
          boxSizing: "border-box",
          marginTop: "1em",
        }}
      >
        <div style={iconStyle}>
          <TypeScriptIcon width={iconWidth} />
        </div>
        <div style={iconStyle}>
          <MySQLIcon width="5em" />
        </div>
        <div style={iconStyle}>
          <ReactIcon width={iconWidth} />
        </div>
        <div style={iconStyle}>
          <JavascriptIcon width={iconWidth} />
        </div>
        <div style={iconStyle}>
          <ExpressJsIcon width={iconWidth} />
        </div>
        <div style={iconStyle}>
          <MongoDBIcon width="10em" />
        </div>
        <div style={iconStyle}>
          <NodeJSIcon width="10em" />
        </div>
        <div style={iconStyle}>
          <PythonIcon width="6em" />
        </div>
        <div style={iconStyle}>
          <CSharpIcon width="6em" />
        </div>
        <div style={iconStyle}>
          <GitIcon width="10em" />
        </div>
        <div style={iconStyle}>
          <DockerIcon width="10em" />
        </div>
        <div style={iconStyle}>
          <JavaIcon height="5em" />
        </div>
        <div style={iconStyle}>
          <MUIIcon height="7em" />
        </div>
        <div style={iconStyle}>
          <MantineUIIcon height="7em" />
        </div>
      </Marquee>
    </>
  );
};

export default CustomMarquee;

import html from "../../assets/svg/skills/html.svg";
import docker from "../../assets/svg/skills/docker.svg";
import css from "../../assets/svg/skills/css.svg";
import javascript from "../../assets/svg/skills/javascript.svg";
import react from "../../assets/svg/skills/react.svg";
import typescript from "../../assets/svg/skills/typescript.svg";
import bootstrap from "../../assets/svg/skills/bootstrap.svg";
import mongoDB from "../../assets/svg/skills/mongoDB.svg";
import mysql from "../../assets/svg/skills/mysql.svg";
import csharp from "../../assets/svg/skills/csharp.svg";
import java from "../../assets/svg/skills/java.svg";
import python from "../../assets/svg/skills/python.svg";
import git from "../../assets/svg/skills/git.svg";
import materialui from "../../assets/svg/skills/materialui.svg";
import figma from "../../assets/svg/skills/figma.svg";
import nodejs from "../../assets/svg/skills/nodejs.svg";

export const skillsImage = (skill: string): string | undefined => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case "html":
      return html;
    case "docker":
      return docker;
    case "css":
      return css;
    case "javascript":
      return javascript;
    case "react":
      return react;
    case "typescript":
      return typescript;
    case "bootstrap":
      return bootstrap;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "c#":
      return csharp;
    case "java":
      return java;
    case "python":
      return python;
    case "git":
      return git;
    case "mui":
      return materialui;
    case "figma":
      return figma;
    case "nodejs":
      return nodejs;
    default:
      return undefined;
  }
};

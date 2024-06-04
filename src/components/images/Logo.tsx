import { ISvgImages } from "../Model/Model";

const LogoImage = (props: ISvgImages) => (
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width={props.width ?? 231}
    height={props.height ?? 140}
    viewBox="0 0 231 140"
    enableBackground="new 0 0 231 140"
    className={props.className}
  >
    <image
      id="image0"
      className={props.className}
      width={props.width ?? 231}
      height={props.height ?? 140}
      x="0"
      y="0"
      href="data:image/png;base64,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"
    />
  </svg>
);
export default LogoImage;

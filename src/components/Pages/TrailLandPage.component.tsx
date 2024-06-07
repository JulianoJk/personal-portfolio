import React from "react";
import Trail from "./Trail.component";
interface TrailLandPage {
  open: boolean;
}
const TrailLandPage: React.FC<TrailLandPage> = (props) => {
  const { open } = props;

  // const [open, setOpen] = useState(true);
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setOpen((prevOpen) => !prevOpen);
  //   }, 1000); // Toggle every 4 seconds

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <Trail open={open}>
      <span>Hello</span>
      <span>I'm Juliano Jika</span>
      <span>Dolor</span>
      <span>Sit</span>
    </Trail>
  );
};

export default TrailLandPage;

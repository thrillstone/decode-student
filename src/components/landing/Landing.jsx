import { useContext } from "react";
import { UserContext } from "../../App";


function Landing({onNavClick}) {
  const user = useContext(UserContext);

  return (
    <div>
      <div onClick={() => onNavClick('classes')}>Classes</div>
      <div onClick={() => onNavClick('trophies')}>Trophies</div>
    </div>
  );
}

export default Landing;

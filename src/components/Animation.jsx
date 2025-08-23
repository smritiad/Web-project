import logo from "../assets/clock.png";
import { motion } from "framer-motion";

function Animate() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
      marginTop: "75px"
    }}>
      <motion.img
        style={{ width: "500px", height: "550px" }}
        animate={{ scale: [1, 2, 1], rotate: 360 }}
        transition={{ duration: 2 }}
        src={logo}
        alt="Alarm icon"
      />
    </div>
  );
}

export default Animate;
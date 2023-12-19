import Demo from "../Component/Demo";
import Indian from "../Component/Indian";
import Popular from "../Component/Popular";
import { motion } from "framer-motion";
import Vegetarian from "../Component/Vegetarian";

function Home() {
  return (
    <motion.div
    animate={{opacity:1}}
    initial={{opacity:0}}
    exit={{opacity:0}}
    transition={{duration: 0.5}}
    >
      <Demo />
      <Vegetarian/>
      <Popular />
      <Indian />
    </motion.div>
  )
}

export default Home

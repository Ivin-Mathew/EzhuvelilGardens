import React from "react";
import { motion, useViewportScroll } from "framer-motion";

const linkList = ["Resources", "Services", "Contact"];

const navStyles = {
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  height: "5rem",
  padding: "0 2rem",
  width: "calc(100vw)",
  left: "0"
};


export default function Nav() {
  const { scrollY } = useViewportScroll();
  const [hidden, setHidden] = React.useState(false);

  function update() {
    if (scrollY?.current < scrollY?.prev) {
      setHidden(false);
    } else if (scrollY?.current > 40 && scrollY?.current > scrollY?.prev) {
      setHidden(true);
    }
  }

  React.useEffect(() => {
    return scrollY.onChange(() => update());
  });

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 }
  };

  // Function to handle click on navigation links
  const handleLinkClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="">
      <motion.nav
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.3 }}
        style={navStyles}
        className="shadow-md bg-[#3fbbc0]"
      >
        <span>Logo</span>
        <div className="flex items-center justify-between w-[25%] font-semibold text-lg">
          {linkList.map((item, i) => (
            <span key={i} onClick={handleLinkClick}>
              {item}
            </span>
          ))}
        </div>
      </motion.nav>
    </div>
    
  );
}

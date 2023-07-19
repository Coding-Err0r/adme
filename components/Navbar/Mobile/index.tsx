"use client";
import { useEffect, useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";
import images from "@/config/images";

interface Props {
  links: string[];
}

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const menuItems = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const MobileNavbar = ({ links }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const ref = useRef<any>(null);
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
    console.log(isOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "scroll";
    }
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      // custom={dimensions.current.height}
      ref={ref}
    >
      <motion.div
        className="fixed top-0 bottom-0 left-0 right-0 z-10 w-screen h-screen bg-zinc-900"
        variants={sidebar}
      >
        <motion.ul
          variants={variants}
          className="relative z-20 flex flex-col items-center justify-center w-full h-full space-y-4 -mt-[5rem]"
        >
          <a href="/">
            <motion.img
              src={images.logoTwo}
              alt=""
              className="h-16 ml-6"
              variants={menuItems}
            />
          </a>
          {links.map((link: string, index: number) => (
            <motion.li
              variants={menuItems}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              key={index}
              className="font-bold menu-item"
              data-fill-text={link}
            >
              <a href={`/${link.toLowerCase()}`}>{link}</a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
      <button
        onClick={() => toggleOpen()}
        className=" cursor-pointer  w-[50px] h-[50px] bg-transparent rounded-[50%] relative z-30"
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faX} className="text-white" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="text-white" />
        )}
      </button>
    </motion.nav>
  );
};

export default MobileNavbar;

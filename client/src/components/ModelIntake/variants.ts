export const variants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
  exit: {
    y: "100vh",
    opacity: 0,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

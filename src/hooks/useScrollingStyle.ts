import { useEffect } from "react";
import _ from "lodash";

const useScrollingStyle = () => {
  useEffect(() => {
    const targets = document.querySelectorAll(".stopped");

    const handleScroll = () => {
      targets.forEach((target) => {
        target.classList.add("scrolling");
        target.classList.remove("stopped");
      });

      // Debounced scroll stop detection
      debounceScrollStop();
    };

    const debounceScrollStop = _.debounce(() => {
      targets.forEach((target) => {
        target.classList.add("stopped");
        target.classList.remove("scrolling");
      });
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default useScrollingStyle;

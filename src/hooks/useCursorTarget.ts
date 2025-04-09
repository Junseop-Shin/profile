import { useState, useEffect, RefObject } from "react";

const useCursorTarget = (cursorRef?: RefObject<HTMLDivElement | null>) => {
  const [cursorTarget, setCursorTarget] = useState<NodeListOf<Element> | null>(
    null
  );

  useEffect(() => {
    let handleButtonEnter: () => void;
    let handleButtonLeave: () => void;

    if (cursorRef === undefined) {
      const cursor = document.querySelector(".cursor");
      handleButtonEnter = () => {
        cursor?.classList.add("hover-active");
      };

      handleButtonLeave = () => {
        cursor?.classList.remove("hover-active");
      };
    } else {
      // 호버 시 색상 변경 로직
      handleButtonEnter = () => {
        cursorRef.current?.classList.add("hover-active");
      };

      handleButtonLeave = () => {
        cursorRef.current?.classList.remove("hover-active");
      };
    }

    const targets = document.querySelectorAll(".hover-target");
    setCursorTarget(targets);
    targets.forEach((btn) => {
      btn.addEventListener("mouseenter", handleButtonEnter);
      btn.addEventListener("mouseleave", handleButtonLeave);
    });

    return () => {
      targets.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleButtonEnter);
        btn.removeEventListener("mouseleave", handleButtonLeave);
      });
    };
  }, [cursorRef]);

  return cursorTarget;
};

export default useCursorTarget;

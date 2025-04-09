import { useLayoutEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // 커서 이동 로직
    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      const { clientX, clientY } = e;
      //   cursorRef.current.style.left = `${clientX - 16}px`;
      //   cursorRef.current.style.top = `${clientY - 16}px`;
      cursorRef.current.style.transform = `translate(${clientX - 16}px, ${
        clientY - 16
      }px)`;
    };

    // 호버 시 색상 변경 로직
    const handleButtonEnter = () => {
      cursorRef.current?.classList.add("hover-active");
    };

    const handleButtonLeave = () => {
      cursorRef.current?.classList.remove("hover-active");
    };

    const buttons = document.querySelectorAll(".hover-target");
    buttons.forEach((btn) => {
      btn.addEventListener("mouseenter", handleButtonEnter);
      btn.addEventListener("mouseleave", handleButtonLeave);
    });

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      buttons.forEach((btn) => {
        btn.removeEventListener("mouseenter", handleButtonEnter);
        btn.removeEventListener("mouseleave", handleButtonLeave);
      });
    };
  }, [cursorRef]);

  return (
    <div
      id="cursor"
      ref={cursorRef}
      className="cursor fixed flex items-center justify-center size-8 border-2 border-gray-200 rounded-[50%] pointer-events-none z-[100] 
      transition-transform duration-200 ease-out top-0 left-0 hover-active:bg-gray-300 hover-active:opacity-50 hover-active:border-none"
    >
      <div className="inner-cursor size-1 rounded-[50%] bg-gray-200 transition-colors duration-300 hover-active:bg-gray-300" />
    </div>
  );
};

export default Cursor;

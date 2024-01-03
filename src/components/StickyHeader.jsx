import { useEffect, useRef, useState } from "react";

function StickyHeader({ children }) {
  const [stuck, setStuck] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const cachedRef = ref.current;
    const observer = new IntersectionObserver(
      ([e]) => setStuck(e.intersectionRatio < 1),
      { threshold: [1] },
    );
    observer.observe(cachedRef);
    return () => observer.unobserve(cachedRef);
  }, [ref]);

  return (
    <header
      ref={ref}
      className={`max-w-1k2 sticky left-0 top-[-1px] z-[1000] mx-auto flex w-full flex-wrap justify-between bg-white px-4 xl:justify-center ${
        stuck && "max-w-[1920px] shadow-[0_0_6px_#333]"
      }`}
    >
      {children}
    </header>
  );
}

export default StickyHeader;

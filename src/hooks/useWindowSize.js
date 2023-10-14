import { useEffect, useState } from "react";

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const handleResize = function () {
                setWindowSize(window.innerWidth);
            };
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, [windowSize]);
    return windowSize;
}

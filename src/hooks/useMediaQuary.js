"use client";
import { useEffect, useState } from "react";

export default function useMediaQuary() {
  const [device, setDevice] = useState("default");
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [webSize, setWebSize] = useState("default");

  useEffect(() => {
    const checkDevice = () => {
      if (window.matchMedia("(max-width: 640px)").matches) {
        setDevice("mobile");
      } else if (window.matchMedia("(min-width: 641px) and (max-width: 1024px)").matches) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }

      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
    };
  }, []);

  useEffect(() => {
    const checkWebSize = () => {
      if (dimensions !== null) {
        if (dimensions.width >= 1536) {
          setWebSize("xl");
        } else if (dimensions.width >= 1200 && dimensions.width < 1536) {
          setWebSize("l");
        } else if (dimensions.width >= 900 && dimensions.width < 1200) {
          setWebSize("md");
        } else if (dimensions.width >= 600 && dimensions.width < 900) {
          setWebSize("sm");
        } else {
          setWebSize("xs");
        }
      }
    };

    checkWebSize();

    return () => {
      checkWebSize();
    };
  }, [dimensions]);

  return {
    device,
    width: dimensions?.width,
    height: dimensions?.height,
    webSize,
  };
}

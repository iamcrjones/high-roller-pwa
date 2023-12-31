import { useState, useEffect } from "react";

function getDeviceWidth() {
  return typeof window === "undefined" ? null : window.innerWidth;
}
function determineWidthVariable(width: number) {
  if (width < 640) return "mobile";
  if (width >= 640 && width < 768) return "sm";
  if (width >= 768 && width < 1024) return "md";
  if (width >= 1024 && width < 1280) return "lg";
  if (width >= 1280 && width < 1536) return "xl";
  if (width >= 1536) return "2xl";
}

export default function useScreenSize() {
  const [deviceWidth, setDeviceWidth] = useState(getDeviceWidth());
  useEffect(() => {
    function handleResize() {
      setDeviceWidth(getDeviceWidth());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (deviceWidth) return determineWidthVariable(deviceWidth);
}

import { useEffect, useState } from "react";

export const useContainerDimensions = (myRef:any) => {
    const [dimensions, setDimensions] = useState({left: 0, right: 0, width: 0, height: 0 })
  
    useEffect(() => {
      const getDimensions = () => ({
        width: myRef.current.offsetWidth,
        height: myRef.current.offsetHeight,
        left: myRef.current.offsetLeft,
        right: myRef.current.offsetRight,
      })
  
      const handleResize = () => {
        setDimensions(getDimensions())
      }
  
      if (myRef.current) {
        setDimensions(getDimensions())
      }
  
      window.addEventListener("resize", handleResize)
  
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, [myRef])
  
    return dimensions;
  };
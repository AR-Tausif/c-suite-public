import React, { useEffect, useRef, ReactNode } from "react";

interface InfiniteHorizontalScrollProps {
  children: ReactNode; 
  scrollSpeed?: number; 
  intervalTime?: number; 
}

const InfiniteHorizontalScroll: React.FC<InfiniteHorizontalScrollProps> = ({
  children,
  scrollSpeed = 2,
  intervalTime = 30,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  
  const duplicatedChildren = React.Children.toArray(children).concat(
    React.Children.toArray(children)
  );

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (!scrollContainer) return; 

    
    scrollContainer.scrollLeft = 0;

    
    const autoScroll = () => {
      if (scrollContainer) {
        
        scrollContainer.scrollLeft += scrollSpeed;

        
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    
    const intervalId = setInterval(autoScroll, intervalTime);

    
    return () => clearInterval(intervalId);
  }, [scrollSpeed, intervalTime]);

  return (
    <div
      ref={scrollContainerRef}
      style={{
        display: "flex",
        overflowX: "auto",
        padding: "20px 0",
        whiteSpace: "nowrap",
        scrollbarColor:"white",
        scrollbarWidth:"none",
        width: "100%",
        position: "relative",
      }}
    >
      {duplicatedChildren.map((child, index) => (
        <div
          key={index}
          style={{
            flexShrink: 0,
            marginRight: 10,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default InfiniteHorizontalScroll;

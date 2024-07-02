import React, { useRef, useEffect } from "react";
import smoothScrollbar from "smooth-scrollbar";
import Nav from "./components/navbar";
import Footer from "./components/footer";
import Landing from "./components/home";
import Services from "./components/services";
import Map from "./components/map";

function App() {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollbar = smoothScrollbar.init(scrollContainerRef.current);

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <>
      
      <div ref={scrollContainerRef} className="scrollbar" style={{ height: "100vh", overflow:"hidden"}}>
        <Landing />
        <Services />
        {/* <Map /> */}
        <Footer />
      </div>
      
    </>
  );
}

export default App;

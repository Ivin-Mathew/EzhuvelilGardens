import React, { useRef, useEffect } from "react";
import smoothScrollbar from "smooth-scrollbar";
import Nav from "./components/navbar";
import Footer from "./components/footer";

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

        <Nav />
        <div className="h-[100rem] bg-slate-400 text-white pt-32">
          Hello
        </div>
        <Footer />


      </div>
      
    </>
  );
}

export default App;

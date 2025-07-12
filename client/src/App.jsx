import { useRef, useEffect } from "react";
import smoothScrollbar from "smooth-scrollbar";
import Footer from "./components/footer";
import Landing from "./components/home";
import Services from "./components/services";

const images=[
  {
      original:'./assets/gallery1/1.jpg',
      thumbnail:'./assets/gallery1/1.jpg',
      alt:'Image 1',
      title:'Image 1',
  },
  {
      original:'./assets/gallery1/2.jpg',
      thumbnail:'./assets/gallery1/1.jpg',
      alt:'Image 2',
      title:'Image 2',
  },
  {
      original:'./assets/gallery1/3.jpg',
      thumbnail:'./assets/gallery1/1.jpg',
      alt:'Image 3',
      title:'Image 3',
  },
  {
      original:'./assets/gallery1/4.jpg',
      thumbnail:'./assets/gallery1/1.jpg',
      alt:'Image 4',
      title:'Image 4',
  },
  {
      original:'./assets/gallery1/5.jpg',
      thumbnail:'./assets/gallery1/1.jpg',
      alt:'Image 5',
      title:'Image 5',
  },
  {
      original:'./assets/gallery1/6.jpg',
      alt:'Image 6',
      title:'Image 6',
  },
  {
      original:'./assets/gallery1/7.jpg',
      alt:'Image 7',
      title:'Image 7',
  },
];

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
        <Footer />
      </div>
    </>
  );
}

export default App;

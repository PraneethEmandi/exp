import { Parallax } from 'react-parallax';
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Nasa from '../img/levyug.jpeg';

const ImageOne = () => {
  const targetRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);

  useEffect(() => {
    // Get the width of the container
    const container = targetRef.current;
    if (container) {
      setContainerWidth(container.offsetWidth);
    }

    // Get the width of the image once it is loaded
    const img = new Image();
    img.src = Nasa;
    img.onload = () => setImgWidth(img.width);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const maxScroll = Math.max(0, imgWidth - containerWidth);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  return (
    <Parallax className='image' blur={0} strength={600} bgImageStyle={{ minHeight: "100vh" }}>
      <div className='content'>
        {/* <span className="img-txt">a trip to Space</span> */}
      </div>
      <section
        ref={targetRef}
        className="relative h-screen sm:h-[300vh] bg-neutral-900 overflow-hidden"
        style={{ background: '#141414' }}
      >
        <motion.div style={{ x }} className="absolute top-0 left-0 h-full w-full">
          <img
            src={Nasa}
            alt="Nasa Image" // Update alt text accordingly
            className="h-full w-full object-cover sm:w-full"
          />
        </motion.div>
      </section>
    </Parallax>
  );
};

export default ImageOne;

import { useState } from 'react';
import './App.css';

const images = [
  {
    id: 1,
    src: "https://images2.thanhnien.vn/zoom/700_438/528068263637045248/2023/6/6/onepiece-1686048581557705028090-0-102-900-1542-crop-1686048593194890809280.jpg",
  },
  {
    id: 2,
    src: "https://images2.thanhnien.vn/zoom/700_438/Uploaded/truonggiang/2017_04_09/one-piece-dai-chien2_NBWB.jpg",
  },
  {
    id: 3,
    src: "https://images2.thanhnien.vn/zoom/700_438/Uploaded/khuongduy/2022_04_08/one-piece-01-6854.jpg",
  },
  {
    id: 4,
    src: "https://ment-wordpress.s3.ap-southeast-1.amazonaws.com/gametop/2022/04/26044302/https-lh3-googleusercontent-com-vu20tspfwslyce0i-1024x724.jpeg",
  },
  {
    id: 5,
    src: "https://image.lag.vn/upload/news/22/06/27/one-piece-wano-arc_EQCU.jpg",
  }
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext= ()=> {
    const nextImage = currentImage + 1;
    if (nextImage >= images.length) {
      setCurrentImage(0);
    } else {
      setCurrentImage(nextImage);
    }
  }

  const handlePrev= () => {
    const prevImage = currentImage - 1;
    if (prevImage < 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(prevImage);
    }
  }

  return (
    <>
    <div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
    <div>
      <img className='img' src={images[currentImage].src} alt="Image" />
    </div>
    </>
  );
};

export default ImageSlider;

import React, { useEffect, useRef, useState } from "react";
import fetchData from "../../../fetchData";
import "./CarouselDesktop.css";
import arrowLeft from "./../assets/arrowLeft.svg";

function CreateCarouselDesktop() {
  const [carousel, setCarousel] = useState([]);
  let [index, setIndex] = useState(0);
  const image = useRef();

  useEffect(() => {
    async function CarouselDesktopData() {
      const CarouselResponse = await fetchData();
      setCarousel(CarouselResponse);
    }
    CarouselDesktopData();
  }, []);

  useEffect(() => {
    setTimeout(ChangeIndex, 3000);
  });

  const data = carousel.carouselDesktop;

  const length = data?.length;

  const ChangeIndex = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  const handleClickRight = () => {
    setIndex(index + 1);
    ChangeIndex();
    clearInterval();
  };

  const handleClickLeft = () => {
    index = index - 1;
    ChangeIndex();
    clearInterval();
  };

  const clearInterval = () => {
    clearTimeout();
    setTimeout(ChangeIndex, 3000);
  };

  return (
    <div className="carousel">
      <div className="carousel-desktop">
        <div className="arrow-left">
          <img src={arrowLeft} onClick={handleClickLeft} />
        </div>
        {carousel?.carouselDesktop?.map((item) => {
          return (
            <div
              className="carousel-desktop-img"
              key={item}
              style={{
                transform: `translateX(${-100 * index}%)`,
                transition: "transform ease-out 0.45s",
              }}
              ref={image}
            >
              <img src={item} />
            </div>
          );
        })}
        <div className="arrow-right" onClick={handleClickRight}>
          <img src={arrowLeft} />
        </div>
      </div>
    </div>
  );
}

export default CreateCarouselDesktop;

// function CreateCarouselDesktop() {
//   const [carousel, setCarousel] = useState([]);
//   let [index, setIndex] = useState(0);
//   const image = useRef();

//   useEffect(() => {
//     async function CarouselDesktopData() {
//       const CarouselResponse = await fetchData();
//       setCarousel(CarouselResponse);
//     }
//     CarouselDesktopData();
//   }, []);

//   useEffect(() => {
//     setTimeout(ChangeIndex, 3000);
//   });

//   const data = carousel.carouselDesktop;

//   const length = data?.length;

//   const ChangeIndex = () => {
//     setIndex(index === length - 1 ? 0 : index + 1);
//   };

//   const handleClickRight = () => {
//     // setIndex(index === length - 1 ? 0 : index + 1);
//     setIndex(index + 1);
//     ChangeIndex();
//     clearInterval();
//   };

//   const handleClickLeft = () => {
//     // setIndex(index === length - 1 ? length - 2 : index + 1);
//     // console.log(image.current);
//     // setIndex(index - 1);
//     index = index - 1;
//     ChangeIndex();
//     clearInterval();
//   };

//   const clearInterval = () => {
//     clearTimeout();
//     setTimeout(ChangeIndex, 3000);
//   };

//   return (
//     <div className="carousel">
//       <div className="carousel-desktop">
//         <div className="arrow-left">
//           <img src={arrowLeft} onClick={handleClickLeft} />
//         </div>
//         {carousel?.carouselDesktop?.map((item) => {
//           return (
//             <div
//               className="carousel-desktop-img"
//               key={item}
//               style={{
//                 transform: `translateX(${-100 * index}%)`,
//                 transition: "transform ease-out 0.45s",
//               }}
//               ref={image}
//             >
//               <img src={item} />
//             </div>
//           );
//         })}
//         <div className="arrow-right" onClick={handleClickRight}>
//           <img src={arrowLeft} />
//         </div>
//       </div>
//     </div>
//   );
// }

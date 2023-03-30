import React, { useEffect, useState } from "react";
import fetchData from "../../../fetchData";
import "./Carousel.css";

// export const CarouselItem = ({ width }) => {
//   const [carousel, setCarousel] = useState([]);

//   useEffect(() => {
//     async function carouselData() {
//       const carouselResponse = await fetchData();
//       setCarousel(carouselResponse);
//     }
//     carouselData();
//   }, []);
//   console.log(carousel.carouselData);

//   return (
//     <div className="carousel-item">
//       {carousel?.carouselData?.map((item) => {
//         return (
//           <div className="carousel-img" style={{ width: width }} key={item}>
//             <img src={item} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// const Carousel = ({ children }) => {
//   return (
//     <div className="carousel">
//       <div className="inner" style={{ transform: "translateX(-0%" }}>
//         {React.Children.map(children, (child, index) => {
//           return React.cloneElement(child, { width: "100%" });
//         })}
//       </div>
//     </div>
//   );
// };

// export default Carousel;

// function CreateCarousel() {
//   const [carousel, setCarousel] = useState([]);

//   useEffect(() => {
//     async function carouselData() {
//       const carouselResponse = await fetchData();
//       setCarousel(carouselResponse);
//     }
//     carouselData();
//   }, []);
//   console.log(carousel.carouselData);

//   return (
//     <div className="carousel-mobile">
//       {carousel?.carouselData?.map((item, idx) => {
//         return (
//           <div
//             className="carousel-img"
//             key={item}
//             style={{
//               transform: `translateX(${-320 * idx}px)`,
//               transition: "transform ease-out 0.45s",
//             }}
//           >
//             <img src={item} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default CreateCarousel;

// function CreateCarousel() {
//   const [carousel, setCarousel] = useState([]);

//   useEffect(() => {
//     const next = (current + 1) % slides.length;
//   });

//   useEffect(() => {
//     async function carouselData() {
//       const carouselResponse = await fetchData();
//       setCarousel(carouselResponse);
//     }
//     carouselData();
//   }, []);
//   console.log(carousel.carouselData);

//   return (
//     <div className="carousel-mobile">
//       {carousel?.carouselData?.map((item) => {
//         return (
//           <div className="carousel-img" key={item}>
//             <img src={item} />
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default CreateCarousel;

// function CustomCarousel({ children }) {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [slideDone, setSlideDone] = useState(true);
//   const [timeId, setTimeId] = useState(null);

//   useEffect(() => {
//     if (slideDone) {
//       setSlideDone(false);
//       setTimeId(
//         setTimeout(() => {
//           slideNext();
//           setSlideDone(true);
//         }, 2000)
//       );
//     }
//   }, [slideDone]);

//   const slideNext = () => {
//     setActiveIndex((val) => {
//       if (val >= children.length - 1) {
//         return 0;
//       } else {
//         return val + 1;
//       }
//     });
//   };

//   const slidePrev = () => {
//     setActiveIndex((val) => {
//       if (val <= 0) {
//         return children.length - 1;
//       } else {
//         return val - 1;
//       }
//     });
//   };

//   const AutoPlayStop = () => {
//     if (timeId > 0) {
//       clearTimeout(timeId);
//       setSlideDone(false);
//     }
//   };

//   const AutoPlayStart = () => {
//     if (!slideDone) {
//       setSlideDone(true);
//     }
//   };

//   return (
//     <div
//       className="container__slider"
//       onMouseEnter={AutoPlayStop}
//       onMouseLeave={AutoPlayStart}
//     >
//       {children.map((item, index) => {
//         return (
//           <div
//             className={"slider__item slider__item-active-" + (activeIndex + 1)}
//             key={index}
//           >
//             {item}
//           </div>
//         );
//       })}

//       <div className="container__slider__links">
//         {children.map((item, index) => {
//           return (
//             <button
//               key={index}
//               className={
//                 activeIndex === index
//                   ? "container__slider__links-small container__slider__links-small-active"
//                   : "container__slider__links-small"
//               }
//               onClick={(e) => {
//                 e.preventDefault();
//                 setActiveIndex(index);
//               }}
//             ></button>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default CustomCarousel;

function CreateCarousel() {
  const [carousel, setCarousel] = useState([]);
  let [index, setIndex] = useState(0);

  useEffect(() => {
    async function carouselData() {
      const carouselResponse = await fetchData();
      setCarousel(carouselResponse);
    }
    carouselData();
  }, []);

  const data = carousel.carouselData;

  const length = data?.length;

  const CallIndex = () => {
    if (index < length) {
      setIndex(index);
      index = index + 1;
    } else {
      setIndex(0);
    }
    // return index
  };

  useEffect(() => {
    const i = setInterval(CallIndex, 2000);
    // clearInterval(i);
  }, []);
  console.log(index);

  return (
    <div className="carousel-mobile">
      {carousel?.carouselData?.map((item) => {
        return (
          <div
            className="carousel-img"
            key={item}
            style={{
              transform: `translateX(${-320 * index}px)`,
              transition: "transform ease-out 0.45s",
            }}
          >
            <img src={item} />
          </div>
        );
      })}
    </div>
  );
}

export default CreateCarousel;

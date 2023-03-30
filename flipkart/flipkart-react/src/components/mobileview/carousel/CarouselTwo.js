// import React, { useEffect, useState } from "react";
// import CustomCarousel from "./Carousel";

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
//       <CustomCarousel>
//         {carousel?.carouselData?.map((item, idx) => {
//           return (
//             <div className="carousel-img" key={item}>
//               <img src={item} />
//             </div>
//           );
//         })}
//       </CustomCarousel>
//     </div>
//   );
// }

// export default CreateCarousel;

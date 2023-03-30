const arrowdownSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#878787" class="_2JzwqO"></path></svg>`;
const starSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink"xmlns="http://www.w3.org/2000/svg"width="12"height="11"><path  fill="#000"  d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`;
const likeBtnSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="_1l0elc" width="16" height="16" viewBox="0 0 20 16">
<path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" fill="#C2C2C2" class="eX72wL" stroke="#FFFFFF" fill-rule="evenodd" opacity=".9"></path>
</svg>`;
const ratingstarSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink"xmlns="http://www.w3.org/2000/svg"width="12"height="11"><path  fill="#fff"  d="M6.5 9.439l-3.674 2.23.94-4.26-3.21-2.883 4.254-.404L6.5.112l1.69 4.01 4.254.404-3.21 2.882.94 4.26z"></path></svg>`;
const fAssured = `https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png`;

navObj = [
  {
    title: "Electronics",
    img: arrowdownSVG,
  },
  {
    title: "TVs & Appliances",
    img: arrowdownSVG,
  },
  {
    title: "Men",
    img: arrowdownSVG,
  },
  {
    title: "Women",
    img: arrowdownSVG,
  },
  {
    title: "Baby & Kids",
    img: arrowdownSVG,
  },
  {
    title: "Home & Furniture",
    img: arrowdownSVG,
  },
  {
    title: "Sports,Books & More",
    img: arrowdownSVG,
  },
  {
    title: "Flights",
    img: "",
  },
  {
    title: "Offer Zone",
    img: "",
  },
];

filterObj = [
  {
    title: "GST INVOICE AVAILABLE",
    id: "",
    data: {
      value: ["GST Invoice Available"],
    },
  },
  {
    title: "RAM",
    id: "1",
    data: {
      value: ["1GB and Below"],
    },
  },
  {
    title: "INTERNAL STORAGE",
    id: "",
    data: {
      value: ["256 GB & Above", "128-255.9 GB", "64-127.9GB"],
    },
  },
  {
    title: "BATTERY CAPACITY",
    id: "",
    data: {
      value: ["Less than 1000 mAh"],
    },
  },
  {
    title: "SCREEN SIZE",
    id: "",
    data: {
      value: ["4.5-4.9 inch"],
    },
  },
  {
    title: "PRIMARY CAMERA",
    id: "",
    data: {
      value: ["12-15.9 MP"],
    },
  },
  {
    title: "SECONDARY CAMERA",
    id: "",
    data: {
      value: ["5-7.9 MP"],
    },
  },
  {
    title: "PROCESSOR BRAND",
    id: "",
    data: {
      value: ["APPLE"],
    },
  },
  {
    title: "SPECIALITY",
    id: "",
    data: {
      value: ["Big Storage"],
    },
  },
  {
    title: "RESOLUTION TYPE",
    id: "",
    data: {
      value: ["Retina HD Display"],
    },
  },
  {
    title: "OPERATING SYSTEM",
    id: "",
    data: {
      value: ["iOS"],
    },
  },
  {
    title: "NETWORK TYPE",
    id: "",
    data: {
      value: ["2G", "3G", "4G", "4G VOLTE"],
    },
  },
  {
    title: "SIM TYPE",
    id: "",
    data: {
      value: ["Dual Sim", "Dual Sim(Nano + eSIM"],
    },
  },
  {
    title: "OFFERS",
    id: "1",
    data: {
      value: ["Special Price", "No Cost EMI"],
    },
  },
  {
    title: "FEATURES",
    id: "",
    data: {
      value: ["HD Recording", "NFC", "Wifi"],
    },
  },
  {
    title: "TYPE",
    id: "",
    data: {
      value: ["Smartphones"],
    },
  },
  {
    title: "AVAILABILITY",
    id: "",
    data: {
      value: ["Exclude Out of Stock"],
    },
  },
  {
    title: "DISCOUNT",
    id: "1",
    data: {
      value: [
        "20% or more",
        "10% or more",
        "50% or more",
        "40% or more",
        "30% or more",
      ],
    },
  },
  {
    title: "CLOCK SPEED",
    id: "",
    data: {
      value: ["Below 1.5 GHz0"],
    },
  },
];

containerObj = [
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqf9nze6evk.jpeg?q=70",
    title: "Apple iPhone SE (White, 256 GB)(Includes EarPods, Power Adapter)",
    rating: 4.5,
    review: "1,53,888 Rating & 12,060 Reviews",
    type: "APPLE",
    data: {
      features: [
        "256 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 9999,
    discount: 25,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfh4zznmq.jpeg?q=70",
    title: "APPLE iPhone SE (Red, 128 GB)",
    rating: 4.5,
    review: "1,53,894 Rating & 12,060 Reviews",
    type: "APPLE",
    data: {
      features: [
        "128 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 24900,
    discount: 26,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfh4zznmq.jpeg?q=70",
    title: "OPPO A15s (Red, 256 GB)",
    rating: 3.5,
    review: "1,53,894 Rating & 12,060 Reviews",
    type: "OPPO",
    data: {
      features: [
        "128 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 54900,
    discount: 25,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqf9nze6evk.jpeg?q=70",
    title: "OPPO A16s (White, 128 GB)",
    rating: 4.5,
    review: "1,53,894 Rating & 12,060 Reviews",
    type: "OPPO",
    data: {
      features: [
        "128 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 14900,
    discount: 26,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjyscxm8fv.jpeg?q=70",
    title: "APPLE iPhone SE (Black, 128 GB)",
    rating: 3.0,
    review: "1,53,894 Rating & 12,060 Reviews",
    type: "APPLE",
    data: {
      features: [
        "128 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 44900,
    discount: 26,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqf9nze6evk.jpeg?q=70",
    title: "APPLE iPhone SE (White, 64 GB) (Includes EarPods, Power Adapter)",
    rating: 4.5,
    review: "1,53,894 Rating & 12,060 Reviews",
    type: "APPLE",
    data: {
      features: [
        "64 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 44900,
    discount: 26,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/b/z/apple-iphone-se-mxd12hn-a-original-imafrcqf9nze6evk.jpeg?q=70",
    title: "APPLE iPhone SE (White, 64 GB)",
    rating: 2.5,
    review: "1,53,894 Rating & 12,060 Reviews",
    type: "APPLE",
    data: {
      features: [
        "64 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 24900,
    discount: 27,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjyscxm8fv.jpeg?q=70",
    title: "SAMSUNG M30 (Black, 64 GB) ) (Includes EarPods, Power Adapter)",
    rating: 5.0,
    review: "1,53,894 Rating & 12,060 Reviews",
    type: "SAMSUNG",
    data: {
      features: [
        "64 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 29900,
    discount: 27,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/6/8/g/apple-iphone-se-mxvv2hn-a-original-imafrcqmfh4zznmq.jpeg?q=70",
    title: "SAMSUNG Galaxy S58 (Red, 64 GB)",
    rating: 3.5,
    review: "1,53,894 Rating & 12,060 Reviews",
    type: "SAMSUNG",
    data: {
      features: [
        "64 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 39900,
    discount: 27,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
  {
    img: "https://rukminim1.flixcart.com/image/312/312/k9loccw0/mobile/p/z/q/apple-iphone-se-mxd02hn-a-original-imafrcpjyscxm8fv.jpeg?q=70",
    title: "OPPO A12 (Black, 256 GB) (Includes EarPods, Power Adapter)",
    rating: 4.5,
    review: "1,53,894 Rating & 12,060 Reviews",
    type: "OPPO",
    data: {
      features: [
        "256 GB ROM",
        "11.94cm (4.7 inch) Retina HD Display",
        "12MP Rear Camera | 7MP Front Camera",
        "A13 Bionic Chip with 3rd Gen Neural Engine Processor",
        "Water and Dust Resistant (1 meter for Upto 30 minutes,IP67)",
        "Fast Charge Capable",
        "Wireless charging (Works with Qi Charges | Qi Charges are Solid Separately",
        "Brand Warranty for 1 year",
      ],
    },
    price: 5900,
    discount: 25,
    exchange: 20000,
    delivery: "Free delivery",
    offer: "Bank Offer",
  },
];

function generateNavbar(objectList) {
  for (let key = 0; key < objectList.length; key++) {
    const navBar = document.querySelector(".nav-section");
    const navlist = document.createElement("span");
    if (objectList.img !== "") {
      navlist.innerHTML = `${objectList[key].title} ${objectList[key].img}`;
    } else {
      navlist.innerHTML = `${objectList[key].title}`;
    }
    navBar.appendChild(navlist);
  }
}
generateNavbar(navObj);

function generateFilterContentList(objectList) {
  const filterList = document.querySelector(".filter-list");
  const filterTag = document.createElement("ul");
  filterList.appendChild(filterTag);

  for (let key = 0; key < objectList.length; key++) {
    const filterItems = document.createElement("li");
    filterTag.appendChild(filterItems);

    const filterTaglist = document.createElement("div");
    filterTaglist.classList.add("filter-tag");
    filterItems.appendChild(filterTaglist);

    filterTaglist.innerHTML = `${objectList[key].title}${arrowdownSVG}`;

    const filterContent = document.createElement("div");
    filterContent.classList.add("filter-content");
    filterItems.appendChild(filterContent);

    objectList[key].data.value.forEach((item) => {
      const filterSubcontent = document.createElement("div");
      filterSubcontent.classList.add("brand");
      filterContent.appendChild(filterSubcontent);

      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      filterSubcontent.appendChild(checkBox);

      const filterText = document.createElement("p");
      filterSubcontent.appendChild(filterText);
      filterText.innerHTML = item;
    });

    filterTaglist.addEventListener("click", () => {
      filterContent.classList.toggle("show");
      filterTaglist.classList.toggle("active");
    });
    if (objectList[key].id !== "") {
      filterContent.classList.add("show");
      filterTaglist.classList.add("active");
    }
  }
}

generateFilterContentList(filterObj);

function createMobileContainers(objectList) {
  // console.log(objectList);
  const mainContainer = document.querySelector(".main-mobilecontainer");
  mainContainer.innerHTML = "";
  objectList.forEach((element) => {
    const mobileContainer = document.createElement("div");
    mobileContainer.classList.add("mobile-container");
    mainContainer.appendChild(mobileContainer);

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    mobileContainer.appendChild(imageContainer);

    const imageCard = document.createElement("div");
    imageCard.classList.add("image-card");
    imageContainer.appendChild(imageCard);

    const image = document.createElement("img");
    image.src = element.img;
    imageCard.appendChild(image);

    const compareIcon = document.createElement("div");
    compareIcon.classList.add("compare");
    imageContainer.appendChild(compareIcon);

    const compareCheckbox = document.createElement("input");
    compareCheckbox.type = "checkbox";
    compareIcon.appendChild(compareCheckbox);

    const compareText = document.createElement("span");
    compareIcon.appendChild(compareText);
    compareText.innerHTML = "Add to Compare";

    const likeBtn = document.createElement("div");
    likeBtn.classList.add("like-btn");
    imageContainer.appendChild(likeBtn);
    likeBtn.innerHTML = likeBtnSVG;

    const mobileContent = document.createElement("div");
    mobileContent.classList.add("mobile-content");
    mobileContainer.appendChild(mobileContent);

    const featuresSection = document.createElement("div");
    featuresSection.classList.add("features-section");
    mobileContent.appendChild(featuresSection);

    const featureHeading = document.createElement("div");
    featureHeading.classList.add("features-heading");
    featuresSection.appendChild(featureHeading);
    featureHeading.innerHTML = element.title;

    const rating = document.createElement("div");
    rating.classList.add("rating");
    featuresSection.appendChild(rating);

    const starRating = document.createElement("div");
    starRating.classList.add("star-rating");
    rating.appendChild(starRating);

    const ratingContent = document.createElement("p");
    starRating.appendChild(ratingContent);
    ratingContent.innerHTML = element.rating;

    starRating.innerHTML += ratingstarSVG;

    const review = document.createElement("span");
    rating.appendChild(review);
    review.innerHTML = element.review;

    const features = document.createElement("div");
    features.classList.add("features");
    featuresSection.appendChild(features);

    const featuresUl = document.createElement("ul");
    features.appendChild(featuresUl);

    element.data.features.forEach((item) => {
      const featuresLi = document.createElement("li");
      featuresUl.appendChild(featuresLi);
      featuresLi.innerHTML = item;
    });

    const priceSection = document.createElement("div");
    priceSection.classList.add("price-section");
    mobileContent.appendChild(priceSection);

    const priceTag = document.createElement("div");
    priceTag.classList.add("price-tag");
    priceSection.appendChild(priceTag);
    priceTag.innerHTML = "₹";

    const currentPrice = document.createElement("p");
    priceTag.appendChild(currentPrice);
    currentPrice.innerHTML = `${calculateDiscountPrice(
      element.price,
      element.discount
    )} `;

    const fassured = document.createElement("img");
    fassured.src =
      "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png";
    priceTag.appendChild(fassured);
    fassured.innerHTML = fassured;

    const actualPrice = document.createElement("div");
    actualPrice.classList.add("actual-price");
    priceSection.appendChild(actualPrice);

    const actualPriceTag = document.createElement("p");
    actualPriceTag.innerHTML = `₹${element.price}`;
    actualPrice.appendChild(actualPriceTag);

    const discount = document.createElement("span");
    discount.innerHTML = `${element.discount}% off`;
    actualPrice.appendChild(discount);

    const delivery = document.createElement("p");
    delivery.innerHTML = element.delivery;
    priceSection.appendChild(delivery);

    const exchange = document.createElement("span");
    exchange.innerHTML = `Upto <strong>₹${element.exchange}</strong> Off on Exchange`;
    priceSection.appendChild(exchange);

    const offer = document.createElement("a");
    offer.innerHTML = element.offer;
    priceSection.appendChild(offer);

    function calculateDiscountPrice(actualPrice, discounts) {
      return (calculateDiscountPrice = Math.round(
        actualPrice * ((100 - discounts) / 100)
      ));
    }
  });
}
createMobileContainers(containerObj);

const mainContainer = document.querySelectorAll(".main-container");

function calculateDiscountPrice(actualPrice, discounts) {
  return (calculateDiscountPrice = Math.round(
    actualPrice * ((100 - discounts) / 100)
  ));
}

calculateDiscountPrice();

// function filterByPrice() {
//   const mobileContainer = document.querySelectorAll(".mobile-container");
//   const minSelectTags = document.querySelector("#min");
//   minSelectTags.addEventListener("change", () => {
//     const priceTag = document.querySelectorAll(".price-tag p");
//     for (i = 0; i < priceTag.length; i++) {
//       // console.log(priceTag[i].innerHTML);
//       // console.log(minSelectTags.value);
//       if (+minSelectTags.value > +priceTag[i].innerHTML) {
//         mobileContainer[i].style.display = "none";
//       }
//     }
//   });

//   const maxSelectTags = document.querySelector("#max");
//   maxSelectTags.addEventListener("change", () => {
//     const priceTag = document.querySelectorAll(".price-tag p");
//     for (i = 0; i < priceTag.length; i++) {
//       if (+maxSelectTags.value < +priceTag[i].innerHTML) {
//         mobileContainer[i].style.display = "none";
//       }
//     }
//   });
// }

// filterByPrice();

function toggleFilterButton() {
  const filterContainer = document.querySelectorAll(".filter-data");
  filterContainer.forEach((tag) => {
    tag.children[0].addEventListener("click", () => {
      tag.children[0].classList.toggle("active");
      tag.children[1].classList.toggle("show");
    });
  });
}

toggleFilterButton();

//filter content by brand

// let arr = [];
// function filterContent() {
//   const checkBoxIcon = document.querySelectorAll(".mobile input");

//   checkBoxIcon.forEach((checkBox) => {
//     checkBox.addEventListener("change", (event) => {
//       if (checkBox.checked) {
//         let containerArr = containerObj.filter(
//           (item) => item.type === event.target.value
//         );

//         arr.push(...containerArr);
//         createMobileContainers(arr);
//       } else {
//         createMobileContainers(containerObj);
//       }
//     });
//   });
// }

// filterContent();

//sort button onClick

const sorts = document.querySelectorAll(".sort p");

function removeClass() {
  sorts.forEach((sort) => {
    sort.classList.remove("sorted");
  });
}

sorts.forEach((element) => {
  element.addEventListener("click", () => {
    removeClass();
    element.classList.add("sorted");
    element.focus();
  });
});

// const priceActual = document.querySelectorAll(".price-tag p");
// for (i = 0; i < containerObj.length; i++) {
//   console.log(
//     containerObj.sort(function (a, b) {
//       return a - b;
//     })
//   );
// }

/////to Separate numbers by Commas/////////

// const prices = document.querySelectorAll(".price-tag p");
// prices.forEach((price) => {
//   mrp = +price.innerHTML;
//   console.log(mrp.tolocaleString("en-US"));
// });

const starRatings = document.querySelectorAll(".star-rating p");
const starButton = document.querySelectorAll(".star-rating");

starRatings.forEach((star, idx) => {
  if (+star.innerHTML < 3) {
    starButton[idx].style.backgroundColor = "red";
  } else if (+star.innerHTML < 4) {
    starButton[idx].style.backgroundColor = "orangered";
  }
});

/////Filter mobile containers on the basis of rating

// const price = document.querySelectorAll(".price-tag p");
// const ratingFilters = document.querySelectorAll(".rating-filter input");
// console.log(ratingFilters);

// ratingFilters.forEach((filter) => {
//   filter.addEventListener("change", (event) => {
//     console.log(event.target.value);
//     if (filter.checked) {
//       console.log("yes");
//       let containerArr = containerObj.filter(
//         (item) => item.rating >= event.target.value
//       );

//       arr.push(...containerArr);
//       createMobileContainers(arr);
//     } else {
//       console.log("no");
//       arr.pop();
//     }
//   });
// });

///////filter by brand//////

// let arr = [];
// function filterContent() {
//   const checkBoxIcon = document.querySelectorAll(".mobile input");

//   checkBoxIcon.forEach((checkBox) => {
//     checkBox.addEventListener("change", (event) => {
//       if (checkBox.checked) {
//         arr.push(checkBox.checked);
//         console.log(arr.length);

//         // let containerArr = containerObj.filter(
//         //   (item) => item.type === event.target.value
//         // );

//         // arr.push(...containerArr);
//         // createMobileContainers(arr);
//       } else {
//         arr.pop();
//         console.log(arr.length);
//       }
//     });
//   });
// }

// filterContent();

// this function applies all the selected
// filters when a filter event is detected

function applyFilters(data) {
  let brandFilters = [];
  let ratingFilters = [];
  let priceFilters = [];

  // get the brand elements

  const l1 = document.querySelector(".apple");
  const l2 = document.querySelector(".samsung");
  const l3 = document.querySelector(".oppo");

  if (l1.checked === true) {
    brandFilters.push("APPLE");
  }
  if (l2.checked === true) {
    brandFilters.push("SAMSUNG");
  }
  if (l3.checked === true) {
    brandFilters.push("OPPO");
  }

  //get ratings elements

  const s1 = document.querySelector(".four");
  const s2 = document.querySelector(".three");

  if (s1.checked === true) {
    ratingFilters.push(4);
  }
  if (s2.checked === true) {
    ratingFilters.push(3);
  }

  if (brandFilters.length) {
    data = brandFilter(data, brandFilters);
  }
  if (ratingFilters.length) {
    data = ratingFilter(data, ratingFilters);
  }
  console.log(brandFilters);

  const minTag = document.querySelector("#min");
  const maxTag = document.querySelector("#max");

  // apply the render of rfData

  createMobileContainers(data);
}

// This function sets up all the filters

function setupFilters(data) {
  // setup brand filters

  const l1 = document.querySelector(".apple");
  const l2 = document.querySelector(".samsung");
  const l3 = document.querySelector(".oppo");

  let selectedBrand;
  let check = "no";

  l1.addEventListener("change", () => {
    applyFilters(data);
  });
  l2.addEventListener("change", () => {
    applyFilters(data);
  });
  l3.addEventListener("change", () => {
    applyFilters(data);
  });

  // setup rating filters

  const s1 = document.querySelector(".four");
  const s2 = document.querySelector(".three");

  s1.addEventListener("change", () => {
    applyFilters(data);
  });
  s2.addEventListener("change", () => {
    applyFilters(data);
  });
}

setupFilters(containerObj);

// an unused utility function to remove
// an element from an array

// function removeElementFromArray(list, value) {
//   idx = list.findIndex((val) => {
//     return val === value;
//   });
//   if (idx === -1) return;
//   return list.splice(idx, 1);
// }

function brandFilter(data, brands) {
  return data.filter((item) => {
    return brands.includes(item.type);
  });
}

function ratingFilter(data, ratings) {
  return data.filter((item) => {
    let match = false;
    for (let i = 0; i < ratings.length; i++) {
      if (item.rating >= ratings[i]) {
        match = true;
        break;
      }
    }
    return match;
  });
}

function priceFilter(data, min, max) {
  // this function should take the whole data, min and max of the price range
  // and return all items in data whose price range is between min and max
  
}

// function filterByPrice() {
//   const mobileContainer = document.querySelectorAll(".mobile-container");
//   const minSelectTags = document.querySelector("#min");
//   minSelectTags.addEventListener("change", () => {
//     const priceTag = document.querySelectorAll(".price-tag p");
//     for (i = 0; i < priceTag.length; i++) {
//       // console.log(priceTag[i].innerHTML);
//       // console.log(minSelectTags.value);
//       if (+minSelectTags.value > +priceTag[i].innerHTML) {
//         mobileContainer[i].style.display = "none";
//       }
//     }
//   });

//   const maxSelectTags = document.querySelector("#max");
//   maxSelectTags.addEventListener("change", () => {
//     const priceTag = document.querySelectorAll(".price-tag p");
//     for (i = 0; i < priceTag.length; i++) {
//       if (+maxSelectTags.value < +priceTag[i].innerHTML) {
//         mobileContainer[i].style.display = "none";
//       }
//     }
//   });
// }

const elements = document.querySelector('.elements');
const overviewList = document.querySelector('.overview-list');
const dealsList = document.querySelector('.deals-items');
const giftList = document.querySelector('.gift-list');
const giftSVG = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg> `;
// const cursor = document.querySelectorAll('.gift-name');

pageData = [
  (list = [
    {
      title: "Sellers' Sales Hub",
      img: '',
    },
    {
      title: 'Jewellery & Accessories',
      img: '',
    },
    {
      title: 'Clothing & Shoes',
      img: '',
    },
    {
      title: 'Home & Living',
      img: '',
    },
    {
      title: 'Wedding & Party',
      img: '',
    },
    {
      title: 'Toys & Entertainment',
      img: '',
    },
    {
      title: 'Art & Collectibles',
      img: '',
    },
    {
      title: 'Craft Supplies',
      img: '',
    },
    {
      title: 'Gifts',
      img: giftSVG,
    },
  ]),
  (overview = [
    {
      url: 'https://i.etsystatic.com/17600118/c/1000/1000/0/11…/d077de/2325460652/il_300x300.2325460652_lhfz.jpg',
      name: 'Wedding',
    },
    {
      url: 'https://i.etsystatic.com/18077312/r/il/b10e09/2350226444/il_300x300.2350226444_odar.jpg',
      name: 'Jewellery',
    },
    {
      url: 'https://i.etsystatic.com/32501528/c/1518/1518/253/562/il/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg',
      name: 'Clothing',
    },
    {
      url: 'https://i.etsystatic.com/16676438/c/2002/2002/449/…/89ea5d/1467855817/il_300x300.1467855817_ksv4.jpg',
      name: 'Home & Living',
    },
    {
      url: 'https://i.etsystatic.com/30725321/r/il/a22d35/4016941798/il_300x300.4016941798_bruv.jpg',
      name: 'Wall Art',
    },
    {
      url: 'https://i.etsystatic.com/19220794/r/il/28ced3/2951466885/il_300x300.2951466885_1ly4.jpg',
      name: 'Kitchen & Dining',
    },
  ]),
  (deals = [
    {
      url: 'https://i.etsystatic.com/22368382/r/il/006d21/4245808662/il_300x300.4245808662_a3x4.jpg',
      discount: 'Up to 40% off on',
      category: "Women's Ethnic Clothing",
    },
    {
      url: 'https://i.etsystatic.com/32501528/c/1488/1488/0/0/…/23a5b4/3700725057/il_300x300.3700725057_szgj.jpg',
      discount: 'Up to 40% off on',
      category: "Women's Western Clothing",
    },
    {
      url: 'https://i.etsystatic.com/25566015/c/2003/2003/0/274/il/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg',
      discount: 'Up to 40% off on',
      category: "Men's Clothing",
    },
    {
      url: '	https://i.etsystatic.com/38026977/r/il/f2c1ad/4277525816/il_300x300.4277525816_f4wp.jpg',
      discount: 'Up to 40% off on',
      category: 'Fashion Jewellery',
    },
    {
      url: 'https://i.etsystatic.com/32501528/c/1757/1757/247/180/il/67dc01/4248212322/il_300x300.4248212322_psvv.jpg',
      discount: 'Up to 40% off on',
      category: 'Winter Clothing',
    },
    {
      url: 'https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg',
      discount: 'Up to 40% off on',
      category: 'Wedding Clothing',
    },
  ]),
  (gifts = [
    {
      url: 'https://i.etsystatic.com/35966576/c/1614/1283/669/351/il/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg',
      name: 'Birth Flower Jewelry Travel Case, Birth Month Flower Gift,Personalized Birthday Gift, Leather Jewelry Travel Case, Custom Jewelry Case',
      rating: 9393,
      actualprice: 1694,
      discount: 50,
      currencySymbol: '₹',
      urlType: 'Photo',
      video: '',
      ratingStar: 4.5,
    },
    {
      url: 'https://i.etsystatic.com/32477306/c/2000/1589/0/25…/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg',
      name: 'Dainty Name Necklace with Birth Flower, Personalized Na...',
      rating: 13452,
      actualprice: 3500,
      discount: 50,
      currencySymbol: '₹',
      urlType: 'Photo',
      video: '',
      ratingStar: 5,
    },
    {
      url: 'https://i.etsystatic.com/28045281/r/il/3f41fa/3897994052/il_340x270.3897994052_l8xd.jpg',
      name: 'Sun catcher/Crystal suncatcher/ Crystal Rainbow maker/ Aurora gemstone suncatcher/ crystal prism/ wall hanging/ Home decor/ Gift 4 women',
      rating: 6762,
      actualprice: 2627,
      discount: 10,
      currencySymbol: '₹',
      urlType: 'Video',
      video:
        'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/Purple1_aal8ie.mp4',
      ratingStar: 5,
    },
    {
      url: 'https://i.etsystatic.com/25168585/c/2500/1987/0/18…/214e7e/4589233930/il_340x270.4589233930_dg79.jpg',
      name: 'Custom Pet Portraits Using Pet Photo Personalized Digital Dog Portraits Cat Portraits Custom Pet Art Pet Drawing',
      rating: 10962,
      actualprice: 1270,
      discount: 40,
      currencySymbol: '₹',
      urlType: 'Video',
      video:
        'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/PAINT_PORTRAIT_ETSY_VIDEO_vo9waf.mp4',
      ratingStar: 5,
    },
    {
      url: 'https://i.etsystatic.com/27890741/c/2343/1862/320/…/31a0dd/4028709894/il_340x270.4028709894_i6tr.jpg',
      name: 'Heart Keychain Set-Made with Authentic LEGO® Bricks,...',
      rating: 12228,
      actualprice: 1438,
      discount: 50,
      currencySymbol: '₹',
      urlType: 'Video',
      video:
        'https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/HFF_Hearts_Video_m6nj4t.mp4',
      ratingStar: 5,
    },
    {
      url: 'https://i.etsystatic.com/26694795/c/2445/1943/282/…/035b01/3254592822/il_340x270.3254592822_5dss.jpg',
      name: 'Handmade Damascus Pocket Knife Rose Wood Handle Birthday Gift...',
      rating: 6172,
      actualprice: 8538,
      discount: 70,
      currencySymbol: '₹',
      urlType: 'Photo',
      video: '',
      ratingStar: 4.5,
    },
  ]),
];

const createNavBar = (divClass, objectList, elmType, itemClassName) => {
  for (let i = 0; i < objectList.length; i++) {
    const items = document.createElement(elmType);
    items.classList.add(itemClassName);
    divClass.appendChild(items);
    if (objectList[i].img === '' && objectList[i].img !== giftSVG) {
      items.innerHTML = `${objectList[i].title}`;
    } else {
      items.innerHTML = `${objectList[i].img}${objectList[i].title}`;
    }
  }
};

const createOverviewSection = (objectList, elmType) => {
  for (let key = 0; key < objectList.length; key++) {
    const overviewEl = document.createElement(elmType);
    overviewList.appendChild(overviewEl);
    const overviewImg = document.createElement('div');
    overviewEl.appendChild(overviewImg);
    overviewImg.classList.add('overview-img');
    overviewImg.innerHTML = `<img src=${objectList[key].url}>`;
    overviewEl.innerHTML += `<p>${objectList[key].name}</p>`;
  }
};

const createDealsElm = (objectList, elmType) => {
  for (let key = 0; key < objectList.length; key++) {
    const dealsEl = document.createElement(elmType);
    dealsList.appendChild(dealsEl);
    const dealsImg = document.createElement('div');
    dealsEl.appendChild(dealsImg);
    dealsImg.classList.add('deals-img');
    dealsImg.innerHTML = `<img src="${objectList[key].url}" alt=""/>`;

    dealsEl.innerHTML += `
            <div class="deals-txt">
              <span>${objectList[key].discount}</span>
              <p>${objectList[key].category}</p>
            </div>`;
  }
};

const createGiftElm = objectList => {
  for (let key = 0; key < objectList.length; key++) {
    const giftElement = document.createElement('div');
    giftList.appendChild(giftElement);

    giftElement.classList.add('gift-items');
    const giftImg = document.createElement('div');
    giftElement.appendChild(giftImg);

    giftImg.classList.add('gift-img');

    if (objectList[key].urlType === 'Photo') {
      giftImg.innerHTML = `
    <img
      src="${objectList[key].url}"
      alt=""
    />`;
    } else {
      giftImg.innerHTML = `<video class="video">
    <source control src="${objectList[key].video}">
    </video>`;
    }

    const videos = document.querySelectorAll('.video');
    videos.forEach(video => {
      video.addEventListener('mouseover', () => {
        video.play();
      });
      video.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
      });
    });

    const likeGift = document.createElement('div');
    giftImg.appendChild(likeGift);
    likeGift.classList.add('like-gift');
    likeGift.innerHTML = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><path d="M12,21C10.349,21,2,14.688,2,9,2,5.579,4.364,3,7.5,3A6.912,6.912,0,0,1,12,5.051,6.953,6.953,0,0,1,16.5,3C19.636,3,22,5.579,22,9,22,14.688,13.651,21,12,21ZM7.5,5C5.472,5,4,6.683,4,9c0,4.108,6.432,9.325,8,10,1.564-.657,8-5.832,8-10,0-2.317-1.472-4-3.5-4-1.979,0-3.7,2.105-3.721,2.127L11.991,8.1,11.216,7.12C11.186,7.083,9.5,5,7.5,5Z" fill="#222222"></path></svg>`;

    const likeGiftElm = document.querySelectorAll('.like-gift');

    function likeImage() {
      likeGiftElm.forEach(element => {
        element.addEventListener('click', () => {
          element.innerHTML = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><path d="M16.5,3A6.953,6.953,0,0,0,12,5.051,6.912,6.912,0,0,0,7.5,3C4.364,3,2,5.579,2,9c0,5.688,8.349,12,10,12S22,14.688,22,9C22,5.579,19.636,3,16.5,3Z" fill="#A61A2E"></path></svg>`;
        });
      });
    }
    likeImage();

    if (objectList[key].urlType === 'Video') {
      giftImg.innerHTML += `<div class="play-btn"><svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><polygon points="4 4 4 20 20 12 4 4" fill="#222222"></polygon></svg></div>`;
    }

    giftElement.innerHTML += `<div class="gift-txt">
  <h3>
   ${objectList[key].name}
  </h3>
  <div class="rating">
    <div class="star-rating">${starRating()}</div>
    <span></span>
    <p>(${objectList[key].rating})</p>
  </div>
  <div class="price">
    <p class=priceActual>${objectList[key].currencySymbol}${discountPercentage(
      objectList[key].actualprice,
      objectList[key].discount
    )}</p>
    <span>${objectList[key].currencySymbol}${objectList[key].actualprice}</span>
    <a href="">(${objectList[key].discount}% off)</a>
  </div>
</div>`;

    const textElement = document.createElement('div');
    textElement.classList.add('gift-name');
    giftElement.appendChild(textElement);

    textElement.innerHTML = `${objectList[key].name}`;

    if (objectList[key].actualprice > 2000) {
      giftElement.innerHTML += `<div class="delivery">FREE Delivery</div>`;
    }
  }
};

function starRating() {
  let x = '';
  for (let i = 1; i < gifts.length; i++) {
    x +=
      '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="14" height="14"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>';
  }
  return x;
}

function playButton() {
  let y;
  for (let i = 1; i < gifts.length; i++) {
    y =
      '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false" width="18" height="18"><polygon points="4 4 4 20 20 12 4 4" fill="#222222"></polygon></svg>';
  }
  return y;
}

function discountPercentage(actualPrice, discounts) {
  return (discountPrice = Math.round(actualPrice * ((100 - discounts) / 100)));
}

const footer = document.querySelectorAll('.footer-list');
const footerItems = document.querySelectorAll('.footer-list-mobile');
const footerList = document.querySelectorAll('.footer-list-items');

footer.forEach(element => {
  element.addEventListener('click', () => {
    element.children[0].classList.toggle('active');
    element.children[1].classList.toggle('show');
    element.children[0].children[1].classList.toggle('active');
  });
});

function generateEtsyHomePage(pageData) {
  createNavBar(elements, list, 'li', 'list');
  createOverviewSection(overview, 'li');
  createDealsElm(deals, 'li');
  createGiftElm(gifts);
}
generateEtsyHomePage();

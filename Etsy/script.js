const elements = document.querySelector('.elements');
const overviewList = document.querySelector('.overview-list');
const deals_list = document.querySelector('.deals-items');
const star = document.querySelector('.star');
const giftList = document.querySelector('.gift-list');

list = {
  seller: "Sellers' Sales Hub",
  jewel: 'Jewellery & Accessories',
  clothing: 'Clothing & Shoes',
  home: 'Home & Living',
  party: 'Wedding & Party',
  toys: 'Toys & Entertainment',
  art: 'Art & Collectibles',
  craft: 'Craft Supplies',
  gifts:
    '<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 5 22 12" width="16" height="12" aria-hidden="true" focusable="false"><path d="M5,6A1,1,0,0,0,4,7v3H5v9a1,1,0,0,0,1,1h5V6H5Z"></path><path d="M19,6H13.007A4.245,4.245,0,0,0,14.97,3.744a1.614,1.614,0,0,0-2.65-1.375,1.757,1.757,0,0,0-.315.324,1.753,1.753,0,0,0-.315-0.324A1.615,1.615,0,0,0,9.042,3.746,4.257,4.257,0,0,0,11.006,6H13V20h5a1,1,0,0,0,1-1V10h1V7A1,1,0,0,0,19,6Z"></path></svg> Gifts',
};

for (const [key, value] of Object.entries(list)) {
  const items = document.createElement('li');
  items.classList.add('list');
  elements.appendChild(items);
  items.innerHTML = `${value}`;
}

overview = [
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
    name: 'clothing',
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
];

for (let key = 0; key < overview.length; key++) {
  const overviewEl = document.createElement('li');
  overviewList.appendChild(overviewEl);
  overviewEl.innerHTML = `<div class="overview-img"><img src=${overview[key].url}></div>
  <p>${overview[key].name}</p>`;
}

let deals = [
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
    url: 'https://i.etsystatic.com/25566015/c/2003/2003/0/27…/5b71e2/3196479462/il_300x300.3196479462_20xh.jpg',
    discount: 'Up to 40% off on',
    category: "Men's Clothing",
  },
  {
    url: '	https://i.etsystatic.com/38026977/r/il/f2c1ad/4277525816/il_300x300.4277525816_f4wp.jpg',
    discount: 'Up to 40% off on',
    category: 'Fashion Jewellery',
  },
  {
    url: 'https://i.etsystatic.com/32501528/c/1757/1757/247/…/67dc01/4248212322/il_300x300.4248212322_psvv.jpg',
    discount: 'Up to 40% off on',
    category: 'Winter Clothing',
  },
  {
    url: 'https://i.etsystatic.com/23528878/r/il/625e23/2589827894/il_300x300.2589827894_bi5a.jpg',
    discount: 'Up to 40% off on',
    category: 'Wedding Clothing',
  },
];

for (let key = 0; key < deals.length; key++) {
  const dealsEl = document.createElement('li');
  deals_list.appendChild(dealsEl);
  dealsEl.innerHTML = `
            <div class="deals-img">
            <img
            src="${deals[key].url}"
            alt=""
            />
            </div>
            <div class="deals-txt">
              <span>${deals[key].discount}</span>
              <p>${deals[key].category}</p>
            </div>`;
}

gifts = [
  {
    url: 'https://i.etsystatic.com/35966576/c/1614/1283/669/…/e1510f/4033777789/il_340x270.4033777789_dqlw.jpg',
    name: 'Birth Flower Jewelry Travel Case, Birth Month Flower Gift,...',
    rating: '(9,393)',
    actualprice: 1694,
    discount: 50,
  },
  {
    url: 'https://i.etsystatic.com/32477306/c/2000/1589/0/25…/0bcd64/3491080620/il_340x270.3491080620_oh18.jpg',
    name: 'Dainty Name Necklace with Birth Flower, Personalized Na...',
    rating: '(13,452)',
    actualprice: 3500,
    discount: 50,
    // currencySymbol: '$',
    // delivery: 'FREE delivery',
  },
  {
    url: 'https://i.etsystatic.com/28045281/r/il/3f41fa/3897994052/il_340x270.3897994052_l8xd.jpg',
    name: 'Sun catcher/Crystal suncatcher/ Crystal Rainbow...',
    rating: '(6,762)',
    actualprice: 2627,
    discount: 10,
    // delivery: 'FREE delivery',
  },
  {
    url: 'https://i.etsystatic.com/25168585/c/2500/1987/0/18…/214e7e/4589233930/il_340x270.4589233930_dg79.jpg',
    name: 'Custom Pet Portraits Using Pet Photo Personalized Digital Dog...',
    rating: '(10,962)',
    actualprice: 1270,
    discount: 40,
  },
  {
    url: 'https://i.etsystatic.com/27890741/c/2343/1862/320/…/31a0dd/4028709894/il_340x270.4028709894_i6tr.jpg',
    name: 'Heart Keychain Set-Made with Authentic LEGO® Bricks,...',
    rating: '(12,228)',
    actualprice: 1438,
    discount: 50,
  },
  {
    url: 'https://i.etsystatic.com/26694795/c/2445/1943/282/…/035b01/3254592822/il_340x270.3254592822_5dss.jpg',
    name: 'Handmade Damascus Pocket Knife Rose Wood Handle Birthday Gift...',
    rating: '(6,172)',
    actualprice: 8538,
    discount: 70,
  },
];
for (let key = 0; key < gifts.length; key++) {
  const giftElement = document.createElement('div');
  giftList.appendChild(giftElement);
  giftElement.classList.add('gift-items');
  giftElement.innerHTML = `<div class="gift-img">
  <img
    src="${gifts[key].url}"
    alt=""
  />
</div>
<div class="gift-txt">
  <h3>
   ${gifts[key].name}
  </h3>
  <div class="rating">

    <span></span>
    <p>${gifts[key].rating}</p>
  </div>
  <div class="price">
    <p class=priceActual>₹${discountPercentage(
      gifts[key].actualprice,
      gifts[key].discount
    )}</p>
    <span>₹${gifts[key].actualprice}</span>
    <a href="">(${gifts[key].discount}% off)</a>
  </div>
</div>`;
}

// function starrating() {
//   for (i = 1; i <= 5; i++) {
//     const starEl = document.createElement('div');
//     star.appendChild(starEl);
//     starEl.classList.add('star-rating');
//     starEl.innerHTML = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="3 3 18 18" aria-hidden="true" focusable="false" width="16" height="16"><path d="M19.985,10.36a0.5,0.5,0,0,0-.477-0.352H14.157L12.488,4.366a0.5,0.5,0,0,0-.962,0l-1.67,5.642H4.5a0.5,0.5,0,0,0-.279.911L8.53,13.991l-1.5,5.328a0.5,0.5,0,0,0,.741.6l4.231-2.935,4.215,2.935a0.5,0.5,0,0,0,.743-0.6l-1.484-5.328,4.306-3.074A0.5,0.5,0,0,0,19.985,10.36Z" fill="#222222"></path></svg>`;
//   }
//   return i;
// }
// console.log(starrating());

// {/* <div class="star">${starrating()}</div> */}

// function discountPercentage(i){
// return i*(discounts/100)
// }
// console.log(discountPercentage(80))

// const priceActual = document.querySelectorAll('.priceActual');

// function discountPercentageNew(){
// for (let i = 0; i < gifts.length; i++) {
//   console.log(gifts[i].discount)
//   let discounts = gifts[i].discount;
//   let actualPrice = gifts[i].actualprice;
//   discountPercentage = actualPrice * (discounts / 100);
//   return discountPercentage
// }
// }
// console.log(discountPercentageNew())
// priceActual.innerHTML=`₹${discountPercentage}`

// for(let i=0;i<gifts.length;i++){
//   console.log(gifts[i].discount)
//   let discounts=gifts[i].discount
//   let actualPrice=gifts[i].actualprice
//   console.log(actualPrice)
//   console.log(discountPercentage(actualPrice,discounts))
//   const priceActual = document.querySelector('.priceActual');
//   priceActual.innerHTML=`₹${discountPercentage(actualPrice,discounts)}`
// }

function discountPercentage(actualPrice, discounts) {
  return (discountPrice = Math.round(actualPrice * ((100 - discounts) / 100)));
}

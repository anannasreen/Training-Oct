const nav_bar = document.getElementById('nav_bar');
const elements = document.querySelector('.elements');
const overview_list = document.querySelector('.overview-list');
const deals_list = document.querySelector('.deals-items');
// const overview_img = document.querySelectorAll('.overview-img');

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
  // console.log(value);
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
    url: 'https://i.etsystatic.com/32501528/c/1518/1518/253/…/4bdfa0/3702738409/il_300x300.3702738409_qfmi.jpg',
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

for (const key in Object.entries(overview)) {
  console.log(overview[key].url);
  const overviewEl = document.createElement('li');
  overview_list.appendChild(overviewEl);
  overviewEl.innerHTML = `<div class="overview-img"><img src=${overview[key].url}></div>
  <p>${overview[key].name}</p>`;
}

deals = [
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
for (const key in Object.entries(deals)) {
  console.log(deals[key].url);
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

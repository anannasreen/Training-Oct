import React from "react";

const obj = [
  {
    title: "Shop",
    features: [
      "Gift cards",
      "Sitemap",
      "Etsy blog",
      "Etsy United Kingdom",
      "Etsy Germany",
      "Etsy Canada",
    ],
  },
  {
    title: "Sell",
    features: ["Sell on Etsy", "Teams", "Forums", "Affiliates & Creators"],
  },
  {
    title: "About",
    features: [
      "Etsy, Inc.",
      "Policies",
      "Investors",
      "Careers",
      "Press",
      "Impact",
      "Legal imprint",
    ],
  },
  {
    title: "Help",
    features: ["Help Centre", "Privacy settings"],
  },
];

function createFooterDropdown() {
  return (
    <div className="footer-nav">
      <div className="footer-list"></div>
    </div>
  );
}

export default createFooterDropdown;

import React from "react";

function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

function Gallery() {
  return (
    <section>
      <h1>Amazing scientist</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

export default Gallery;

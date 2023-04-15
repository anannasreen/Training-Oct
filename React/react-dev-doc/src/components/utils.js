// export function getImageUrl(person, size = "s") {
//   return "https://i.imgur.com/" + person.imageId + size + ".jpg";
// }

// function getImageUrl(imageId, size = "s") {
//   return "https://i.imgur.com/" + imageId + size + ".jpg";
// }

// export default getImageUrl;

export default function getImageUrl(person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}

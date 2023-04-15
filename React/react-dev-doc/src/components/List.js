import { people } from "./data.js";
import getImageUrl from "./utils.js";

function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemists.map((person) => (
          <li key={person.id}>
            <img
              className="avatar"
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for
              {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {everyoneElse.map((person) => (
          <li key={person.id}>
            <img
              className="avatar"
              src={getImageUrl(person)}
              alt={person.name}
            />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for
              {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}

// function List() {
//   const chemists = people.filter(person =>
//     person.profession === 'chemist'
//   );
//   const listItems = people.map(person =>
//     <li>
//       <img
//         className='avatar'
//         src={getImageUrl(person)}
//         alt={person.name}
//       />
//       <p>
//         <b>{person.name}:</b>
//         {' ' + person.profession + ' '}
//         known for {person.accomplishment}
//       </p>
//     </li>
//   );
//   return <ul>{listItems}</ul>;
// }

// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario Jose Molina-Pasquel Henriques: chemist",
//   "Mohammed abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subramanyan Chandrasekhar: astrophysicist",
// ];

// const people = [
//   {
//     id: 0,
//     name: "Creola Katherine Johnson",
//     profession: "mathematician",
//   },
//   {
//     id: 1,
//     name: "Mario Jose Molina-Pasquel Henriquez",
//     profession: "chemist",
//   },
//   {
//     id: 2,
//     name: "Mohammed Abdus Salam",
//     profession: "physicist",
//   },
//   {
//     id: 3,
//     name: "Percy Lavon Julian",
//     profession: "chemist",
//   },
//   {
//     id: 4,
//     name: "Subramanyam Chandrasekhar",
//     profession: "astrophysicist",
//   },
// ];

// function List() {
//   const listItems = people.map((id, profession, name) => (
//     <li key={id}>{name}</li>
//   ));
//   return <ul>{listItems}</ul>;
// }

export default List;

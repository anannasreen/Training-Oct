function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil 2 cups of water.</li>
      <li>
        Add {drinkers} spoon of tea and {0.5 * drinkers}
      </li>
      <li>Add {0.5 * drinkers} cup of milk to boil and sugar to taste</li>
    </ol>
  );
}

function Chai() {
  return (
    <section>
      <h1>Spiced Chai Recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
    </section>
  );
}

export default Chai;

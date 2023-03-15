import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Status } from "./components/Status";

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "Bruce",
      last: "Wayne",
    },
    {
      first: "Clark",
      last: "Kent",
    },
    {
      first: "Princess",
      last: "Diana",
    },
  ];

  return (
    <div className="App">
      {/* <Counter message ="The count value is" /> */}
      {/* <DomRef /> */}
      {/* <MutableRef /> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <Counter /> */}
      {/* <User /> */}
      {/* <LoggedIn /> */}
      {/* <Container
        styles={{ border: "1px solid black", padding: "1rem", color: "red" }}
      /> */}
      {/* <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}
      {/* <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Anan" messageCount={20} isLoggedIn={false} /> */}
      {/* <Greet name="Anan" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
    </div>
  );
}

export default App;

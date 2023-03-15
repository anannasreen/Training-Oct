import React from "react";
import "./App.css";
import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";
import { Button } from "./components/Button";
import { Container } from "./components/Container";
import { Box } from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import { List } from "./components/generics/List";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { CustomButton } from "./components/html/Button";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { DomRef } from "./components/ref/DomRef";
import { MutableRef } from "./components/ref/MutableRef";
import { RandomNumber } from "./components/restriction/RandomNumber";
import { Counter } from "./components/state/Counter";
import { LoggedIn } from "./components/state/LoggedIn";
import { User } from "./components/state/User";
import { Status } from "./components/Status";
import { Toast } from "./components/templateliterals/Toast";
import { Text } from "./components/polymorphic/Text";

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
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor='someId' size="sm" color="secondary">
        Label
      </Text>

      {/* <CustomButton variant="primary" onClick={() => console.log("Clicked")}>
        Primary Button
      </CustomButton> */}

      {/* <Toast position="left-center" /> */}
      {/* <RandomNumber value={10} isPositive={true} /> */}

      {/* <List
        items={["Batman", "Superman", "Wonder Women"]}
        onClick={(item) => console.log(item)}
      />

      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />

      <List
        items={[
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
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}
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

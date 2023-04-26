import React, { useState } from "react";

const initialState = [
  {
    name: "house",
    rooms: [
      {
        name: "room1",
        text: "Room1",
      },
    ],
  },
  {
    name: "car",
    text: "i20",
  },
];

function RoomName(props) {
  const { data, onChange } = props;

  return (
    <div>
      <div>Update Room Name</div>
      <input value={data.text} />
    </div>
  );
}

function CarName() {
  const { data } = props;

  return (
    <div>
      <div>Update Car Name</div>
      <input value={data.text} />
    </div>
  );
}

export default function Test() {
  const [info, setInfo] = useState(initialState);

  const onRoomChange = (evt) => {
    setInfo((state) => {
      var newState = [
        {
          ...state[0],
          rooms: [
            {
              ...state[0].rooms[0],
              text: evt.target.value,
            },
          ],
        },
        state[1],
      ];
      return newState;
    });
  };

  return (
    <div>
      <RoomName data={info[0].rooms[0]} />
      <CarName data={info[1]} />
    </div>
  );
}

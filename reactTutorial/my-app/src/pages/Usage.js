import React from "react";
import "./usage.css";

function Usage() {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("white");
  const [boom, setBoom] = useState(false);

  useEffect(() => {
    console.log("EFFECT");
    return () => {
      console.log("CLEAN UP");
    };
  }, []);

  //   useEffect(() => {
  //     setBoom(false);
  //     const id = setTimeout(() => {
  //       setBoom(true);
  //     }, value * 1000);
  //     // console.log("Inside the Use Effect" + value);
  //     return () => {
  //       //   console.log("Clean up" + value);
  //       clearTimeout(id);
  //     };
  //   }, [value]);

  return (
    <div>
      <div className="usage" style={{ background: color }}>
        <div className="usage-item">
          <button
            onClick={() => {
              setValue((state) => {
                return state + 1;
              });
            }}
          >
            Increment
          </button>
          <label>{value}</label>
          <button
            onClick={() => {
              setValue((state) => {
                return state - 1;
              });
            }}
          >
            Decrement
          </button>
        </div>
        <button
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
      </div>
      <div className="boom">
        <span>BOOM</span>
      </div>
    </div>
  );
}

export default Usage;

import React, { useState, FormEvent } from "react";
import Console from "./Console";
import Board from "./Board";

//import utils
import splitInputString from "../utils/splitInputString";
import initInputChecker from "../utils/initInputChecker";

//import interface
import {RobotData} from '../constants/constants'

const InputForm: React.FC = () => {
  const [input, setInput] = useState("");
  const [inputArrayOfStrings, setInputArrayOfStrings] = useState([]);
  const [coords, setCoords] = useState([]);
  const [robotData, setRobotData] = useState <RobotData>({
    command: "",
    error: "",
    x: null,
    y: null,
    facing: ""
  });

  /**
   * Function: handleSubmit
   * Goal:    onClick, set InputArrayOfStrings state and setInput back to ""
   */

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setRobotData(splitInputString(input));
    setRobotData(initInputChecker(robotData))
    console.log(robotData)
    // let outputDisplay = initInputChecker(splitInputString(input), coords);

    // console.log(outputDisplay, "This is outputdisplay");
    // if (outputDisplay[0][0] !== "ERROR") {
    //   setCoords(outputDisplay.slice(1, 4));
    // }

    // setInputArrayOfStrings(outputDisplay);
    // setInput("");

    // outputDisplay = coords;
  };
  console.log(robotData)
  /**
   * Function: handleChange
   * Goal:    set Input state to user input
   */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="displays">
      <div className="displaySpacer">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            className="inputBox"
            name="robotCommands"
            type="text"
            value={input}
            placeholder="Input robot commands!"
          />
          <button className="goButton">Go</button>
        </form>
        <Console inputArrayOfStrings={inputArrayOfStrings} />
      </div>
      <Board coords={coords} />
    </div>
  );
};

export default InputForm;

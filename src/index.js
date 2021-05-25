import React from "react";
import ReactDOM from "react-dom";
//extension kept just for ease of reference
//for default: can actually name as you wish the thing u wanna import, as long as use the same name in this file (eg.pie instead of pi)
//can also use wildcard, but discouraged (refer to Angela's END code for example)
import pie, { doublePi, triplePi } from "./math.js";

ReactDOM.render(
  <ul>
    {/*using pi from math.js in curly braces below */}
    <li>{pie}</li>
    {/*Note: because doublePi is a function, need to include parentheses after its name */}
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
//extension .js in math.js kept just for ease of reference
//ONLY for default: can actually name the object differently from what it's named in math.js, as long as use the same name in this file
//can also use wildcard, but discouraged (refer to Notion notes for example, under Section 33.6)
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

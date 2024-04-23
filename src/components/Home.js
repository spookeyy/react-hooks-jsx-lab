import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  
  return ( // line 8, adding style and pass color object with key:value pair.
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;

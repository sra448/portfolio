import React from "react";
import chroma from "chroma-js";

import Flo from "./Flo";

const getChromaColors = (): string[] => {
  const col1 = chroma.random();
  const col2 = chroma.random();

  if (chroma.contrast(col1, col2) > 4.5) {
    if (col1.luminance() < col2.luminance()) {
      return chroma.scale([col2, col1]).mode("lch").colors(25);
    } else {
      return chroma.scale([col1, col2]).mode("lch").colors(25);
    }
  } else {
    return getChromaColors();
  }
};

const App = () => {
  const colors = getChromaColors();
  const h2Color = chroma(colors[0]).brighten(2).hex();

  const bgColor = chroma(colors[0]).brighten(2).luminance() > 0.96 ? chroma(colors[24]).brighten(4).hex() : "white"

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <Flo colors={colors} />
      <div className="navigation">
        <a href="http://sra448.github.io/conway-game-of-life/"><h1 style={{ color: colors[10] }}>Game of Life</h1></a>
        <a href="http://sra448.github.io/minekeepr2/"><h1 style={{ color: colors[14] }}>Minesweeper</h1></a>
        <a href="https://github.com/sra448"><h1 style={{ color: colors[18] }}>GitHub</h1></a>
        <a href="https://www.linkedin.com/in/florian-unternaehrer-807734150/"><h1 style={{ color: colors[22] }}>LinkedIn</h1></a>
      </div>
      <h2 style={{ color: h2Color }}>
        What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and
        typesetting industry Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s when an unknown printer took a galley of type
        and scrambled it to make a type specimen book it has? What is Lorem
        Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s when an unknown printer took a galley of type and
        scrambled it to make a type specimen book it has? What is Lorem Ipsum
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry Lorem Ipsum has been the industry's standard dummy text ever
      </h2>
    </div>
  );
};

export default App;

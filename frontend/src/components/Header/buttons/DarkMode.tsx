import React, { useState } from "react";
// @ts-ignore
import moonbtn_white from "../../images/header/moon_white.png";
// @ts-ignore
import sunbtn_white from "../../images/Header/sun_white.png";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      className={`dark-mode-toggle ${
        isDarkMode ? "dark-mode-moon" : "dark-mode-sun"
      }`}
      onClick={toggleDarkMode}
    >
      <img
        src={isDarkMode ? sunbtn_white : moonbtn_white}
        alt={isDarkMode ? "Sun" : "Moon"}
      />
    </button>
  );
}

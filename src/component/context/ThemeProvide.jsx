/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ModesContext from "./ModesContext";

const ModesProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [colors, setColors] = useState({
    Bcolor: 'white',
    color: 'black'
  });

  // Function to toggle between light and dark modes
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      // console.log("Dark mode");
      setColors({
        Bcolor: 'black',
        color: 'white'
      });
    } else {
      // console.log("Light mode");
      setColors({
        Bcolor: 'white',
        color: 'black'
      });
    }
  }, [isDarkMode]);

  return (
    <ModesContext.Provider value={{ isDarkMode, toggleTheme, ...colors }}>
      {props.children}
    </ModesContext.Provider>
  );
};

export default ModesProvider;

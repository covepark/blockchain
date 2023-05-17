import React, {useState} from "react";
import ThemeContext from "./16-1. ThemeContext";
import Main from "./16-2. Main";

function LightDarkMode(props) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme == 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
        <Main/>
        </ThemeContext.Provider>
    );
}

export default LightDarkMode;
import { createContext, useState } from "react";

export const ThemeContext = createContext();

// function useState(theme, setTheme) useState ('dark'){
//     switch (action.type) {
//         case "THEME_TOGGLE": {
//             return theme === 'light' ? 'dark' : 'light'
//         }
//     }
// }

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light')
    return (
        <ThemeContext.Provider value={{ theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}















// import { createContext, useReducer } from "react";

// export const ThemeContext = createContext();

// function reducerFunction(theme, action) {
//     switch (action.type) {
//         case "THEME_TOGGLE": {
//             return theme === 'light' ? 'dark' : 'light'
//         }
//     }
// }

// export function ThemeProvider({ children }) {
//     const [theme, dispatch] = useReducer(reducerFunction, 'light')
//     return (
//         <ThemeContext.Provider value={{ theme, dispatch}}>
//             {children}
//         </ThemeContext.Provider>
//     );
// }
"use client"
import React, { Dispatch, createContext, useEffect, useReducer } from "react";

type ActionType = { type: string };
type ThemeType = { value: boolean, name: string };

let defaultTheme = true;
const getInitialTheme = () => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    return darkThemeMq.matches ? true : false;
};

//dark - true
const ThemeReducer = (theme: ThemeType, action: ActionType): ThemeType => {
    const setTheme = () => {
        if (action.type === 'Light')
            return {
                value: false, name: 'Light'
            };
        else if (action.type === 'Dark')
            return {
                value: true, name: 'Dark'
            };
        else if (action.type === 'System')
            return {
                value: getInitialTheme(),
                name: 'System'
            };
        else if (action.type === 'LocalStroge') {
            let data = localStorage.getItem('theme');
            if (data) {
                let Themedata = JSON.parse(data);
                return Themedata as ThemeType;
            }
            else {//Fallback to System Theme     
                return {
                    value: getInitialTheme(),
                    name: 'System'
                };
            }
        }
        return theme;
    }
    let newTheme = setTheme();
    localStorage.removeItem('theme');
    localStorage.setItem('theme', JSON.stringify(newTheme));
    return newTheme;
}

const ThemeContext = createContext<{ theme: ThemeType, dispatch: Dispatch<ActionType> }>({
    theme: { value: defaultTheme, name: 'System' },
    dispatch: () => null
});


const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, dispatch] = useReducer(ThemeReducer, { value: defaultTheme, name: 'System' });

    useEffect(() => {
        dispatch({ type: 'LocalStroge' });
    }, []);

    return <ThemeContext.Provider value={{ theme, dispatch }}>
        {children}
    </ThemeContext.Provider>;
};


export { ThemeContext }
export default ThemeProvider
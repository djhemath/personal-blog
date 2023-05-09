import { Theme, themes, ThemeSettings, lightTheme, darkTheme, updateRootCSSVariables } from "@/utils/theme.utils";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi"
import styles from './ThemeSwitch.module.css';



export function ThemeSwitch() {
    const [ theme, setTheme ] = useState<Theme>(null);

    // Assign the default theme
    // 1. Check whether the theme is stored in local storage or not
    // 2. If theme is not in local storage, get the prefers-color-scheme settings

    useEffect(() => {
        let themeToLoad: (Theme | null) = null;
        const themeFromLocalStorage: Theme = window.localStorage.getItem('theme') as Theme;

        if(themeFromLocalStorage && themes.includes(themeFromLocalStorage)) {
            themeToLoad = themeFromLocalStorage;
        } else {
            if(window.matchMedia) {
                const themeFromBrowserSettings: Theme =  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'DARK': 'LIGHT';
                themeToLoad = themeFromBrowserSettings;
            } else {
                themeToLoad = 'LIGHT';
            }
        }

        setTheme(themeToLoad);
    }, []);

    useEffect(() => {
        updateRootCSSVariables(theme);
    }, [ theme ]);

    const toggleTheme = () => {
        const currentTheme = theme === 'DARK' ? 'LIGHT': 'DARK';

        setTheme(currentTheme);
        window.localStorage.setItem('theme', currentTheme);
    };

    const inactiveTheme = theme === 'DARK' ? 'LIGHT': 'DARK';

    return (
        <div className={styles["theme-switch"]}>
            <button
                aria-label={`Change to ${inactiveTheme} mode`}
                title={`Change to ${inactiveTheme} mode`}
                onClick={toggleTheme}
            >
                {
                    theme === 'DARK'
                    ?
                        <FiSun
                            aria-hidden={true}
                            color={darkTheme.text}
                        />
                    :
                        <FiMoon
                            aria-hidden={true}
                            color={lightTheme.text}
                        />
                }
            </button>
        </div>
    );
}
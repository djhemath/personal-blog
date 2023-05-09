export type Theme = ('LIGHT' | 'DARK' | null);
export type ThemeSettings = {
    background: string,
    text: string,
    hover: string,
};

export const themes: Theme[] = ['LIGHT', 'DARK'];

export const lightTheme: ThemeSettings = {
    background: '#F0F0F0',
    text: '#222222',
    hover: '#E9E9E9',
};

export const darkTheme: ThemeSettings = {
    background: '#161616',
    text: '#ededed',
    hover: '#262626',
};

export function getInitialThemeScript () {
    const script = `
      (function() {
        const theme = {
            LIGHT: ${JSON.stringify(lightTheme)},
            DARK: ${JSON.stringify(darkTheme)}
        };

        const localTheme = localStorage.getItem('theme') || 'LIGHT';
        const root = document.documentElement;

        root.style.setProperty('--background', theme[localTheme].background);
        root.style.setProperty('--text', theme[localTheme].text);
        root.style.setProperty('--hover', theme[localTheme].hover);
      })();
    `;
    return { __html: script };
};

export function updateRootCSSVariables(theme: Theme) {
    const root = document.documentElement;

    let themeSettings: ThemeSettings = {
        background: '',
        text: '',
        hover: '',
    };

    if(theme === 'LIGHT') {
        themeSettings = lightTheme;
    } else {
        themeSettings = darkTheme;
    }

    root.style.setProperty('--background', themeSettings.background);
    root.style.setProperty('--text', themeSettings.text);
    root.style.setProperty('--hover', themeSettings.hover);
}
export type Theme = ('LIGHT' | 'DARK' | null);
export type ThemeSettings = {
    background: string,
    text: string,
    text80: string,
    text70: string,
    hover: string,
    cardBG: string,
    cardHoverShadow: string,
};

export const themes: Theme[] = ['LIGHT', 'DARK'];

export const lightTheme: ThemeSettings = {
    background: '#F0F0F0',
    text: '#222222',
    text80: '#4D4D4D',
    text70: '#5F5F5F',
    hover: '#E9E9E9',
    cardBG: '#FFFFFF',
    cardHoverShadow: '#CCCCCC',
};

export const darkTheme: ThemeSettings = {
    background: '#161616',
    text: '#ededed',
    text80: '#E3E3E3',
    text70: '#BBBBBB',
    hover: '#262626',
    cardBG: '#2F2F2F',
    cardHoverShadow: '#222222',
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
        root.style.setProperty('--text-80', theme[localTheme].text80);
        root.style.setProperty('--text-70', theme[localTheme].text70);
        root.style.setProperty('--hover', theme[localTheme].hover);
        root.style.setProperty('--card-bg', theme[localTheme].cardBG);
        root.style.setProperty('--card-hover-shadow', theme[localTheme].cardHoverShadow);
      })();
    `;
    return { __html: script };
};

export function updateRootCSSVariables(theme: Theme) {
    const root = document.documentElement;

    let themeSettings: ThemeSettings = {
        background: '',
        text: '',
        text80: '',
        text70: '',
        hover: '',
        cardBG: '',
        cardHoverShadow: '',
    };

    if(theme === 'LIGHT') {
        themeSettings = lightTheme;
    } else {
        themeSettings = darkTheme;
    }

    root.style.setProperty('--background', themeSettings.background);
    root.style.setProperty('--text', themeSettings.text);
    root.style.setProperty('--text-80', themeSettings.text80);
    root.style.setProperty('--text-70', themeSettings.text70);
    root.style.setProperty('--hover', themeSettings.hover);
    root.style.setProperty('--card-bg', themeSettings.cardBG);
    root.style.setProperty('--card-hover-shadow', themeSettings.cardHoverShadow);
}
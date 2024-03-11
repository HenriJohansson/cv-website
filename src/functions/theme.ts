
export enum ThemeOptions {
  LIGHT ='light',
  DARK = 'dark'
}

export function toggleTheme(theme?: ThemeOptions) {

  //Function to set theme to localStorage
  const currentTheme = localStorage.getItem('theme');
  function setTheme(themeName: ThemeOptions) {
    localStorage.setItem('theme', themeName);
  }

  //Priority level 3
  //Set the theme based on matchMedia
  if (window.matchMedia('(prefers-color-scheme: dark)')) {
    setTheme(ThemeOptions.DARK);
    return;
  }

  if (window.matchMedia('(prefers-color-scheme: light)')) {
    setTheme(ThemeOptions.LIGHT);
    return;
  }

  //Priority level 2
  //Set theme from localstorage
  if (currentTheme) {
    if (currentTheme === ThemeOptions.DARK) {
      setTheme(ThemeOptions.DARK);
    }

    if (currentTheme === ThemeOptions.LIGHT) {
      setTheme(ThemeOptions.LIGHT);
    }
    return;
  }

  //Priority level 1
  //Set theme from user request
  if(theme){
    setTheme(theme);
  }
}

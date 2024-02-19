import { useEffect, useState } from "react";

function getTheme(): string{
  const mode = "light"
  return mode
}

export function useTheme() {
  const [theme, setTheme] = useState(getTheme());

  useEffect(() => {
    function handleToggle(event: MediaQueryListEvent) {
      setTheme(event.matches ? "dark" : "light");
    }
    const scheme = window.matchMedia('(prefers-color-scheme: dark)')

    scheme.addEventListener('change', handleToggle);
    return () => window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleToggle);
  }, []);

  return theme;
}

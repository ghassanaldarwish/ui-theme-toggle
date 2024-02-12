import * as React from 'react';

type Theme = "light" | "dark" | "system";
declare function useTheme(): {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
declare function ThemeToggle(): React.JSX.Element;

export { ThemeToggle, useTheme };

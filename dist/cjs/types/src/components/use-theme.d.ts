type Theme = "light" | "dark" | "system";
export declare function useTheme(): {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};
export {};

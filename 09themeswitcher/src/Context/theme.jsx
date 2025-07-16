// /src/Context/theme.jsx
import { useContext, createContext } from "react";

export const themecontext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {},
});

export const Themeprovider = themecontext.Provider;

export default function useTheme() { // <--- This is the default export
    return useContext(themecontext)
}
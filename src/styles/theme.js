import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors : {
        brand: {
            primary: "#9A1C1C",
            secondary: "#A70F0F",
            tertiary: "#C50B0B", 
            gray: "#9DA1A4",
            white: "#EAEAEB",
            dark: {
                900: "#202225",
                800: "#292B2F",
                700: "#2F3136",
                600: "#42464E",
            },
        }
    },
    styles: {
        global: () => ({
            body: {
                bg: "brand.dark.700",
                color: "brand.white",
            },
        }),
    },
});
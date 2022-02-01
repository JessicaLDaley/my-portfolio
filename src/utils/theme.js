import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#26262a",
    200: "#277147",
    300: "#989898",
    400: "#7951a8",
    500: "#69369e",
    600: "#c5e7d8",
    700: "#eeeef2",
    800: "#6e7171",
    900: "#2f6f36"

    
  }
};


const customTheme = extendTheme({ colors});

export default customTheme;
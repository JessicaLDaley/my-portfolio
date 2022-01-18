import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#26262a",
    200: "#656565",
    300: "#989898",
    400: "#7951a8",
    500: "#69369e",
    600: "#ffffff",
    700: "#eeeef2",
    800: "#6e7171"
    
  }
};


const customTheme = extendTheme({ colors});

export default customTheme;
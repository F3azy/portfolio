import "./styles/global.css";
import { theme } from "./styles/theme";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { Sidebar, MobileNav } from "./components";
import { About, Contact, Hero, Projects, Tech } from "./sections";
import ActiveSectionProvider from "./context/ActiveSectionContext";

function App() {
  return (
    <ActiveSectionProvider>
      <ChakraProvider theme={theme}>
        <Sidebar />
        <MobileNav />
        <Box m={{ base: "48px 0 0", md: "60px 0 0", lg: "0 0 0 72px" }}>
          <Hero />
          <Box
            p={{
              base: "0 16px",
              lg: "0 90px",
              xl: "0 180px",
              "2xl": "0 320px",
            }}
          >
            <About />
            <Tech />
            <Projects />
            <Contact />
          </Box>
        </Box>
      </ChakraProvider>
    </ActiveSectionProvider>
  );
}

export default App;
